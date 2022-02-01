import MagicCharacter from './MagicCharacter';

class Daemon extends MagicCharacter {
  constructor(name) {
    super({
      name,
      type: 'Daemon',
      attack: 10,
      defence: 40,
    });
  }
}

export default Daemon;
