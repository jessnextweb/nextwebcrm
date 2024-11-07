// taxService.js
export const calculateTax = async (taxDetails) => {
    const response = await fetch('https://retoolapi.dev/5h7JBe/data', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(taxDetails),
    });
    return response.json();
  };
  
  export const exportTaxReport = async () => {
    const response = await fetch('https://retoolapi.dev/NQ4X6j/data');
    const blob = await response.blob();
    return URL.createObjectURL(blob);
  };                   