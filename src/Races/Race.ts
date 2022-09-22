// A classe Race deve ter os atributos privados: name e dexterity, ambos inicializados em seu construtor;
export default abstract class Race {
  private _name: string;
  private _dexterity: number;

  constructor(name: string, dexterity: number) {
    this._name = name;
    this._dexterity = dexterity;
  }

  public get name(): string {
    return this._name;
  }

  // public set name(value: string) {
  //   this._name = value;
  // }

  public get dexterity(): number {
    return this._dexterity;
  }

  // public set dexterity(value: number) {
  //   this._dexterity = value;
  // }

  static createdRacesInstances(/* maxInstanceNumber: number */): number {
    // let count = 0;
    // if (count === maxInstanceNumber) {
    //   throw new Error('Not implemented');
    // }
    throw new Error('Not implemented');

    // count += count + 1;
    // return count;
  }

  public abstract get maxLifePoints(): number;
}
