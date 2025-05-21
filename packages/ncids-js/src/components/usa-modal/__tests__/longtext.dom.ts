const longTextDom = `<div class="margin-y-3">
  <a
    href="#example-modal-4"
    class="usa-button"
    aria-controls="example-modal-4"
    data-open-modal
    >Open example modal</a
  >
  <div
    class="usa-modal usa-modal--nci-maxh"
    id="example-modal-4"
    aria-labelledby="modal-4-heading"
    aria-describedby="modal-4-description"
  >
    <div class="usa-modal__content">
      <div class="usa-modal__main">
        <h2 class="usa-modal__heading" id="modal-4-heading">
          Are you sure you want to continue?
        </h2>
        <div class="usa-prose">
          <p id="modal-4-description">
            Aliquam consectetur nisi non massa feugiat, imperdiet ornare libero
            ultrices. Nullam tincidunt mattis lobortis. Mauris hendrerit lectus
            vel ipsum facilisis feugiat. Sed viverra ex ac gravida commodo.
            Vestibulum semper commodo turpis, non pulvinar risus bibendum eu.
            Curabitur bibendum, ex non vehicula tristique, neque neque gravida
            risus, ac faucibus nulla lectus efficitur ante. Nam et lorem nunc.
            Ut elementum scelerisque ornare. Vivamus at vestibulum nulla. Nam
            sit amet quam dolor. Cras malesuada est nibh, ac varius magna
            vehicula eget. Aliquam consectetur nisi non massa feugiat, imperdiet
            ornare libero ultrices. Nullam tincidunt mattis lobortis. Mauris
            hendrerit lectus vel ipsum facilisis feugiat. Sed viverra ex ac
            gravida commodo. Etiam semper leo enim, a iaculis magna elementum
            non. Praesent posuere aliquet libero, nec vestibulum lacus rhoncus
            sit amet. Pellentesque sit amet tristique quam.
          </p>
        </div>
        <div class="usa-modal__footer">
          <ul class="usa-button-group">
            <li class="usa-button-group__item">
              <button type="button" class="usa-button" data-close-modal>
                Continue without saving
              </button>
            </li>
            <li class="usa-button-group__item">
              <button
                type="button"
                class="usa-button usa-button--unstyled padding-105 text-center"
                data-close-modal
              >
                Go back
              </button>
            </li>
          </ul>
        </div>
      </div>
      <button
        class="usa-button usa-modal__close"
        aria-label=""
        data-close-modal
      >
        <svg
          class="usa-icon"
          role="img"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-width="2"
            d="M0 13.0332964L13.0332964 0M13.0332964 13.0332964L0 0"
            transform="translate(1 1)"
          ></path>
        </svg>
      </button>
    </div>
  </div>
</div>`;

export default longTextDom;
