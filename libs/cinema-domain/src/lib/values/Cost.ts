export enum Currencies {
  USD = 'usd',
  EUR = 'eur',
  BYN = 'byn'
}

export class Cost {
  private constructor(
    private _amount: number,
    private _currency: Currencies,
  ) {
  }


  get amount() {
    return this._amount;
  }

  get currency() {
    return this._currency;
  }

  static of(amount: number, currency: Currencies) {
    return new Cost(amount, currency);
  }
}

