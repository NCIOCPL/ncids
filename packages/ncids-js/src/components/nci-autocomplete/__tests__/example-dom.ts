export const getExampleACDOMPlain = (): HTMLElement => {
	const div = document.createElement('div');

	div.innerHTML = `
  <form id="acform" action="#" role="search">
    <label for="search-field">
      Search
    </label>
    <input id="search-field" type="search" name="search" />
  </form>
	`;

	return div;
};
