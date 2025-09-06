import React from 'react';

import { useStateContext } from '../contexts/ContextProvider';

const Button = ({ icon, bgColor, color, bgHoverColor, size, text, borderRadius, width }) => {
  const { setIsClicked, initialState } = useStateContext();
  const handle = async (event) => {
    event.preventDefault();
  
    try {
      const response = await fetch('http://127.0.0.1:8000/api/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({}),
      });
  
      if (response.ok) {
        const data = await response.text();
  
        if (data === 'Logout successful') {
          // Logout successful, redirect to home page
          window.location.href = '/';
        } else {
          // Handle logout error, display an error message or perform other actions
          console.error('Logout failed');
        }
      } else {
        // Handle logout error, display an error message or perform other actions
        console.error('Logout failed');
      }
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  };
  

  return (
    
    <button
      type="button"
      onClick={() => setIsClicked(initialState)}
      style={{ backgroundColor: bgColor, color, borderRadius }}
      className={` text-${size} p-3 w-${width} hover:drop-shadow-xl hover:bg-${bgHoverColor}`}
    >
      {icon} {text}
    </button>
  );
};

export default Button;
