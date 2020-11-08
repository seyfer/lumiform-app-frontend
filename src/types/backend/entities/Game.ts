import Term from '@/types/backend/entities/Term';
import User from '@/types/backend/entities/User';

interface Game {
  id: number;
  finalScore: number;
  term: Term;
  user: User;
  createdAt: string;
  updatedAt: string;
}

export default Game;
