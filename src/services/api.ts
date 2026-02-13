import axios from 'axios';

// Create axios instance with base configuration
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000/api/v1',
  withCredentials: true, // Important: sends cookies with requests
  headers: {
    'Content-Type': 'application/json'
  }
})

// Response interceptor for handling errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle different error scenarios
    if (error.response?.status === 401) {
      // Unauthorized 
      console.error('Unauthorized access')
    }
    
    return Promise.reject(error)
  }
)

export default api;