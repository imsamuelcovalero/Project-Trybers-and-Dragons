import Fighter from '../Fighter';
import Battle from './Battle';
// import getRandomInt from '../utils';

export default class PVP extends Battle {
  constructor(private player1: Fighter, private player2: Fighter) {
    super(player1);
    // super.fight = () => {
    //   if (player1.lifePoints === -1) {
    //     this.player2.levelUp();
    //     return -1;
    //   }
    //   this.player1.levelUp();
    //   return 1;
    // };
  }

  fight(): number {
    while (this.player1.lifePoints > 0 && this.player2.lifePoints > 0) {
      // for (let i = 0; i < getRandomInt(1, 10); i += 1) {
      //   this.player1.levelUp();
      // }
      // for (let i = 0; i < getRandomInt(1, 10); i += 1) {
      //   this.player2.levelUp();
      // }
      this.player1.attack(this.player2);
      this.player2.attack(this.player1);
      // this.player1.levelUp();
      // this.player2.levelUp();
    }
    return super.fight();
  }
}
