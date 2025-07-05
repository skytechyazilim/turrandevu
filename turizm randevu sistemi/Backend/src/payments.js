// backend/src/routes/payments.js
router.post('/pay', auth(), async (req, res) => {
  // Stripe/iyzico entegrasyonu ile ödeme başlatılır
  // ...
  res.json({ status: 'success', paymentId: 'xyz' });
});