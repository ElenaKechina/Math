import Character from './Character';

class MagicCharacter extends Character {
  constructor(obj) {
    super(obj);
    this.stoned_private = false;
  }

  get stoned() {
    return this.stoned_private;
  }

  set stoned(isStoned) {
    this.stoned_private = isStoned;
  }

  attack(distance) {
    let resultAttack = this.attack_private * (1 + (1 - distance) / 10);
    if (this.stoned_private) {
      resultAttack -= Math.log2(distance) * 5;
    }

    return Math.round(resultAttack);
  }
}

export default MagicCharacter;
