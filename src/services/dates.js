function daysInThisMonth() {
	let now = new Date();
	return new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
}

function daysInYear(year) {
	return (year % 4 === 0 && year % 100 > 0) || year % 400 == 0 ? 366 : 365;
}

module.exports = {
	daysInThisMonth,
	daysInYear,
};
