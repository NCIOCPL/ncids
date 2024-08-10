import React from 'react';
import md5 from 'md5';
import { withPrefix, withAssetPrefix } from 'gatsby';

import PropTypes from 'prop-types';
import Banner from '../banner';
import Header from '../header';
import VersionRibbon from '../version-ribbon';
import Footer from '../footer/footer';
import { SluggerProvider } from '../../hooks/slugger';
import useNavData from '../../hooks/use-nav-data';
import SideNavigation from '../navigation/SideNavigation';
import buildNavigationFromMdx from '../../utils/buildNavigationFromMdx';
import findObjectByKey from '../../utils/findObjectByKey';
import TwigCode from '../TwigCode';
import Code from '../Code';
import MarkdownHeader from '../markdown-heading';
import ScriptWrapper from '../ScriptWrapper';
import FrontmatterMarkdown from '../frontmatter-markdown';

const renderSnippetInitScript = (initScript) => {
	return <ScriptWrapper>{initScript}</ScriptWrapper>;
};

const Heading2 = MarkdownHeader(2);
const Heading3 = MarkdownHeader(3);

const ComponentPageLayout = ({ pageContext, children }) => {
	// Get Nav Data from MDX files (hook)
	const navMdxData = useNavData();
	// Build an appropriate object for navigation data consumption
	const navData = buildNavigationFromMdx(navMdxData);

	// Get information from page's frontmatter
	const pagePath = pageContext.pagePath;
	// Find where we currently are in the navigation via page's path
	const currentPath = pagePath.split('/').filter((e) => e);
	// Get our current page's navData
	const result = findObjectByKey(navData, 'name', currentPath[0]);
	// Check if current page has children
	// (Example: Components page has a bunch of components as children)
	const hasChildren = result?.children.length > 0;
	const fm = pageContext.frontmatter;

	return (
		<>
			<a className="usa-skipnav" href="#main-content">
				Skip to main content
			</a>
			<Banner />
			<VersionRibbon {...pageContext.versionInfo} />
			<Header navData={navData} currentPath={currentPath} />
			<div className="usa-overlay" />
			<div className="usa-layout-docs usa-section">
				<div className="grid-container">
					<div className="grid-row grid-gap">
						{hasChildren && <SideNavigation data={result} path={currentPath} />}
						<main
							id="main-content"
							className={`usa-layout-docs__main desktop:${
								hasChildren ? 'grid-col-9' : 'grid-col-12'
							} usa-prose margin-bottom-4`}>
							{/* TODO: make into HOC;refactor components list in wrap-root-element as a separate file for mobility; create sample page with CODE and h1,  */}
							<SluggerProvider>
								<h1>{fm.page_title}</h1>

								<FrontmatterMarkdown content={fm.description} />
								{fm.figma_link && (
									<p>
										<a href={fm.figma_link}>View in Figma</a>
									</p>
								)}
								{fm.js_doc_link && (
									<p>
										<a href={withPrefix(fm.js_doc_link)}>
											View JavaScript Documentation
										</a>
									</p>
								)}
								{fm.overview && (
									<>
										<Heading2>Overview</Heading2>
										<div
											className={`overview__pane ${
												fm.overview.whitebg ? 'bg-white' : 'bg-base-lighter'
											}`}>
											<img
												src={withAssetPrefix(
													`/overview-images/${fm.overview.imgsrc}`
												)}
												aria-describedby="overview-list"
												alt={fm.overview.imgalt}
											/>
										</div>
										<div
											id="overview-list"
											className="overview__legend usa-prose">
											<FrontmatterMarkdown content={fm.overview.intro} />
											{fm.overview.elements && (
												<ol>
													{fm.overview.elements.map((item) => (
														<li key={md5(item.description)}>
															{item.description}
														</li>
													))}
												</ol>
											)}
										</div>
									</>
								)}
								{fm.variations && (
									<>
										<Heading2>Variations</Heading2>
										<FrontmatterMarkdown content={fm.variations.intro} />
										{fm.variations.code && (
											<Code className="language-html" noCode>
												{fm.variations.code}
											</Code>
										)}
										<FrontmatterMarkdown content={fm.variations.outtro} />
									</>
								)}
								{fm.modifications && (
									<>
										<Heading2>Modifications</Heading2>
										<FrontmatterMarkdown content={fm.modifications.intro} />
										{fm.modifications.code && (
											<Code className="language-html" noCode>
												{fm.modifications.code}
											</Code>
										)}
										<FrontmatterMarkdown content={fm.modifications.outtro} />
									</>
								)}
								{fm.usage && (
									<>
										<Heading2>Usage</Heading2>
										<FrontmatterMarkdown content={fm.usage} />
									</>
								)}
								{fm.best_practices && (
									<>
										<Heading2>Best Practices</Heading2>
										<FrontmatterMarkdown content={fm.best_practices} />
									</>
								)}
								{fm.patterns && (
									<>
										<Heading2>Patterns</Heading2>
										<FrontmatterMarkdown content={fm.patterns} />
									</>
								)}
								{fm.accessibility && (
									<>
										<Heading2>Accessibility</Heading2>
										<FrontmatterMarkdown content={fm.accessibility} />
									</>
								)}
								{fm.code_snippets && (
									<>
										<Heading2>Code Snippets</Heading2>
										<FrontmatterMarkdown content={fm.code_snippets.intro} />
										{fm.code_snippets.elements.map((item, idx) => (
											<React.Fragment key={idx}>
												{item.title && <Heading3>{item.title}</Heading3>}
												<FrontmatterMarkdown content={item.description} />
												<FrontmatterMarkdown content={item.intro} />
												{item.init_script &&
													renderSnippetInitScript(item.init_script)}
												<>
													{item.twig_template_path ? (
														<TwigCode
															templatePath={item.twig_template_path}
															json={item.code}
														/>
													) : (
														item.code && (
															<Code
																className="language-html"
																nopreview={!item.preview}>
																{item.code}
															</Code>
														)
													)}
												</>
												<FrontmatterMarkdown content={item.summary} />
											</React.Fragment>
										))}
										<FrontmatterMarkdown content={fm.code_snippets.outtro} />
									</>
								)}
								{fm.packages && (
									<>
										<Heading2>Packages</Heading2>
										<FrontmatterMarkdown content={fm.packages.intro} />
										<Code className="language-scss" nopreview={true}>
											{fm.packages.code}
										</Code>
										<FrontmatterMarkdown content={fm.packages.outtro} />
									</>
								)}
								{children}
							</SluggerProvider>
						</main>
					</div>
				</div>
			</div>
			<Footer
				variant="nci-big"
				accountId="USNIHNCI"
				categoryId="USNIHNCI_C25"
			/>
		</>
	);
};

ComponentPageLayout.propTypes = {
	frontmatter: PropTypes.object,
	pageContext: PropTypes.shape({
		versionInfo: PropTypes.shape({
			ncidsVersion: PropTypes.string,
			uswdsVersion: PropTypes.string,
		}),
		tableOfContents: PropTypes.object,
		pagePath: PropTypes.string,
		frontmatter: PropTypes.object,
	}),
	children: PropTypes.node,
};

export default ComponentPageLayout;
// This handles the <head> element.
export { Head } from './head';
