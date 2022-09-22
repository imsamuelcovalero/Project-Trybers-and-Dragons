import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Ranger extends Archetype {
  static counter = 0;
  private _energyType: EnergyType;

  constructor(name: string) {
    super(name);
    this._energyType = 'stamina';
    Ranger.counter += 1;
  }

  static createdArchetypeInstances(): number {
    return Ranger.counter;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}