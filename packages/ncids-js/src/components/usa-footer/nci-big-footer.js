const togglePanel = (event) => {
	event.currentTarget.parentNode.classList.toggle('hidden');
	event.currentTarget
		.closest('.usa-footer__primary-content--collapsible')
		.classList.toggle('hidden');
};

export { togglePanel };

// document.addEventListener('DOMContentLoaded', (event) => {});

// event listener absolutely required

// a11y

// hash

// init only once
