import Song from '../models/Song';

class SongController {
  async index(req, res) {
    const song = await Song.findAll();

    if (song.length === 0) {
      return res.status(200).json({ message: 'No songs registered' });
    }

    return res.json(song);
  }

  async store(req, res) {
    const songExists = await Song.findOne({ where: { name: req.body.name } });

    if (songExists) {
      return res.status(400).json({ error: 'Song already registered.' });
    }

    const { id, name, artist, file_name, time } = await Song.create(req.body);

    return res.json({
      id,
      name,
      artist,
      file_name,
      time,
    });
  }
}

export default new SongController();
