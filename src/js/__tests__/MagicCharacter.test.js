import MagicCharacter from '../MagicCharacter';

describe('MagicCharacter class:', () => {
  const testHero = {
    name: 'Elena',
    type: 'Magician',
    attack: 100,
    defence: 100,
  };

  test('should return object', () => {
    const hero = new MagicCharacter(testHero);

    const trueHero = {
      name: 'Elena',
      type: 'Magician',
      health: 100,
      level: 1,
      attack_private: 100,
      defence: 100,
      stoned_private: false,
    };

    expect(hero).toEqual(trueHero);
  });

  test('should return object(key_stoned)', () => {
    const hero = new MagicCharacter(testHero);

    hero.stoned = true;
    expect(hero.stoned).toEqual(true);
  });

  test('should return attack', () => {
    const hero = new MagicCharacter(testHero);

    expect(hero.attack(1)).toEqual(100);
    expect(hero.attack(2)).toEqual(90);
    expect(hero.attack(3)).toEqual(80);
    expect(hero.attack(4)).toEqual(70);

    hero.stoned = true;
    expect(hero.attack(2)).toEqual(85);
  });
});
