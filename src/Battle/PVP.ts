import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  // usa o método de iniciar os atributos como privados já dentro do constructor
  constructor(private player1: Fighter, private player2: Fighter) {
    super(player1);
  }

  fight(): number {
    while (this.player1.lifePoints > 0 && this.player2.lifePoints > 0) {
      this.player1.attack(this.player2);
      this.player2.attack(this.player1);
    }
    return super.fight();
  }
}
