exports.index = function(fitbitClient){
  return function(req, res){
    fitbitClient.getAccessToken(req, res, function(error, newToken){
      if(newToken){
        req.session.token = newToken;
        res.redirect('/charts');
      }
    });
  };
};


exports.charts = function(req, res){
  if(!req.session.token) res.redirect('/');
  res.render('charts');
};
