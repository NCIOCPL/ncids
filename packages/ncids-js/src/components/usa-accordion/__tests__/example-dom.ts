export const exampleAccordionPlain = (): HTMLElement => {
	const div = document.createElement('div');

	div.innerHTML = `
    <article class="usa-accordion" id="accEx1">
			<section class="usa-prose">
				<h3>this is section header 1 (ex. 1)</h3>
				<p>this is accordion content.</p>
        <ul>
          <li>fake list for content</li>
        </ul>
        <h4>Header meant to try and break stuff</h4>
        <p>
          Cuz they do this in content sometimes. this is the real test
        </p>
        <h3>this is section header 2 (ex. 1)</h3>
        <p>This is more content</p>
        <ol>
          <li>trying out some different content types</li>
        </ol>
        <h3>this is section header 3 (ex. 1)</h3>
        <p>Even more content</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
          iaculis fringilla orci eu sagittis. Phasellus sit amet neque
          vitae ex molestie condimentum sit amet sed leo.
        </p>
        <h3>this is section header 4 (ex. 1)</h3>
        <p>Even more content</p>
        <p>
          Donec ullamcorper porta nibh id accumsan. Quisque non ornare
          neque, et volutpat dolor. Vestibulum nisi ipsum, sagittis in
          ex ac, viverra placerat massa.
        </p>
      </section>
    </article>
	`;

	return div;
};

export const exampleAccordionBad = (): HTMLElement => {
	const div = document.createElement('div');

	div.innerHTML = `
    <article class="usa-accordion" id="accEx1" data-open-sections="1,2,3">
			<section class="usa-prose">
				<h3>this is section header 1 (ex. 1)</h3>
				<p>this is accordion content.</p>
        <ul>
          <li>fake list for content</li>
        </ul>
        <h4>Header meant to try and break stuff</h4>
        <p>
          Cuz they do this in content sometimes. this is the real test
        </p>
        <h3>this is section header 2 (ex. 1)</h3>
        <p>This is more content</p>
        <ol>
          <li>trying out some different content types</li>
        </ol>
        <h3>this is section header 3 (ex. 1)</h3>
        <p>Even more content</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
          iaculis fringilla orci eu sagittis. Phasellus sit amet neque
          vitae ex molestie condimentum sit amet sed leo.
        </p>
        <h3>this is section header 4 (ex. 1)</h3>
        <p>Even more content</p>
        <p>
          Donec ullamcorper porta nibh id accumsan. Quisque non ornare
          neque, et volutpat dolor. Vestibulum nisi ipsum, sagittis in
          ex ac, viverra placerat massa.
        </p>
      </section>
    </article>
	`;

	return div;
};

export const exampleAccordionInitialized = (): HTMLElement => {
	const div = document.createElement('div');

	div.innerHTML = `
		<div class="usa-accordion " data-open-sections="1">
			<h4 class="usa-accordion__heading">
				<button class="usa-accordion__button" aria-controls="acc1234" type="button" aria-expanded="true">
					First Amendment
				</button>
			</h4>
			<div class="usa-accordion__content usa-prose" id="acc1234">
				<p>Congress shall make no law respecting an establishment of religion, or prohibiting the free exercise thereof; or abridging the freedom of speech, or of the press; or the right of the people peaceably to assemble, and to petition the Government for a redress of grievances.</p>
			</div>
			<h4 class="usa-accordion__heading">
				<button class="usa-accordion__button" aria-controls="acc2345" type="button" aria-expanded="true">
					First Amendment
				</button>
			</h4>
			<div class="usa-accordion__content usa-prose" id="acc2345">
				<p>Congress shall make no law respecting an establishment of religion, or prohibiting the free exercise thereof; or abridging the freedom of speech, or of the press; or the right of the people peaceably to assemble, and to petition the Government for a redress of grievances.</p>
			</div>
			<h4 class="usa-accordion__heading">
				<button class="usa-accordion__button" aria-controls="acc3456" type="button" aria-expanded="true">
					First Amendment
				</button>
			</h4>
			<div class="usa-accordion__content usa-prose" id="acc3456">
				<p>Congress shall make no law respecting an establishment of religion, or prohibiting the free exercise thereof; or abridging the freedom of speech, or of the press; or the right of the people peaceably to assemble, and to petition the Government for a redress of grievances.</p>
			</div>
		</div>`;
	return div;
};
