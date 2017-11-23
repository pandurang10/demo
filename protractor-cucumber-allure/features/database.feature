Feature: To test the MSSQL database connection

  @DatabaseTest
  Scenario: MSSQL database connection
    Given I successfully connect to MSSQL
    When I query the table name & see the results
    Then I close the database connection
