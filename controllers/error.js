exports.get404 = (req, res, next) => {
  res
    .status(404)
    .render('page-not-found', { pageTitle: '404', path: '404' });
};
