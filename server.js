const xpress = require('express');
const app = xpress();
const bodyParser = require('body-parser');
const {save_user_information} = require('./models/server_db');
const path = require('path');
const publicPath = path.join(__dirname, './public');
const paypal = require('paypal-rest-sdk');
// Handling the parsing
app.use(bodyParser.json());
app.use(xpress.static(publicPath));

// paypal configuration
paypal.configure({
  'mode': 'sandbox', //sandbox or live
  'client_id': 'AdCEjhwcOAQD5R7c_753RoFBfhnypm1KH1NB7CptCn_UzKVH9KVcfQWBYJ9NGv_Z8RMUFxbNjoYy-L8m',
  'client_secret': 'EDKCLSK4O5QDn4T48TdO13XJ_rFSoZLoFnPT4hF1OBl67Ihdps51kZd_rNhB_3VDLkOmwDVPy70ITx5R'
});

  app.post('/post_info', async (req,res) => {
  var email = req.body.email;
  var amount = req.body.amount;

  if(amount <= 1){
    return_info = {};
    return_info.error = true;
    return_info.message = "The amount should be greater than 1";
    return res.send(return_info);
  }
  var result = await save_user_information({"amount" : amount, "email" : email});
  res.send(result);
});
app.get('/get_total_amount',async (req,res)=>{
  var result = await get_total_amount();
  res.send(result);
})

app.listen(3000,()=>{
  console.log("server running on port 3000");
});
