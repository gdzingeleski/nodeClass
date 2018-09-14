const createError = require("create-error");

module.exports = {
	AuthenticationError: createError("AuthenticationError", {isCustomError: true, status: 401}),
	NotFoundError: createError("Resource Not Found", {isCustomError: true, status: 404}),
	ValidationError: createError("ValidationError", {isCustomError: true, status: 422})
};