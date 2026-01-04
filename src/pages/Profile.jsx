import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { Edit, LogOut, User } from "lucide-react";

const Profile = () => {
  const { user, signoutUserFunc, updateProfileFunc, setUser } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const [edit, setEdit] = useState(false);
  const [name, setName] = useState(user?.displayName || "");
  const [photo, setPhoto] = useState(user?.photoURL || "");

  if (!user) {
    navigate("/signin");
    return null;
  }

  const handleUpdateProfile = () => {
    updateProfileFunc(name, photo)
      .then(() => {
        toast.success("Profile updated successfully");
        setEdit(false);
      })
      .catch(() => {
        toast.error("Failed to update profile");
      });
  };

  const handleSignout = () => {
    signoutUserFunc()
      .then(() => {
        toast.success("Logout sucessful");
        setUser(null);
      })
      .catch((e) => {
        toast.error(e.message);
      });
  };

  const createdAt = user?.metadata?.creationTime;

  const formattedDate = createdAt
    ? new Date(createdAt).toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      })
    : "";

  return (
    <div className="min-h-screen bg-[#FFFDF8] flex flex-col items-center justify-center px-4">
      <div className="border-2 border-amber-600 bg-white rounded-full p-4 mb-3 "><User color="	#b36800" strokeWidth={3} /></div>
      <div className="text-center mb-8 space-y-3">
        <h1 className="text-3xl font-bold text-[#3A3A3A]">
          {edit ? "Edit Profile" : "My Profile"}
        </h1>

        <p className="text-sm text-[#6B7280] mt-1">
          {edit
            ? "Update your personal information below"
            : "Manage your personal information and account settings"}
        </p>
      </div>

      <div className="bg-white shadow-xl rounded-2xl border border-[#FDE6C8] p-8 w-full max-w-md text-center">
        <img
          src={user?.photoURL || "https://via.placeholder.com/88"}
          alt="profile"
          className="w-28 h-28 rounded-full mx-auto border-4 border-amber-400"
        />

        {!edit ? (
          <>
            <h2 className="mt-4 text-2xl font-bold text-[#3A3A3A] text-center">
              {user.displayName}
            </h2>

            <p className="text-center text-[#6B7280]">{user.email}</p>

            <p className="text-center text-sm text-[#6B7280] mt-1">
              Member since: <span className="font-medium">{formattedDate}</span>
            </p>

            <div className="mt-6 flex flex-col gap-3">
              <div className="bg-amber-500 hover:bg-amber-600 text-white py-2 rounded-lg font-semibold transition flex gap-2 justify-center">
                <Edit />
                <button onClick={() => setEdit(true)}>Edit Profile</button>
              </div>

              <div className="border border-amber-400 text-amber-600 hover:bg-amber-50 py-2 rounded-lg font-semibold transition flex gap-2 justify-center">
                <LogOut />
                <button onClick={handleSignout}>Logout</button>
              </div>
            </div>
          </>
        ) : (
          <>
            
            <div className="mt-6 space-y-4 text-left">
              <div>
                <label className="block text-sm mb-1 text-gray-700">Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  className="input input-bordered w-full text-gray-500"
                />
              </div>

              <div>
                <label className="block text-sm mb-1 text-gray-700">
                  Photo URL
                </label>
                <input
                  type="text"
                  value={photo}
                  onChange={(e) => setPhoto(e.target.value)}
                  placeholder="Photo URL"
                  className="input input-bordered w-full text-gray-500"
                />
              </div>

              <div className="flex gap-3">
                <button
                  onClick={handleUpdateProfile}
                  className="flex-1 bg-amber-500 hover:bg-amber-600 text-white py-2 rounded-lg font-semibold"
                >
                  Save
                </button>
                <button
                  onClick={() => setEdit(false)}
                  className="flex-1 border border-amber-400 text-amber-600 hover:bg-amber-50 py-2 rounded-lg"
                >
                  Cancel
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Profile;
