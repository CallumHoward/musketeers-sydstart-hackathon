Dummy = [
  {
    _id: 'homepage',
    prev: 'homepage',
    next: 'checkoutFlow/deliveryDetails'
  },
  {
    _id: 'checkoutFlow/deliveryDetails',
    prev: 'homepage',
    next: 'checkoutFlow/paymentDetails'
  },
  {
    _id: 'checkoutFlow/paymentDetails',
    prev: 'checkoutFlow/deliveryDetails',
    next: 'homepage'
  }
];
