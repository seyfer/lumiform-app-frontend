import { createLocalVue, shallowMount } from '@vue/test-utils';
import GuessedCard from '@/components/guessing/GuessedCard.vue';
import MovieGuessingMock from '@/services/mocks/helpers/MovieGuessing';

const localVue = createLocalVue();

describe('@/components/guessing/GuessedCard.vue', () => {
  it('poster image is shown', () => {
    const guess = MovieGuessingMock();
    const wrapper = shallowMount(GuessedCard, {
      propsData: { guess },
      localVue,
    });

    expect(wrapper.find('.guessed-card .image img').attributes('src')).toBe(guess.poster);
  });

  it('score is being shown', () => {
    const guess = MovieGuessingMock();
    const wrapper = shallowMount(GuessedCard, {
      propsData: { guess },
      localVue,
    });

    expect(wrapper.find('.guessed-card .guessed-card__score').text()).toBe(guess.score.toString());
  });
});
