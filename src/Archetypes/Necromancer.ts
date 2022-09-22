import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Necromancer extends Archetype {
  static counter = 0;
  private _energyType: EnergyType;

  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
    Necromancer.counter += 1;
  }

  static createdArchetypeInstances(): number {
    return Necromancer.counter;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}