import MagicCharacter from './MagicCharacter';

class Magician extends MagicCharacter {
  constructor(name) {
    super({
      name,
      type: 'Magician',
      attack: 10,
      defence: 40,
    });
  }
}

export default Magician;
