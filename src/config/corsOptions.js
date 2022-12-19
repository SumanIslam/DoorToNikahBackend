const whiteList = [
	'https://doortonikah.vercel.app',
	'http://127.0.0.1:3000',
	'http://localhost:3000',
	'http://localhost:5000',
];
const corsOptions = {
	origin: (origin, callback) => {
		console.log(origin);
		if (whiteList.indexOf(origin) !== -1 || origin === undefined) {
			callback(null, true);
		} else {
			callback(new Error('Not allowed by CORS'));
		}
	},
	optionsSuccessStatus: 200,
};

module.exports = corsOptions;
