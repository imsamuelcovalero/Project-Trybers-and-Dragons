import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';
// import getRandomInt from '../utils';

export default class PVE extends Battle {
  private _monstros: SimpleFighter[] | Fighter[];
  private _player: Fighter;

  constructor(player: Fighter, monstros: SimpleFighter[] | Fighter[]) {
    super(player);
    this._monstros = monstros;
    this._player = player;
    // if (monstros.length === 0) {
    //   throw new Error('Não há monstros para lutar');
    // }
  }

  fight(): number {
    this._monstros.forEach((monster) => {
      while (this._player.lifePoints > 0 && monster.lifePoints > 0) {
        this._player.attack(monster);
        monster.attack(this._player);
      }
    });
    return super.fight();
  }
}
