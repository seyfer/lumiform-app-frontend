import Term from '@/types/backend/entities/Term';

type ITerm = Pick<Term, 'term'>;

export default ({ term = '' } = {}): ITerm => ({
  term,
});
