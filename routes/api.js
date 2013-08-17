exports.api = function(fitbitClient){
  return function(req, res){
    var token = req.session.token;
    fitbitClient.apiCall('GET', '/' + req.params[0], {
         token: {
           oauth_token_secret: token.oauth_token_secret,
           oauth_token: token.oauth_token
         }
       },
       function(err, resp, json) {
         if(err) return res.send(err,500);
         res.json(json);
       }
    );
  };
};
