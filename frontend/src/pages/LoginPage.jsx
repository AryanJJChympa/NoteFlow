// src/pages/Login.jsx
import { useState } from "react";
import { useNavigate } from "react-router";
import api from "../lib/axios";
import toast from "react-hot-toast";

export default function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
   const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
     setLoading(true);
    try {
      const { data } = await api.post("/auth/login", formData);
      localStorage.setItem("token", data.token);
      navigate("/"); // Redirect to homepage after login
    } catch (err) {
      console.log(err.response?.data?.message || "Login failed");
      console.error(err);
      toast.error("Login Failed!");
      setLoading(false);
    }
  };

  return (
     <div className="flex items-center justify-center min-h-screen relative bg-transparent px-4">
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80 backdrop-blur-sm"></div>

      <form
        onSubmit={handleSubmit}
        className="relative z-10 w-full max-w-md bg-neutral-900/70 border border-neutral-800 rounded-2xl shadow-2xl p-8 backdrop-blur-lg"
      >
        <h2 className="text-3xl font-bold text-center text-white mb-6">
          Welcome Back 👋
        </h2>
        <p className="text-neutral-400 text-center mb-8">
          Login to continue your journey
        </p>

        {/* Email */}
        <div className="mb-5">
          <label htmlFor="email" className="block text-sm font-medium text-neutral-300 mb-2">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={handleChange}
            value={formData.email}
            required
            placeholder="Enter your email"
            className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-xl text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>

        {/* Password */}
        <div className="mb-5">
          <label htmlFor="password" className="block text-sm font-medium text-neutral-300 mb-2">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={handleChange}
            value={formData.password}
            required
            placeholder="Enter your password"
            className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-xl text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 hover:bg-blue-700 transition-all text-white font-semibold py-3 rounded-xl shadow-lg disabled:opacity-50"
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        {/* Register Link */}
        <p className="text-center text-neutral-400 mt-6">
          Don't have an account?{" "}
          <span
            onClick={() => navigate("/register")}
            className="text-blue-500 hover:text-blue-400 cursor-pointer font-medium"
          >
            Register
          </span>
        </p>
      </form>
    </div>
  );
}
