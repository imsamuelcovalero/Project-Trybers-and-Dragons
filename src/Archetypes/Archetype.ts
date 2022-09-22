import { EnergyType } from '../Energy';

export default abstract class Archetype {
  private _name: string;
  private _special: number;
  private _cost: number;

  constructor(name: string) {
    this._name = name;
    this._special = 0;
    this._cost = 0;
  }

  public get name(): string {
    return this._name;
  }

  public get special(): number {
    return this._special;
  }

  public get cost(): number {
    return this._cost;
  }

  static createdArchetypeInstances(/* maxInstanceNumber: number */): number {
    // let count = 0;
    // if (count === maxInstanceNumber) {
    //   throw new Error('Not implemented');
    // }
    throw new Error('Not implemented');

    // count += count + 1;
    // return count;
  }

  public abstract get energyType(): EnergyType;
}
