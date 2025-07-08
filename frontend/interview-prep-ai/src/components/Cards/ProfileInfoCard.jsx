import React, { useContext } from 'react'
import { UserContext } from '../../context/userContext'
import { useNavigate } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';

const ProfileInfoCard = () => {
    const { user, clearUser} = useContext(UserContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.clear();
        clearUser();
        navigate("/");
    };

  return (
    user && (
    <div className='flex items-center'>
        {user.profileImageUrl ? (
            <img 
                src={user.profileImageUrl} 
                alt="profile"
                className='w-11 h-11 bg-gray-300 rounded-full mr-3 object-cover' 
            />
        ) : (
            <FaUserCircle className='w-11 h-11 text-gray-400 mr-3' />
        )}
        <div>
            <div className='text-[15px] text-black font-bold leading-3'>
                {user.name || ""}
            </div>
            <button className='text-[#670D2F] text-sm font-semibold cursor-pointer hover:underline' onClick={handleLogout}>
                Logout
            </button>
        </div>
    </div>
    )
  )
}

export default ProfileInfoCard
