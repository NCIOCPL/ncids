export const nciFeatureCardRow3Cards = () => {
	const div = document.createElement('div');

	// language=HTML
	div.innerHTML = `<div id="nci-feature-card-row-3cards" class="grid-container">
    <div class="feature-card-row">
      <div>
        <a href="https://www.google.com" class="feature-card" aria-label="Feature Card">
          <picture>
            <source media="(max-width: 639px)" srcset="./images/news1-16x9.jpg"/>
            <source media="(max-width: 879px)" srcset="./images/news1-1x1.jpg"/>
            <source media="(min-width: 880px)" srcset="./images/news1-4x3.jpg"/>
            <img src="./assets/images/news1-16x9.jpg" />
          </picture>
          <div class="feature-card-text">
            <h2>CRCHD Diversity Training</h2>
            <p>Treatment for severe COVID-19 with interferons decreased the viral load of SARS-CoV-2, a new study found.</p>
          </div>
        </a>
      </div>
      <div>
        <a href="https://www.google.com" class="feature-card" aria-label="Feature Card">
          <picture>
            <source media="(max-width: 639px)" srcset="./images/news2-16x9.jpg"/>
            <source media="(max-width: 879px)" srcset="./images/news2-1x1.jpg"/>
            <source media="(min-width: 880px)" srcset="./images/news2-4x3.jpg"/>
            <img src="./images/news2-16x9.jpg" />
          </picture>
          <div class="feature-card-text">
            <h2>Grant Application Development, Submission, Review, & Award</h2>
            <p>In patients with certain variations in the OAS1 gene, treatment for severe COVID-19 with interferons, a type of protein that can help the body’s immune system fight infections, decreased the viral load of SARS-CoV-2, a new study found.</p>
          </div>
        </a>
      </div>
      <div>
        <a href="https://www.google.com" class="feature-card" aria-label="Feature Card">
          <picture>
            <source media="(max-width: 639px)" srcset="./images/news3-16x9.jpg"/>
            <source media="(max-width: 879px)" srcset="./images/news3-1x1.jpg"/>
            <source media="(min-width: 880px)" srcset="./images/news3-4x3.jpg"/>
            <img src="./images/news3-16x9.jpg" />
          </picture>
          <div class="feature-card-text">
            <h2>Capacitación en diversidad CRCHD</h2>
            <p>El tratamiento para la COVID-19 grave con interferones disminuyó la carga viral del SARS-CoV-2, según encontró un nuevo estudio.</p>
          </div>
        </a>
      </div>
    </div>
  </div>`;

	return div;
};
