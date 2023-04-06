const findObjectByKey = (obj, key, value) => {
	if (Object.prototype.hasOwnProperty.call(obj, key) && obj[key] === value) {
		return obj;
	}
	for (let i in obj) {
		if (obj[i] && typeof obj[i] === 'object') {
			const foundObject = findObjectByKey(obj[i], key, value);
			if (foundObject) {
				return foundObject;
			}
		}
	}
	return null;
};

export default findObjectByKey;
