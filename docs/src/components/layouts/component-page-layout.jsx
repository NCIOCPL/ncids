import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import md5 from 'md5';
import GithubSlugger from 'github-slugger';
import textContent from 'react-addons-text-content';
import { withPrefix, withAssetPrefix } from 'gatsby-link';

import Head from './head';
import PropTypes from 'prop-types';
import Banner from '../banner';
import Header from '../header';
import Footer from '../footer/footer';
import useNavData from '../../hooks/use-nav-data';
import SideNavigation from '../navigation/SideNavigation';
import buildNavigationFromMdx from '../../utils/buildNavigationFromMdx';
import findObjectByKey from '../../utils/findObjectByKey';
import TwigCode from '../TwigCode';
import Code from '../Code';
import MarkdownHeader from '../markdown-heading';
import ScriptWrapper from '../ScriptWrapper';

/**
 * Helper method to take site root links (e.g., /foo) and prepend the
 * url with the pathPrefix passed to Gatsby.
 * @param {string} href the url to update.
 * @returns fixed URL
 */
const prefixSiteRootLinks = (href) => {
	return href.startsWith('/') ? withPrefix(href) : href;
};

const MarkdownComponents = {
	h2: MarkdownHeader(2),
	h3: MarkdownHeader(3),
	a: ({ href, children }) => <a href={prefixSiteRootLinks(href)}>{children}</a>,
	code: ({ children }) => <code className="site-inline-code">{children}</code>,
};

// Create slugified headings for title code snippet sections
const slugger = new GithubSlugger();
const getSlugifiedHeading = (headingText) => {
	const text = headingText ? textContent(headingText) : '';
	const id = text ? slugger.slug(text) : '';
	return id;
};

const renderSnippetHeading = (snippetTitle) => {
	const slugifiedTitle = getSlugifiedHeading(snippetTitle);
	return (
		<h3 id={slugifiedTitle}>
			<a href={`#${slugifiedTitle}`} className="site-linked-header">
				{snippetTitle}
			</a>
		</h3>
	);
};

const renderSnippetDescription = (snippetDescription) => {
	return (
		<ReactMarkdown
			components={MarkdownComponents}
			remarkPlugins={[remarkGfm]}
			rehypePlugins={[rehypeRaw]}
			className="usa-prose">
			{snippetDescription}
		</ReactMarkdown>
	);
};

const renderSnippetInitScript = (initScript) => {
	return <ScriptWrapper>{initScript}</ScriptWrapper>;
};

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
			<Head
				title={pageContext.frontmatter.browser_title}
				description={pageContext.frontmatter.description}
			/>
			<a className="usa-skipnav" href="#main-content">
				Skip to main content
			</a>
			<Banner />
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
							<h1>{fm.page_title}</h1>
							{fm.description && (
								<ReactMarkdown
									components={MarkdownComponents}
									remarkPlugins={[remarkGfm]}
									rehypePlugins={[rehypeRaw]}
									className="usa-prose">
									{fm.description}
								</ReactMarkdown>
							)}
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
									<h2 id="overview">
										<a href="#overview" className="site-linked-header">
											Overview
										</a>
									</h2>
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
										<ReactMarkdown
											remarkPlugins={[remarkGfm]}
											rehypePlugins={[rehypeRaw]}
											className="usa-prose">
											{fm.overview.intro}
										</ReactMarkdown>
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
									<h2 id="variations">
										<a href="#variations" className="site-linked-header">
											Variations
										</a>
									</h2>
									{fm.variations.intro && (
										<ReactMarkdown
											components={MarkdownComponents}
											remarkPlugins={[remarkGfm]}
											rehypePlugins={[rehypeRaw]}
											className="usa-prose">
											{fm.variations.intro}
										</ReactMarkdown>
									)}
									{fm.variations.code && (
										<Code className="language-html" noCode>
											{fm.variations.code}
										</Code>
									)}
									{fm.variations.outtro && (
										<ReactMarkdown
											components={MarkdownComponents}
											remarkPlugins={[remarkGfm]}
											rehypePlugins={[rehypeRaw]}
											className="usa-prose">
											{fm.variations.outtro}
										</ReactMarkdown>
									)}
								</>
							)}
							{fm.modifications && (
								<>
									<h2 id="modifications">
										<a href="#modifications" className="site-linked-header">
											Modifications
										</a>
									</h2>
									{fm.modifications.intro && (
										<ReactMarkdown
											components={MarkdownComponents}
											remarkPlugins={[remarkGfm]}
											rehypePlugins={[rehypeRaw]}
											className="usa-prose">
											{fm.modifications.intro}
										</ReactMarkdown>
									)}
									{fm.modifications.code && (
										<Code className="language-html" noCode>
											{fm.modifications.code}
										</Code>
									)}
									{fm.modifications.outtro && (
										<ReactMarkdown
											components={MarkdownComponents}
											remarkPlugins={[remarkGfm]}
											rehypePlugins={[rehypeRaw]}
											className="usa-prose">
											{fm.modifications.outtro}
										</ReactMarkdown>
									)}
								</>
							)}
							{fm.usage && (
								<>
									<h2 id="usage">
										<a href="#usage" className="site-linked-header">
											Usage
										</a>
									</h2>
									<ReactMarkdown
										components={MarkdownComponents}
										remarkPlugins={[remarkGfm]}
										rehypePlugins={[rehypeRaw]}
										className="usa-prose">
										{fm.usage}
									</ReactMarkdown>
								</>
							)}
							{fm.best_practices && (
								<>
									<h2 id="best-practices">
										<a href="#best-practices" className="site-linked-header">
											Best Practices
										</a>
									</h2>
									<ReactMarkdown
										components={MarkdownComponents}
										remarkPlugins={[remarkGfm]}
										rehypePlugins={[rehypeRaw]}
										className="usa-prose">
										{fm.best_practices}
									</ReactMarkdown>
								</>
							)}
							{fm.patterns && (
								<>
									<h2 id="patterns">
										<a href="#patterns" className="site-linked-header">
											Patterns
										</a>
									</h2>
									<ReactMarkdown
										components={MarkdownComponents}
										remarkPlugins={[remarkGfm]}
										rehypePlugins={[rehypeRaw]}
										className="usa-prose">
										{fm.patterns}
									</ReactMarkdown>
								</>
							)}
							{fm.accessibility && (
								<>
									<h2 id="accessibility">
										<a href="#accessibility" className="site-linked-header">
											Accessibility
										</a>
									</h2>
									<ReactMarkdown
										components={MarkdownComponents}
										remarkPlugins={[remarkGfm]}
										rehypePlugins={[rehypeRaw]}
										className="usa-prose">
										{fm.accessibility}
									</ReactMarkdown>
								</>
							)}
							{fm.code_snippets && (
								<>
									<h2 id="code-snippets">
										<a href="#code-snippets" className="site-linked-header">
											Code Snippets
										</a>
									</h2>
									{fm.code_snippets.intro && (
										<ReactMarkdown
											components={MarkdownComponents}
											remarkPlugins={[remarkGfm]}
											rehypePlugins={[rehypeRaw]}
											className="usa-prose">
											{fm.code_snippets.intro}
										</ReactMarkdown>
									)}
									{fm.code_snippets.elements.map((item, idx) => (
										<React.Fragment key={idx}>
											{item.title && renderSnippetHeading(item.title)}
											{item.description &&
												renderSnippetDescription(item.description)}
											<ReactMarkdown
												components={MarkdownComponents}
												remarkPlugins={[remarkGfm]}
												rehypePlugins={[rehypeRaw]}
												className="usa-prose">
												{item.intro}
											</ReactMarkdown>
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
											<ReactMarkdown
												components={MarkdownComponents}
												remarkPlugins={[remarkGfm]}
												rehypePlugins={[rehypeRaw]}
												className="usa-prose">
												{item.summary}
											</ReactMarkdown>
										</React.Fragment>
									))}
									{fm.code_snippets.outtro && (
										<ReactMarkdown
											components={MarkdownComponents}
											remarkPlugins={[remarkGfm]}
											rehypePlugins={[rehypeRaw]}
											className="usa-prose">
											{fm.code_snippets.outtro}
										</ReactMarkdown>
									)}
								</>
							)}
							{fm.packages && (
								<>
									<h2 id="packages">
										<a href="#packages" className="site-linked-header">
											Packages
										</a>
									</h2>
									{fm.packages.intro && (
										<ReactMarkdown
											components={MarkdownComponents}
											remarkPlugins={[remarkGfm]}
											rehypePlugins={[rehypeRaw]}
											className="usa-prose">
											{fm.packages.intro}
										</ReactMarkdown>
									)}
									<Code className="language-scss" nopreview={true}>
										{fm.packages.code}
									</Code>
									{fm.packages.outtro && (
										<ReactMarkdown
											components={MarkdownComponents}
											remarkPlugins={[remarkGfm]}
											rehypePlugins={[rehypeRaw]}
											className="usa-prose">
											{fm.packages.outtro}
										</ReactMarkdown>
									)}
								</>
							)}
							{children}
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
		tableOfContents: PropTypes.object,
		pagePath: PropTypes.string,
		frontmatter: PropTypes.object,
	}),
	children: PropTypes.node,
};

export default ComponentPageLayout;
