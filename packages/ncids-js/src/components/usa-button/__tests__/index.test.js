const foobar = require('../internal/nci-test');

test('basic check that jest is set up', () => {
	expect(foobar).toBeDefined();
});
