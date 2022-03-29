


module.exports = async (req, res, next) => {
  // TODO: Check req.user to ensure the user's email is 'admin'

  try {
    // const session = req.cookies.session;
    // const payload = jwt.verify(session, process.env.JWT_SECRET);
    // console.log('is it true', req.user.email === 'admin');
    if (req.user.email === 'admin') {
      // req.user.email = 'admin';
      // console.log('user------', req.user);
      next();
      return;
    }
    // req.user.email === 'admin';

    throw new Error;


    // console.log('is it true', req.user.email === 'admin');
    // if (!req.user || req.user.email !== 'admin') {
    //   // req.user.email = 'admin';
    //   throw new Error;
    //   // console.log('user------', req.user);
    // }
    // next();
  } catch (error) {
    error.message = 'You do not have access to view this page';
    error.status = 403;
    error.redirect = `https://http.cat/${error.status}`;
    next(error);
  }
};
