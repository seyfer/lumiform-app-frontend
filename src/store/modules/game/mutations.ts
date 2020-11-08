import GameStoreMutations from '@/constants/store/game/GameStoreMutations';
import GameStoreState from '@/types/store/states/GameStoreState';
import User from '@/types/backend/entities/User';
import Term from '@/types/backend/entities/Term';
import MovieGuessing from '@/types/helpers/MovieGuessing';
import Game from '@/types/backend/entities/Game';

export default {
  [GameStoreMutations.SET_ACTIVE_USER](state: GameStoreState, user: User | null) {
    state.activeUser = user;
  },
  [GameStoreMutations.SET_ACTIVE_TERM](state: GameStoreState, term: Term | null) {
    state.activeTerm = term;
  },
  [GameStoreMutations.SET_ACTIVE_GAME](state: GameStoreState, game: Game | null) {
    state.activeGame = game;
  },
  [GameStoreMutations.SET_MOVIE_GUESSINGS](
    state: GameStoreState, movieGuessings: MovieGuessing[],
  ) {
    state.movieGuessings = movieGuessings;
  },
};
