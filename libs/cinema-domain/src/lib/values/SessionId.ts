import {v5 as uuid} from 'uuid';

class SessionId {
  constructor(private _value?: String) {
    this._value = uuid()
  }

  get value() {
    return this._value;
  }

  static getNext() {
    return new SessionId();
  }
}

export default SessionId;
