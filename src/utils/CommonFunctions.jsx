export const processvalue = (value) => {
	if (!value) return '';
	return value
		.replace(/[&/:(,)\-\s]+/g, '-') // Replace &, /, -,:,(,) and spaces with -
		.replace(/-+/g, '-') // Collapse multiple - into one
		.replace(/^-+|-+$/g, '') // Trim leading/trailing -
		.toLowerCase();
};

export const formatDateTime = (isoString) => {
	const date = new Date(isoString);

	const dd = String(date.getDate()).padStart(2, '0');
	const mm = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based
	const yy = String(date.getFullYear());

	const hours = String(date.getHours()).padStart(2, '0');
	const mins = String(date.getMinutes()).padStart(2, '0');

	return `${dd}-${mm}-${yy} ${hours}:${mins}`;
};

export const formatDate = (isoString) => {
	const date = new Date(isoString);

	const formattedDate = date.toLocaleDateString('en-US', {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	});

	return formattedDate;
};
