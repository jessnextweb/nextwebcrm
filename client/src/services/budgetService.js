// // budgetService.js
export const fetchBudgetData = async () => {
    return {
      budget: 50000,
      actualCost: 45000,
    };
  };
  

// budgetService.js
// export const fetchBudgetData = async (dateRange) => {
//   const response = await fetch(`/api/budget-data?from=${dateRange.from}&to=${dateRange.to}`);
//   return response.json();
// };

export const submitBudgetData = async (budgetDetails) => {
  const response = await fetch('/api/submit-budget', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(budgetDetails),
  });
  return response.json();
};

export const getBudgetForecast = async () => {
  const response = await fetch('https://retoolapi.dev/HzQo4H/data');
  return response.json();
};