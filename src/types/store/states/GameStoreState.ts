import User from '@/types/backend/entities/User';
import Term from '@/types/backend/entities/Term';
import MovieGuessing from '@/types/helpers/MovieGuessing';
import Game from '@/types/backend/entities/Game';

interface GameStoreState {
  activeUser: User | null;
  activeTerm: Term | null;
  activeGame: Game | null;
  movieGuessings: MovieGuessing[];
}

export default GameStoreState;
