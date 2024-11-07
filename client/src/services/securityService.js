// securityService.js
export const updatePassword = async (newPassword) => {
    const response = await fetch('/api/security/password', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ newPassword }),
    });
    return response.json();
  };
  
  export const updatePrivacySettings = async (privacySettings) => {
    const response = await fetch('/api/security/privacy', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(privacySettings),
    });
    return response.json();
  };
  
  export const updateTwoFactorAuth = async (isEnabled) => {
    const response = await fetch('/api/security/2fa', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ enabled: isEnabled }),
    });
    return response.json();
  };