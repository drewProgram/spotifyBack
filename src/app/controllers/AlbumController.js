import Album from '../models/Album';

class AlbumController {
  async index(req, res) {
    const album = await Album.findAll();

    if (album.length === 0) {
      return res.status(200).json({ message: 'No albums registered' });
    }

    return res.json(Album);
  }

  async store(req, res) {
    const albumExists = await Album.findOne({ where: { name: req.body.name } });

    if (albumExists) {
      return res.status(400).json({ error: 'Album already registered.' });
    }

    const { id, name, artist, image } = await Album.create(req.body);

    return res.json({
      id,
      name,
      artist,
      image,
    });
  }
}

export default new AlbumController();
