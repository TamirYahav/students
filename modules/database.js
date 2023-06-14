import Sequelize from "sequelize";
import dotenv from 'dotenv'
dotenv.config()

const sequelize = new Sequelize(
    process.env.DATABASE_NAME,//the name of database
    process.env.DATABASE_USER,//the user name
    process.env.DATABASE_PASSWORD, // the Mysql password
    {
        dialect:"mysql",
        host:"localhost"
    }
)

export default sequelize;