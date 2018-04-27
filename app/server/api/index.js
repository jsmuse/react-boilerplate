import Express from 'express';
import uuid from 'uuid/v4';
import { find, findIndex, omit } from 'lodash';

const router = new Express.Router();
router.use(Express.json());

let actors = [
  {
    id: uuid(),
    name: 'Robert Downey Jr.',
    born: 'April 4, 1965',
    photo:
      'https://ia.media-imdb.com/images/M/MV5BNzg1MTUyNDYxOF5BMl5BanBnXkFtZTgwNTQ4MTE2MjE@._V1_UX214_CR0,0,214,317_AL_.jpg',
    description:
      'Robert Downey Jr. has evolved into one of the most respected actors in Hollywood. With an amazing list of credits to his name, he has managed to stay new and fresh even after over four decades in the business.',
  },
  {
    id: uuid(),
    name: 'Tom Hardy',
    born: 'September 15, 1977',
    photo:
      'https://ia.media-imdb.com/images/M/MV5BMTQ3ODEyNjA4Nl5BMl5BanBnXkFtZTgwMTE4ODMyMjE@._V1_UX214_CR0,0,214,317_AL_.jpg',
    description:
      'With his breakthrough performance as Eames in Christopher Nolan`s science fiction thriller, English actor Tom Hardy has been brought to the attention of mainstream audiences worldwide.',
  },
  {
    id: uuid(),
    name: 'Julia Roberts',
    born: 'October 28, 1967',
    photo:
      'https://ia.media-imdb.com/images/M/MV5BMTQzNjU3MDczN15BMl5BanBnXkFtZTYwNzY2Njc4._V1_UX214_CR0,0,214,317_AL_.jpg',
    description:
      'Julia Fiona Roberts never dreamed she would become the most popular actress in America. She was born in Smyrna, Georgia, to Betty Lou (Bredemus) and Walter Grady Roberts, one-time actors and playwrights, and is of English, Irish, Scottish, Welsh, German, and Swedish descent.',
  },
];

let movies = [
  {
    id: uuid(),
    title: 'The Shawshank Redemption',
    year: 1994,
    poster:
      'https://ia.media-imdb.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg',
    description:
      'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
    director: 'Frank Darabont',
    genres: ['Crime', 'Drama'],
  },
  {
    id: uuid(),
    title: 'The Godfather',
    year: 1972,
    poster:
      'https://ia.media-imdb.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_CR0,0,704,1000_AL_.jpg',
    description:
      'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
    director: 'Francis Ford Coppola',
    genres: ['Crime', 'Drama'],
  },
  {
    id: uuid(),
    title: 'The Dark Knight',
    year: 2008,
    poster:
      'https://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SY1000_CR0,0,675,1000_AL_.jpg',
    description:
      'When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham, the Dark Knight must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
    director: 'Christopher Nolan',
    genres: ['Action', 'Crime', 'Drama'],
  },
];

router.get('/movies', (req, res) => {
  res.json({
    data: movies,
  });
});

router.post('/movies', (req, res) => {
  const newMovie = {
    ...req.body.movie,
    id: uuid(),
  };
  movies.push(newMovie);

  res.json({
    data: newMovie,
  });
});

router.get('/movies/:id', (req, res) => {
  const movie = find(movies, { id: req.params.id });
  if (!movie) {
    return res.sendStatus(404);
  }
  return res.json({
    data: movie,
  });
});

router.put('/movies/:id', (req, res) => {
  const movieIndex = findIndex(movies, { id: req.params.id });

  if (movieIndex === -1) {
    return res.sendStatus(404);
  }

  const updatedMovie = omit(req.body.movie, ['id']);
  movies[movieIndex] = { ...movies[movieIndex], ...updatedMovie };

  return res.json({
    data: movies[movieIndex],
  });
});

router.delete('/movies/:id', (req, res) => {
  const movie = find(movies, { id: req.params.id });
  if (!movie) {
    return res.sendStatus(404);
  }
  movies = movies.filter(i => i.id !== req.params.id);
  return res.json({
    data: movies,
  });
});

/* *** */

router.get('/actors', (req, res) => {
  res.json({
    data: actors,
  });
});

router.post('/actors', (req, res) => {
  const newActors = {
    ...req.body.actor,
    id: uuid(),
  };
  actors.push(newActors);

  res.json({
    data: newActors,
  });
});

router.get('/actors/:id', (req, res) => {
  const actor = find(actors, { id: req.params.id });
  if (!actor) {
    return res.sendStatus(404);
  }
  return res.json({
    data: actor,
  });
});

router.put('/actors/:id', (req, res) => {
  const actorIndex = findIndex(actors, { id: req.params.id });

  if (actorIndex === -1) {
    return res.sendStatus(404);
  }

  const updatedActor = omit(req.body.actor, ['id']);
  actors[actorIndex] = { ...actors[actorIndex], ...updatedActor };

  return res.json({
    data: actors[actorIndex],
  });
});

router.delete('/actors/:id', (req, res) => {
  const actor = find(actors, { id: req.params.id });
  if (!actor) {
    return res.sendStatus(404);
  }
  actors = actors.filter(i => i.id !== req.params.id);
  return res.json({
    data: actors,
  });
});

export default router;
