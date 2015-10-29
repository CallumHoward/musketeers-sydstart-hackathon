Product = function(doc) {
  _.extend(this, doc);
};

_.extend(Product.prototype, {
  getPriceAmount: function() {
    return this.price.amount;
  },
  getFormattedPrice: function(currency) {
    var price = new Money(this.price.amount, this.price.currency, false);
    var res = '';
    if (currency) res += '$';
    res += price.getDenormalizedAmount();
    return res;
  },
  isOwnedBy: function(companyId) {
    if (this.companyId === companyId) return true;
    return false;
  }
});
