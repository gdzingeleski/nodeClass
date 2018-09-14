'use strict';

	/* 500 is an internal server error; this category includes any kind
		   of unexpected error (ie. a bug). It should be reported to the
		   error reporter, which will then likely crash the process and let
		   it get restarted. */
	

// let isInDevelopmentMode = (process.env.NODE_ENV === "development");
let isInDevelopmentMode = false;


module.exports = function({errorReporter}) {
	return function(err, req, res, next) {
		let stackTrace;

		if (isInDevelopmentMode) {
			stackTrace = err.stack;
		} else {
			stackTrace = null;
		}
	
		// checking error codes
		if (err.status == 404) {
			res.status(404);
		}
		else if (err.status >= 500 && err.status <= 504) {
			res.status(err.status);
		}
		else {  //else we dont know why we are here
			// errorReporter.report(err, {
			// 	req: req,
			// 	res: res
			// });
		}

		res.render("error", {
			error: err,
			errorMessage: `${err.status}: ${err.message}`,
			stackTrace: stackTrace
		});

	};
}
