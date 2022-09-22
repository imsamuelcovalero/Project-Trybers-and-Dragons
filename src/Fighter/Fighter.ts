import Energy from '../Energy';

// A interface deverá possuir os métodos:
// attack(), que recebe um enemy do tipo Fighter como parâmetro e não possui retorno (void);
// special(), que recebe um enemy do tipo Fighter como parâmetro e não possui retorno (void); sparklessparkles
// levelUp(), que não recebe parâmetro e não possui retorno (void);
// receiveDamage(), que recebe um attackPoints do tipo number como parâmetro e retorne um number.
// export type attackPoints = number;

export default interface Fighter {
  lifePoints: number;
  strength: number;
  defense: number;
  energy?: Energy;
  attack(enemy: Fighter): void;
  special?: (enemy: Fighter) => void;
  levelUp(): void;
  receiveDamage(attackPoints: number): number;
}
