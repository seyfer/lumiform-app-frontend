import Movie from '@/types/backend/entities/Movie';
import faker from 'faker';

const MovieMock: () => Movie = ({
  id = faker.random.number(),
  title = faker.lorem.words(),
  poster = faker.image.abstract(),
  createdAt = faker.date.past().toString(),
  updatedAt = faker.date.past().toString(),
} = {}) => ({
  id,
  title,
  poster,
  createdAt,
  updatedAt,
});

export default MovieMock;
