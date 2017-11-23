
import { Given} from "cucumber";
import { Then } from "cucumber";
import { When } from "cucumber";

//var ConnectDB = require('../support/database.js');
//var setupDB = require('../support/database.js');
var setupDB1 = require('../support/db.js');



    Given(/^I successfully connect to MSSQL$/, function () {
        console.log("Start SQL Execution");
    setupDB1.updateSqlInFile('SELECT count(*) FROM dbo.GroupEntity where LastReconciled IS NOT NULL')
    //setupDB1.updateSqlInFile('SELECT count(*) FROM dbo.GroupEntity')

    });

    When(/^I query the table name & see the results$/, function () {
    setupDB1.getDBResult();

    });

    Then(/^I close the database connection$/, function () {
        console.log("End of SQL Execution" + setupDB1.readDBResultFromFile());
        //setupDB1.revertFile();
    });
