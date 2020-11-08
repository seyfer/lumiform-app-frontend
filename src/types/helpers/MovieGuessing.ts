import Movie from '@/types/backend/entities/Movie';

interface MovieGuessing extends Movie {
  score: number;
}

export default MovieGuessing;
