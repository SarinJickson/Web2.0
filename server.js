const xpress = require('express');
const app = xpress();


  app.post('/',function(req,res){
  var email = req.body.email;
  var amount = req.body.amount;

  res.send({"email" : email, "amount" : amount});
});

app.listen(3000,function(){
  console.log("server running on port 3000");
});
