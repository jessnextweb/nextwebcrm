// marketingAnalyticsService.js
export const fetchMarketingAnalytics = async (params) => {
    const response = await fetch('https://retoolapi.dev/cw2aW8/data', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(params),
    });
    return response.json();
  };