import BasePayloadBuilder from '@/services/payloadBuilders/BasePayloadBuilder';
import MovieGuessing from '@/types/helpers/MovieGuessing';
import Term from '@/types/backend/entities/Term';
import User from '@/types/backend/entities/User';

class GamePayloadBuilder extends BasePayloadBuilder<MovieGuessing[], any> {
  public create(entity: MovieGuessing[], term: Term, user: User): any {
    this.payload.movies = entity.map((guess) => ({
      id: guess.id,
      guessing: guess.score,
    }));

    this.payload.term = term.id;
    this.payload.user = user.id;

    return this.resolvePayload();
  }
}

export default GamePayloadBuilder;
