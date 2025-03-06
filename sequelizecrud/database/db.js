import {Sequelize} from 'sequelize'

const sequelize = new Sequelize('squelizecrud', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
  });

  sequelize.sync()
  .then(() => console.log('Database synced'))
  .catch(err => console.error(err));
  
  export default sequelize