const { Pool } = require('pg')

const isProduction = process.env.NODE_ENV === "production";
let dbPool

// if (isProduction) {
//     dbPool = new Pool({
//         connectionString: process.env.DATABASE_URL,
//         ssl: {
//             rejectUnauthorized: false,
//         },
//     });
// } else {
    dbPool = new Pool({
        database: 'personal_web',
        port: 5432,
        user: 'postgres',
        password: 'admin'
    })
// }
module.exports = dbPool
