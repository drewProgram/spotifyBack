import Sequelize, { Model } from 'sequelize';

class Album extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        artist: Sequelize.STRING,
        image: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
    return this;
  }

  static associate(models) {
    Album.belongsToMany(models.Song, { through: 'AlbumSong' });
  }
}

export default Album;
