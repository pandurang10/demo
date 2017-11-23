/*
var myemail= "ambekar10@gmail.com";
localStorage.setItem("email",myemail);
*/



var exec = require ('child_process').exec;
var child = exec('java -jar C:\\ram1\\dbtest.jar',function (error,stdout,stderr) {
    console.log('Output ->' + stdout);

    if(error!=null){
        console.log('Output ->' + error);
    }
    return stdout;
});
module.exports = child;



/*


var setupDB = function () {
var dboutput='';

this.getDBResult = function () {
    var exec = require ('child_process').exec;
    var child = exec('java -jar C:\\ram1\\dbtest.jar',function (error,stdout,stderr) {
        console.log('Output ->' + stdout);
        if(error!=null){
            console.log('Output ->' + error);
            return error;
        }
        return stdout;
    });

};

}
module.exports = new setupDB();
*/




// Commenting out database connection for tests to be passed, this would work with database installed in the system


//var mssql = require('mssql');

/*
var exec = require ('child_process').exec;
var child = exec('java -jar C:\\ram\\dbtest.jar',function (error,stdout,stderr) {
    if(error!=null){
    return stdout;
    }
  });
*/



/*var connectDB = function() {
    var conString = "mssql://Test:123@192.168.53.33:1433/SYN-DB";
    this.client = new mssql.Client(conString);
    this.client.connect(function(err){
        if(err){
            return console.error('could not connect to postgres', err);
        }
    });
};*/

//module.exports = connectDB;