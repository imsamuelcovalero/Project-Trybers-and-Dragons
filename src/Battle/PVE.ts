import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  private _monstros: SimpleFighter[];
  private _player: Fighter;

  constructor(player: Fighter, monstros: SimpleFighter[]) {
    super(player);
    this._monstros = monstros;
    this._player = player;
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
