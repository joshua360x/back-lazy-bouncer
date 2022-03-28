const jwt = require('jsonwebtoken');

module.exports = async (req, res, next) => {
  /*
    TODO: Check for the session cookie and verify
    its contents using jsonwebtoken, then
    assign the payload to req.user
  */
  try {
    const session = req.cookies.session;
    const payload = jwt.verify(session, process.env.JWT_SECRET);

    // now to assign this to a user so I can pass it back down to a controller
    req.user = payload;

    next();
  } catch (error) {
    error.message = 'Sign In Required';
    error.status = 401;
    error.redirect = `https://http.cat/${error.status}`;
    next(error);
  }
};
