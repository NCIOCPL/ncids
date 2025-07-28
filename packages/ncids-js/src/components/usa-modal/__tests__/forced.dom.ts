const forcedDom = `<div class="margin-y-3">
  <a
    href="#example-modal-3"
    class="usa-button"
    aria-controls="example-modal-3"
    data-open-modal
    >Open modal with forced action</a
  >
  <div
    class="usa-modal"
    id="example-modal-3"
    aria-labelledby="modal-3-heading"
    aria-describedby="modal-3-description"
    data-force-action
  >
    <div class="usa-modal__content">
      <div class="usa-modal__main">
        <h2 class="usa-modal__heading" id="modal-3-heading">
          Your session will end soon.
        </h2>
        <div class="usa-prose">
          <p id="modal-3-description">
            You’ve been inactive for too long. Please choose to stay signed in
            or sign out. Otherwise, you’ll be signed out automatically in 5
            minutes.
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
    </div>
  </div>
</div>`;

export default forcedDom;
