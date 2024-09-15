import "./Profile.css"

import { User, Settings,LogOut } from 'lucide-react';

const ProfileItem = ({ icon, text }) => (
    <div className="profile-item">
      {icon}
      <span>{text}</span>
    </div>
  );

const Profile = () => {
  return (
    <>
      <div className="sidebar-profile">
      <h2 className="profile-heading">Profile</h2>
      <div className="profile-items">
        <ProfileItem icon={<User size={18} />} text="View Profile" />
        <ProfileItem icon={<Settings size={18} />} text="Settings" />
        <ProfileItem icon={<LogOut size={18} />} text="Logout" />
      </div>
    </div>
    </>
  )
}

export default Profile
