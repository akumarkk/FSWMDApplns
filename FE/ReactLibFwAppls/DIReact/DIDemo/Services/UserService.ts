// Real Service
const ApiUserService = {
  getUser: async (id) => {
    const response = await fetch(`https://api.example.com/users/${id}`);
    return response.json();
  }
};

// Mock Service (For testing or offline dev)
const MockUserService = {
  getUser: async (id) => {
    return { id, name: "Raya Yash (Mocked)", email: "raya@demo.com" };
  }
};