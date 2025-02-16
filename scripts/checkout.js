import { renderOrderSummary } from './checkout/orderSummary.js';
import { renderPaymentSummary } from './checkout/paymentSummary.js';
//import '../data/cart-oop.js';
import { loadCart } from '../data/cart.js';

// async await method
async function loadPage() {
  await loadCart();

  renderOrderSummary();
  renderPaymentSummary();
}
loadPage();

/*
//Promise method
new Promise((resolve) => {
  loadCart(() => {
    resolve();
  });

}).then(() => {
  renderOrderSummary();
  renderPaymentSummary();
});
*/
/*
loadCart(() => {
  renderOrderSummary();
  renderPaymentSummary();
});
*/
