
  
const API_URL = 'https://retoolapi.dev/ofSTuj/data'; // Public API URL

// Function to fetch users
export const fetchUsers = async () => {
  try {
    const response = await fetch('https://retoolapi.dev/ofSTuj/data');
    if (!response.ok) {
      throw new Error('Failed to fetch users');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching users:', error);
    return [];
  }
};


// Function to fetch user roles (simulating roles using user data)
export const fetchUserRoles = async () => {
  try {
    const response = await fetch('https://retoolapi.dev/ofSTuj/data');
    if (!response.ok) {
      throw new Error('Failed to fetch user roles');
    }
    const users = await response.json();
    // Mapping users to a role structure (just for simulation)
    return users.map((user) => ({
      id: user.id,
      role: user.username === 'Leanne Graham' ? 'Admin' : 'User',
      name:user.name,
      email: user.email,
    }));
  } catch (error) {
    console.error('Error fetching user roles:', error);
    return []; // Return an empty array in case of an error
  }
};
export const updateUserRole = async (userId, newRole) => {
  try {
    const response = await fetch(`https://retoolapi.dev/ofSTuj/data/${userId}`, {
      method: 'PUT', // Or 'PATCH'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ role: newRole }),
    });
    if (!response.ok) {
      throw new Error('Failed to update user role');
    }
    const updatedUser = await response.json();
    return { userId: updatedUser.id, newRole: updatedUser.role };
  } catch (error) {
    console.error('Error updating user role:', error);
    throw error; // Rethrow the error for further handling
  }
};
