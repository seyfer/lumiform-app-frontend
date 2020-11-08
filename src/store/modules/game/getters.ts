import GameStoreGetters from '@/constants/store/game/GameStoreGetters';
import GameStoreState from '@/types/store/states/GameStoreState';

export default {
  [GameStoreGetters.GET_ACTIVE_USER]: (state: GameStoreState) => state.activeUser,
  [GameStoreGetters.GET_TERM_MOVIES]: (state: GameStoreState) => (
    state.activeTerm?.movies ?? []
  ),
  [GameStoreGetters.GET_ACTIVE_TERM]: (state: GameStoreState) => state.activeTerm,
  [GameStoreGetters.GET_MOVIE_GUESSINGS]: (state: GameStoreState) => state.movieGuessings,
  [GameStoreGetters.GET_ACTIVE_GAME]: (state: GameStoreState) => state.activeGame,
};
