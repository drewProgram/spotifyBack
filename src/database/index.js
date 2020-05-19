import Sequelize from 'sequelize';

import Song from '../app/models/Song';
import Album from '../app/models/Album';

import databaseConfig from '../config/database';

const models = [Song, Album];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
  }
}

export default new Database();
