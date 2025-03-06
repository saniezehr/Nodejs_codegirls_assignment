import sequelize from "../database/db.js";
import {Sequelize,DataTypes} from "sequelize";

const Item = sequelize.define('Item',{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    price:{
        type:DataTypes.FLOAT,
        allowNull:false
    }
})
sequelize.sync()
  .then(() => console.log('Table synced'))
  .catch(err => console.error(err));

  export default (Item)
  