import User from '@/types/backend/entities/User';

type IUser = Pick<User, 'username'>;

export default ({ username = '' } = {}): IUser => ({
  username,
});
