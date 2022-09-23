import Energy from '../Energy';
import SimpleFighter from './SimpleFighter';

// A interface deverá possuir os métodos:
// attack(), que recebe um enemy do tipo Fighter como parâmetro e não possui retorno (void);
// special(), que recebe um enemy do tipo Fighter como parâmetro e não possui retorno (void); sparklessparkles
// levelUp(), que não recebe parâmetro e não possui retorno (void);
// receiveDamage(), que recebe um attackPoints do tipo number como parâmetro e retorne um number.
// export type attackPoints = number;

export default interface Fighter extends SimpleFighter {
  defense: number;
  energy?: Energy;
  special?: (enemy: Fighter) => void;
  levelUp(): void;
  // lifePoints: number;
  // strength: number;
  // attack(enemy: SimpleFighter): void;
  // receiveDamage(attackPoints: number): number;
}
