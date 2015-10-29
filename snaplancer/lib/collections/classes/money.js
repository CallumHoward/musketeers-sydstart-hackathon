/**
 * Money class to process input values from forms and keep our data in a
 * normalized format (always in the lowest denomination unit).
 *
 * @param {Number} amount The value of the money. Can be both in the currency's
 * lowest denomination unit or in dollars. If not in the lowest denomination
 * unit, the 'toNormalize' argument must be set to true.
 * @param {String} currency The currency string supported by Stripe and already
 * defined in TTCG.CurrenciesEnum.
 * @param {Boolean} toNormalize Set this to true if 'amount' variable is not in
 * the currency's lowest demonination unit. Lowest denomination unit format for
 * AUD or USD is 520 for 5 dollars 20 cents (because the whole amount is in
 * cents unit).
 */
Money = function(amount, currency, toNormalize) {
  _.extend(this, {amount: Number(amount), currency: currency});

  if (toNormalize) {
    if (!this.hasZeroDecimalCurrency())
      this.amount *= 100;
  }
  this.amount = Math.round(this.amount);
};

_.extend(Money.prototype, {
  currencies: {
    AUD: { name: 'aud', decimal: true },
    USD: { name: 'usd', decimal: true },
    SGD: { name: 'sgd', decimal: true },
    JPY: { name: 'jpy', decimal: false}
  }
});

_.extend(Money.prototype, {
  getProcessedObject: function() {
    return {amount: this.amount, currency: this.currency};
  },
  hasZeroDecimalCurrency: function() {
    var curr = this.currencies[this.currency.toUpperCase()];
    if (!curr) throw new Error();
    return !curr.decimal;
  },
  getDenormalizedAmount: function() {
    if (this.hasZeroDecimalCurrency()) return this.amount;
    return this.amount/100;
  }
});
