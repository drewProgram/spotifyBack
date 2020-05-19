module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'pass',
  database: 'spotify',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
