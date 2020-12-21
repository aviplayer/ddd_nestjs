import {v5 as uuid} from 'uuid';

class MovieId {
  constructor(private _value?: String) {
    this._value = uuid()
  }

  get value() {
    return this._value;
  }

  static getNext() {
    return new MovieId();
  }
}

export default MovieId;
