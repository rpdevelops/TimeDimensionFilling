/*---------------------------------------------------------------------------
------SCRIPT TO FILL TIME DIMENSION IN A DATA WAREHOUSE IN SQL SERVER--------
------------------------MADE BY ROBSON PARADELLA ROCHA-----------------------
---------------------------------------------------------------------------*/
const sqlserver = require('mssql');
require('dotenv').config();
const dbHost = process.env.DB_HOST;
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;
let initialDate = new Date("01/01/2000"); //FILL THIS DATE AS YOU NEED
let finalDate = new Date("01/01/2051"); //FILL THIS DATE AS YOU NEED
//--------------------------------------------------------------------------
async function connectDB() {
    try {
        let connection = await sqlserver.connect(`Server=${dbHost};User Id=${dbUser};Password=${dbPassword};Encrypt=false`);
        console.log('Connected to SQL Server Database!');
        return connection;
    }
    catch (err) {
        console.log(err);
    }
}
//--------------------------------------------------------------------------
async function closeDB(con) {
    try {
        await con.close();
        return "Connection Closed!"
    }
    catch (err) {
        console.log(err);
    }
}
//--------------------------------------------------------------------------
async function insertDB(conn,date) {
    try {
        await conn.query`INSERT INTO dim_time (date)
        VALUES (${date})`;
        return `${date} Inserted Sucessfull!`
    }
    catch (err) {
        console.log(err);
    }
}
//--------------------------------------------------------------------------
async function mainLoop(conne) {
    for (initialDate; initialDate <= finalDate; initialDate.setDate(initialDate.getDate()+1)) {
        try {
            await insertDB(conne,initialDate).then((resp) =>{console.log(resp)});
            if (initialDate.toLocaleString("en-US") == finalDate.setDate(finalDate.getDate()-1)) {
                closeDB(conne).then((res) => {
                    console.log(res);
                    return "All Data Inserted!"
                })
            }
        }
        catch (err) {
            console.log(err);
        }
        }  
    }
//--------------------------------------------------------------------------
connectDB().then((connect) => {
    mainLoop(connect).then((response) => {
        console.log(response);
    })
})