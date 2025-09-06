import React, { useEffect } from 'react';
import { MdOutlineCancel } from 'react-icons/md';

import { Link } from 'react-router-dom';

import { useStateContext } from '../contexts/ContextProvider';
import avatar from '../components/img/icons8-utilisateur-50.png';

const UserProfile = ({ yourId }) => {
  const { currentColor } = useStateContext();
  const [user, setUser] = React.useState([]);

  const handleLogout = async () => {
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
          // Logout successful, redirect to home page or any other desired page
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

  useEffect(() => {
    fetch('http://localhost:8000/api/affichuser')
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="nav-item absolute right-1 top-16 bg-white dark:bg-[#42464D] p-8 rounded-lg w-96">
      <div className="flex justify-between items-center">
        <p className="font-semibold text-lg dark:text-gray-200">ملف تعريفي للمستخدم </p>
        <MdOutlineCancel
          className="text-2xl text-gray-500 cursor-pointer hover:text-light-gray"
          onClick={() => {}}
        />
      </div>
      <div>
        <div className="flex gap-5 items-center mt-6 border-color border-b-1 pb-6">
          <div>
            {user &&
              user
                .filter((c) => c.id === parseInt(yourId))
                .map((c) => (
                  <div key={c.id}>
                    <img
                      className="rounded-full h-24 w-24"
                      src={require(`./img/${c.picture}`)}
                      alt="user-profile"
                    />
                    <p className="font-semibold text-xl dark:text-gray-200">{c.name}</p>
                    <p className="text-gray-500 text-sm dark:text-gray-400">{c.poste}</p>
                    <p className="text-gray-500 text-sm font-semibold dark:text-gray-400">{c.email}</p>
                    <div className="mt-5">
        <a
          href="/"
          className={`px-4 py-2 text-white font-semibold rounded-lg bg-${currentColor} hover:bg-light-gray`}
          style={{ backgroundColor: currentColor }}
          onClick={handleLogout}
        >
          Logout
        </a>
      </div>
                  </div>
                ))}
          </div>
        </div>
      </div>
    
    </div>
  );
};

export default UserProfile;
