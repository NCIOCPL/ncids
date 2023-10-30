import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import md5 from 'md5';

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
							{fm.overview && (
								<>
									<h2>Overview</h2>
									<div
										className={`overview__pane ${
											fm.overview.whitebg ? 'bg-white' : 'bg-base-lighter'
										}`}>
										<img
											src={`../overview-images/${fm.overview.imgsrc}`}
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
									<h2>Variations</h2>
									{fm.variations.intro && (
										<ReactMarkdown
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
									<h2>Modifications</h2>
									{fm.modifications.intro && (
										<ReactMarkdown
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
									<h2>Usage</h2>
									<ReactMarkdown
										remarkPlugins={[remarkGfm]}
										rehypePlugins={[rehypeRaw]}
										className="usa-prose">
										{fm.usage}
									</ReactMarkdown>
								</>
							)}
							{fm.best_practices && (
								<>
									<h2>Best Practices</h2>
									<ReactMarkdown
										remarkPlugins={[remarkGfm]}
										rehypePlugins={[rehypeRaw]}
										className="usa-prose">
										{fm.best_practices}
									</ReactMarkdown>
								</>
							)}
							{fm.patterns && (
								<>
									<h2>Patterns</h2>
									<ReactMarkdown
										remarkPlugins={[remarkGfm]}
										rehypePlugins={[rehypeRaw]}
										className="usa-prose">
										{fm.patterns}
									</ReactMarkdown>
								</>
							)}
							{fm.accessibility && (
								<>
									<h2>Accessibility</h2>
									<ReactMarkdown
										remarkPlugins={[remarkGfm]}
										rehypePlugins={[rehypeRaw]}
										className="usa-prose">
										{fm.accessibility}
									</ReactMarkdown>
								</>
							)}
							{fm.code_snippets && (
								<>
									<h2>Code Snippets</h2>
									{fm.code_snippets.intro && (
										<ReactMarkdown
											remarkPlugins={[remarkGfm]}
											rehypePlugins={[rehypeRaw]}
											className="usa-prose">
											{fm.code_snippets.intro}
										</ReactMarkdown>
									)}
									{fm.code_snippets.elements.map((item, idx) => (
										<React.Fragment key={idx}>
											{item.title && <h3>{item.title}</h3>}
											<ReactMarkdown
												remarkPlugins={[remarkGfm]}
												rehypePlugins={[rehypeRaw]}
												className="usa-prose">
												{item.intro}
											</ReactMarkdown>
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
												remarkPlugins={[remarkGfm]}
												rehypePlugins={[rehypeRaw]}
												className="usa-prose">
												{item.summary}
											</ReactMarkdown>
										</React.Fragment>
									))}
									{fm.code_snippets.outtro && (
										<ReactMarkdown
											remarkPlugins={[remarkGfm]}
											rehypePlugins={[rehypeRaw]}
											className="usa-prose">
											{fm.code_snippets.outtro}
										</ReactMarkdown>
									)}
								</>
							)}
							{children}
							{fm.updates && (
								<>
									<h2>Updates</h2>
									<table>
										<caption>NCIDS Design system updates</caption>
										<thead>
											<tr>
												<th scope="col">Date</th>
												<th scope="col">NCIDS Version</th>
												<th scope="col">Affects</th>
												<th scope="col">Description</th>
											</tr>
										</thead>
										<tbody>
											{fm.updates.map((item) => (
												<tr key={md5(item.date)}>
													<td>{new Date(item.date).toLocaleDateString()}</td>
													<td>{item.version}</td>
													<td>{item.affects}</td>
													<td>{item.description}</td>
												</tr>
											))}
										</tbody>
									</table>
								</>
							)}
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
