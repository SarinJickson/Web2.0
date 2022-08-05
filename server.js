const xpress = require('express');
const app = xpress();
const bodyParser = require('body-parser');

// Handling the parsing
app.use(bodyParser.json());

  app.post('/',function(req,res){
  var email = req.body.email;
  var amount = req.body.amount;

  if(amount <= 1){
    return_info = {};
    return_info.error = true;
    return_info.message = "The amount should be greater than 1";
    return res.send(return_info);
  }

  res.send({"email" : email, "amount" : amount});
});

app.listen(3000,function(){
  console.log("server running on port 3000");
});
