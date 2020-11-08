import { computed, reactive, ref } from '@vue/composition-api';
import store from '@/store';
import { buildStoreOptions } from '@/services/store/helpers';
import GameStoreGetters from '@/constants/store/game/GameStoreGetters';
import StoreName from '@/constants/store/StoreName';
import Movie from '@/types/backend/entities/Movie';
import Term from '@/types/backend/entities/Term';
import MovieGuessing from '@/types/helpers/MovieGuessing';
import GamePayloadBuilder from '@/services/payloadBuilders/GamePayloadBuilder';
import User from '@/types/backend/entities/User';
import GameStoreActions from '@/constants/store/game/GameStoreActions';

export default function () {
  const originalMovies = computed<Movie[]>(
    () => store.getters[buildStoreOptions(GameStoreGetters.GET_TERM_MOVIES, StoreName.Game)],
  );

  const activeTerm = computed<Term>(
    () => store.getters[buildStoreOptions(GameStoreGetters.GET_ACTIVE_TERM, StoreName.Game)],
  );

  const currentStep = ref(0);

  // This way we will always return the same order (the same returned by the backend)
  // Since this was not specified in the description I will leave it like this
  const activeMovie = computed<Movie>(() => (originalMovies.value[currentStep.value]));

  const guessingScore = ref<null | number>(null);

  const moviesGuessed: {list: MovieGuessing[]} = reactive({
    list: [],
  });

  const buildMovieGuessed = (movie: Movie, score: number) => ({ ...movie, score });

  const addNewMovieGuessing = (movie: Movie, score: number) => {
    moviesGuessed.list = [buildMovieGuessed(movie, score), ...moviesGuessed.list];

    currentStep.value += 1;
    guessingScore.value = null;
  };

  const gamePayloadBuilder = new GamePayloadBuilder();

  const finishGame = async (guessings: MovieGuessing[], term: Term, user: User) => {
    const payload = gamePayloadBuilder.create(guessings, term, user);

    return store.dispatch(
      buildStoreOptions(GameStoreActions.CREATE_GAME, StoreName.Game),
      { payload },
    );
  };

  return {
    originalMovies,
    activeTerm,
    currentStep,
    activeMovie,
    guessingScore,
    moviesGuessed,
    addNewMovieGuessing,
    finishGame,
  };
}
