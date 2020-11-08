import MovieGuessing from '@/types/helpers/MovieGuessing';
import faker from 'faker';
import MovieMock from '@/services/mocks/backend/entity/MovieMock';

const MovieGuessingMock: () => MovieGuessing = ({
  movie = MovieMock(),
  score = faker.random.float(5),
} = {}) => ({
  ...movie,
  score,
});

export default MovieGuessingMock;
