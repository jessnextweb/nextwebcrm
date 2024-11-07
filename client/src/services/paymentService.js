// paymentService.js
export const fetchPayments = async () => {
    const response = await fetch('https://retoolapi.dev/aBUHxM/data');
    return response.json();
  };
  
  export const processPayment = async (paymentDetails) => {
    const response = await fetch('https://retoolapi.dev/aBUHxM/datat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(paymentDetails),
    });
    return response.json();
  };
  
  export const reconcilePayments = async () => {
    const response = await fetch('https://retoolapi.dev/aBUHxM/data');
    return response.json();
  };