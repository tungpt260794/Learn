module.exports = (req, res, next) => {
  if (req.session && req.session.accId) {
    return next();
  } else {
    res.redirect("/admin/login");
  }
};
