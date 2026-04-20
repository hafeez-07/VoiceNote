import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import type { LoggedInUser } from "../types/user";
import { loginUser } from "../api/authApi";
import useAuth from "../../hooks/useAuth";
import illustration from "../assets/illustration.png";
import { FaCheck } from "react-icons/fa";

const Landing = () => {
  const [formData, setFormData] = useState<LoggedInUser>({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const { setUser } = useAuth();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    if (loading) return;
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const userData = await loginUser(formData);
      setUser(userData);
      navigate(location.state?.from || "/app");
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Could not login");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen w-screen">
      {/* LEFT SIDE (60%) */}
      <div className="relative hidden h-screen w-[60%] items-center justify-center overflow-hidden bg-black md:flex">
        {/* Image */}
        <img
          src={illustration}
          alt="Notes illustration"
          className="h-screen w-full object-cover opacity-80"
        />
        <div className="absolute top-20 flex flex-col gap-4 px-4">
          <h2 className="text-4xl font-bold text-orange-500">
            Capture your ideas ✍🏻
          </h2>
          <p className="text-xl font-semibold text-zinc-400">
            Write, organize and access your notes anytime, anywhere
          </p>
          <div className="flex flex-col gap-1 text-zinc-400">
            <div className="flex items-center gap-2">
              <FaCheck className="text-orange-500" />
              <p>Fast & simple note taking</p>
            </div>
            <div className="flex items-center gap-2">
              <FaCheck className="text-orange-500" />
              <p>Secure authentication</p>
            </div>
            <div className="flex items-center gap-2">
              <FaCheck className="text-orange-500" />
              <p>Clean & distraction free UI</p>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE (40%) */}
      <div className="relative flex h-screen w-full items-center justify-center overflow-hidden bg-linear-to-br from-zinc-900 via-zinc-800 to-black px-6 md:w-[40%]">
        <div className="absolute top-1/2 -left-20 h-100 w-100 -translate-y-1/2 rounded-full bg-orange-500/20 blur-3xl"></div>
        <div className="relative w-full max-w-md overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-xl">
          <h2 className="mb-6 text-center text-xl font-semibold text-white">
            Log in to your account
          </h2>

          <form onSubmit={submitHandler} className="flex flex-col gap-4">
            {/* ERROR FLASH MESSAGE */}
            {error && (
              <div
                className={`overflow-hidden text-center text-sm text-red-400 transition-all duration-300 ease-out ${
                  error ? "max-h-8 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                {error}
              </div>
            )}

            {/* EMAIL */}
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email address"
              required
              className="auth-input-field"
            />

            {/* PASSWORD */}
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              required
              className="auth-input-field"
            />

            {/* BUTTON */}
            <button
              disabled={loading}
              type="submit"
              className="auth-submit-button flex items-center justify-center"
            >
              {loading ? (
                <div className="h-4 w-4 animate-spin rounded-full border-2 border-t-transparent"></div>
              ) : (
                "Login"
              )}
            </button>
          </form>

          <div className="mt-4 text-center text-sm text-zinc-400">
            Don’t have an account?{" "}
            <Link to="/register" className="text-orange-400 hover:underline">
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
