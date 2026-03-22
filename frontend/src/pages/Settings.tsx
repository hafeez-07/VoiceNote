import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import type { User } from "../types/user";

const Settings = () => {
  const { user } = useAuth();
  const [formData, setFormData] = useState<User>({
    fullname: "",
    username: "",
    email: "",
    age: 0,
  });

  useEffect(() => {
    if (user) {
      setFormData({
        fullname: user.fullname || "",
        username: user.username || "",
        email: user.email || "",
        age: user.age || 0,
      });
    }
  }, [user]);

  console.log(formData);

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === "age" ? Number(value) : value,
    });
  };

  return (
    <div className="max-w-5xl mx-auto px-3">
      <h2 className="text-2xl font-semibold">Account Settings</h2>
      <p className="mt-1 text-zinc-400">
        Manage your personal information and account preferences.
      </p>
      <div className="flex flex-col sm:flex-row justify-between mt-8 gap-10">
        <div className="flex flex-col items-center border py-5 px-20 border-zinc-800 bg-zinc-900 rounded-2xl">
          <div className="w-32 h-32 rounded-[50%] bg-white mb-4">
            <img />
          </div>
          <div>{user?.fullname}</div>
          <div className="text-zinc-400">{user?.username}</div>
        </div>
        <div className="flex flex-col  grow gap-4 border border-zinc-800 bg-zinc-900 rounded-2xl p-5 sm:p-10">
          <div className="grid gap-1">
            <label className="text-zinc-400">Username</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={inputHandler}
              className="input-field"
            />
          </div>
          <div className="grid gap-1">
            <label className="text-zinc-400">Fullname</label>
            <input
              type="text"
              name="fullname"
              value={formData.fullname}
              onChange={inputHandler}
              className="input-field"
            />
          </div>
          <div className="grid gap-1">
            <label className="text-zinc-400">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={inputHandler}
              className="input-field"
            />
          </div>
          <div className="grid gap-1">
            <label className="text-zinc-400">Age</label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={inputHandler}
              className="input-field"
            />
          </div>
          <input type="submit" className="submit-button" />
        </div>
      </div>
    </div>
  );
};

export default Settings;
