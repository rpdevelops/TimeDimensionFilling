# TIME DIMENSION FILLING FOR A DATA WAREHOUSE

This is a Simple Script using NodeJS to Create a Time Dimension for a Data Warehouse in a SQL Server Database.
The SK in the table is autoincremented, so basically the script loop between a period of dates incrementing the day and store this sequencially in the table.

To use this script you just need:
- Create a file called ".env" in this directory and fill with this lines below:<br>

DB_HOST= YOUR_DATABASE_SERVER <br>
DB_USER= YOUR_DATABASE_USER <br>
DB_PASSWORD= YOUR_DATABASE_PASSWORD <br>

- Substitute the date Variables as the date you need in the file "FillTimeDimension-SQLServer.js"<br>

- Install the dependencies as in package.json and run it in a shell with "node FillTimeDimension-SQLServer.js"