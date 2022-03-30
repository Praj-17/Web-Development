

function take_input() {
    let company_name = document.getElementsByName("company_name").value;
    let address = document.getElementsByName("address").value;
    return company_name, address;
  }

  function submit_to_database(){
    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb://localhost:27017/";
  company_name, address = take_input()
  console.log(company_name)
  console.log(address)

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var myobj ={ name: company_name, address: address };
  dbo.collection("customers").insertMany(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
})};