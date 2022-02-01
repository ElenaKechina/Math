import Character from '../Character';

describe('Character class:', () => {
  test('should return Error', () => {
    expect(() => {
      const hero = new Character({ name: '12345678' });
      delete hero.name;
    }).toThrow();

    expect(() => {
      const hero = new Character({ name: 'l', type: 'Magician' });
      delete hero.name;
    }).toThrow();

    expect(() => {
      const hero = new Character({ name: 'longStringggggg', type: 'Magician' });
      delete hero.name;
    }).toThrow();

    expect(() => {
      const hero = new Character({ name: 'Elena', type: 'Magicia' });
      delete hero.name;
    }).toThrow();
  });

  test('should return object', () => {
    const hero = new Character({ name: 'Merlin', type: 'Magician' });

    const Merlin = {
      name: 'Merlin',
      type: 'Magician',
      health: 100,
      level: 1,
      attack_private: 0,
      defence: 0,
    };

    expect(hero).toEqual(Merlin);
  });

  test('should return object', () => {
    const hero = {
      name: 'Merlin',
      type: 'Magician',
      attack: 100,
      defence: 400,
    };

    const Merlin = {
      name: 'Merlin',
      type: 'Magician',
      health: 100,
      level: 1,
      attack_private: 100,
      defence: 400,
    };

    expect(new Character(hero)).toEqual(Merlin);
  });
});
