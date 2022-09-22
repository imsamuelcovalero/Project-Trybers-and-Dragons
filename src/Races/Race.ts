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

  public get dexterity(): number {
    return this._dexterity;
  }

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
