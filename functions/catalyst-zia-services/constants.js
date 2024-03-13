class AppConstants {
	static MaxFileSize = 10 * 1000 * 1000;
	static Headers = {
		CodelibSecretKey: 'catalyst-codelib-secret-key'
	};

	static Env = {
		CodelibSecretKey: 'CODELIB_SECRET_KEY'
	};
}

module.exports = AppConstants;
