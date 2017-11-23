
var exec = require ('child_process').exec;
var fs = require('fs');

var setupDB = function () {
var dboutput='';

    this.getDBResultDyna = function () {
        var child = exec('java -jar C:\\HK\\dbtest.jar',function (error,stdout,stderr) {
            console.log('Output ->' + stdout);
            fs.writeFile("C:\\DELL\\Log\\Log2.txt",stdout,function (err) {
                if(err){return console.log(err);
                }
            });
            if(error!=null){
                console.log('Output ->' + error);
                return error;
            }
            return data;
        });
    };


    this.getDBResult = function () {
        var child = exec('java -jar C:\\ram1\\dbtest.jar',function (error,stdout,stderr) {
            console.log('Output ->' + stdout);
            fs.writeFile("C:\\DELL\\Log\\Log.txt",stdout,function (err) {
            if(err){return console.log(err);
            }
            });
            if(error!=null){
                console.log('Output ->' + error);
                return error;
            }
            //return data;
        });
    };

    this.readDBResultFromFile = function () {
        var data = fs.readFileSync("C:\\DELL\\Log\\Log.txt").toString();
        return data;
    };

    this.revertFile = function () {
        var content='var MyJavaClass = Java.type(\'com.test.dell.DBClass\');\n' +
            'var dbResult = MyJavaClass.getDBConnectCount(\'SQL\');\n' +
            'print("DB User Group Count " + dbResult);';
        fs.writeFileSync('C:\\DELL\\script.js',content,{encoding:'utf8',flag:'w'});
    };


    this.updateSqlInFile = function(sqlQry){
        var data = fs.readFileSync('C:\\DELL\\script.js', 'utf-8');
        var newValue = data.replace('SQL', sqlQry);
        fs.writeFileSync('C:\\DELL\\script.js', newValue, 'utf-8');
        console.log('update sql complete');
    };

}
module.exports = new setupDB();



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