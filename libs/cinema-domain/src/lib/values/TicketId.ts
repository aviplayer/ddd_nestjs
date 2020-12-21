import {v5 as uuid} from 'uuid';

class TicketId {
  constructor(private _value?: String) {
    this._value = uuid()
  }

  get value() {
    return this._value;
  }

  static getNext() {
    return new TicketId();
  }
}

export default TicketId;



