import Album from '../models/Album';

class AlbumSongController {
  // async index(req, res) {
  //   const album = await Album.findAll();

  //   if (album.length === 0) {
  //     return res.status(200).json({ message: 'No albums registered' });
  //   }

  //   return res.json(Album);
  // }

  async store(req, res) {
    // const albumExists = await Album.findOne({ where: { name: req.body.name } });

    // if (albumExists) {
    //   return res.status(400).json({ error: 'Album already registered.' });
    // }

    const { album_id, song_id } = req.body;

    await Album.create({});

    return res.json({ album_id, song_id });
  }
}

export default new AlbumSongController();
