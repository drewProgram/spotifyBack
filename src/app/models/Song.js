import Sequelize, { Model } from 'sequelize';

class Song extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        artist: Sequelize.STRING,
        file_name: Sequelize.STRING,
        time: Sequelize.INTEGER,
      },
      {
        sequelize,
      }
    );
    return this;
  }

  static associate(models) {
    Song.belongsToMany(models.Album, { through: 'AlbumSong' });
  }
}

export default Song;
