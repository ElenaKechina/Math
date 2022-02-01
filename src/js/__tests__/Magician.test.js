import Magician from '../Magician';

describe('Magician class:', () => {
  test('should return object', () => {
    const hero = new Magician('Magician');

    const trueHero = {
      name: 'Magician',
      type: 'Magician',
      health: 100,
      level: 1,
      attack_private: 10,
      defence: 40,
      stoned_private: false,
    };

    expect(hero).toEqual(trueHero);
  });
});
