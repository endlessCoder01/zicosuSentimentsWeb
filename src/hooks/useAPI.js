import { useState } from 'react';
import { APIURL } from '../services/config';
import Swal from 'sweetalert2';

export function useAPI() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const callAPI = async (endpoint, method = 'GET', body = null, token = null) => {
    setLoading(true);
    setError(null);

    try {
      const url = `${APIURL}${endpoint}`;
      const options = {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
      };

      if (body && (method === 'POST' || method === 'PUT')) {
        options.body = JSON.stringify(body);
      }

      if (token) {
        options.headers.Authorization = `Bearer ${token}`;
      }

      const response = await fetch(url, options);
      const data = await response.json();

      if (!response.ok) {
        const errorMsg = data.error || data.message || 'An error occurred';
        setError(errorMsg);

        // Handle specific status codes
        if (response.status === 401) {
          localStorage.clear();
          window.location.href = '/login';
        }

        return {
          success: false,
          message: errorMsg,
          status: response.status,
          data
        };
      }

      return {
        success: true,
        data,
        status: response.status
      };
    } catch (err) {
      const errorMsg = err.message || 'Network error. Please check your connection.';
      setError(errorMsg);

      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: errorMsg,
      });

      return {
        success: false,
        message: errorMsg,
        error: err
      };
    } finally {
      setLoading(false);
    }
  };

  return { callAPI, loading, error, setError };
}
