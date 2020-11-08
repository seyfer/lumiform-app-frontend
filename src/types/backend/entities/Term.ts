import Movie from '@/types/backend/entities/Movie';

interface Term {
  id: number;
  term: string;
  lastUsedAt: string;
  movies: Movie[];
  createdAt: string;
  updatedAt: string;
}

export default Term;
