import doctorA from './img/ostroff.jpg';
import doctorB from './img/banerjee.jpg';
import imageLead from './img/hug.jpg';
import placeHolder from './img/16x9_placeholder.png';
import headerImage from './img/series-header-image.jpg';

export const cardImage = `
<img loading="lazy" src="${placeHolder}" width="1408" height="792" alt="test ALT">
`;

export const leadImage = `
<div class="cgdp-embed-media-wrapper">
  <div
    data-caption=""
    data-embed-button="media_entity_embed"
    data-entity-embed-display="view_mode:media.image_display_article_medium"
    data-entity-type="media"
    data-entity-uuid="d5075051-6947-468c-88b2-3b1e9cbee4e4"
    data-cgov-yaml-query-bundle="cgov_image"
    data-cgov-yaml-query-name="Doctor Ostroff"
    class="align-right embedded-entity cgdp-embed-image"
    data-langcode="en"
    data-entity-embed-display-settings="[]"
  >
    <div class="cgdp-image">
      <figure>
        <img
          loading="lazy"
          src="${imageLead}"
          width="300"
          height="300"
          alt="Picture of doctor Ostroff."
        />

        <figcaption class="cgdp-image__caption">
					<div class="cgdp-image__caption-text">
						<p>People diagnosed with lung cancer are often faced with the stigma of the disease's association with smoking, causing them to experience feelings of guilt and shame.</p>
					</div>
					<p class="cgdp-image__credit">Credit: iStock//nadia_bormotova</p>
				</figcaption>
      </figure>
    </div>
  </div>
</div>
`;

export const doctorAEmbed = `
<div class="cgdp-embed-media-wrapper">
  <div
    data-caption=""
    data-embed-button="media_entity_embed"
    data-entity-embed-display="view_mode:media.image_display_article_medium"
    data-entity-type="media"
    data-entity-uuid="d5075051-6947-468c-88b2-3b1e9cbee4e4"
    data-cgov-yaml-query-bundle="cgov_image"
    data-cgov-yaml-query-name="Doctor Ostroff"
    class="align-right embedded-entity cgdp-embed-image"
    data-langcode="en"
    data-entity-embed-display-settings="[]"
  >
    <div class="cgdp-image">
      <figure>
        <img
          loading="lazy"
          src="${doctorA}"
          width="300"
          height="300"
          alt="Picture of doctor Ostroff."
        />

        <figcaption class="cgdp-image__caption">
          <div class="cgdp-image__caption-text">
            <p>Dr. Jamie Ostroff</p>
          </div>
        </figcaption>
      </figure>
    </div>
  </div>
</div>
`;

export const doctorBEmbed = `
<div class="cgdp-embed-media-wrapper">
  <div
    data-caption=""
    data-embed-button="media_entity_embed"
    data-entity-embed-display="view_mode:media.image_display_article_medium"
    data-entity-type="media"
    data-entity-uuid="d5075051-6947-468c-88b2-3b1e9cbee4e4"
    data-cgov-yaml-query-bundle="cgov_image"
    data-cgov-yaml-query-name="Doctor Banerjee"
    class="align-right embedded-entity cgdp-embed-image"
    data-langcode="en"
    data-entity-embed-display-settings="[]"
  >
    <div class="cgdp-image">
      <figure>
        <img
          loading="lazy"
          src="${doctorB}"
          width="300"
          height="300"
          alt="Picture of doctor Banerjee."
        />

        <figcaption class="cgdp-image__caption">
          <div class="cgdp-image__caption-text">
            <p>Dr. Smita Banerjee</p>
          </div>
        </figcaption>
      </figure>
    </div>
  </div>
</div>
`;

export const seriesHeader = `
 <img loading="lazy" src="${headerImage}" width="3333" height="890" alt="An illustrated banner to mark the 10-year anniversary of NCI's Cancer Currents research news blog. The design features interconnected scenes: a patient receiving care, a researcher in a lab, a tumor model, a laptop and mobile device displaying research articles, fitness activity, a clinical setting, and a researcher giving a scientific presentation. The foreground includes bold text that reads '10 Years of Cancer Research News. The background showcases rolling hills and abstract buildings.">
`;
