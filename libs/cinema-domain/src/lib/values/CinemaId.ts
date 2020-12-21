import {v5 as uuid} from 'uuid';

class CinemaId {
  private _value: string;
  constructor(_value?: string) {
    this._value = _value;
  }

  get value() {
    return this._value;
  }

  static getNext() {
    return new CinemaId();
  }
}

export default CinemaId;
