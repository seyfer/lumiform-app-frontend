import Term from '@/types/backend/entities/Term';
import MovieGuessing from '@/types/helpers/MovieGuessing';

type IGame = {
  term: Term | null;
  movies: MovieGuessing[] | null;
};

export default ({ term = null, movies = [] }: IGame = {} as IGame): IGame => ({
  term,
  movies,
});
