"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useLoginUserMutation } from "../redux/apiSlice";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

export default function LoginPage() {
  const router = useRouter();
  const [loginUser, { isLoading }] = useLoginUserMutation();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (e.target.name === "password" && e.target.value.length < 8) {
      setErrorMessage("Password must be at least 8 characters long!");
    } else {
      setErrorMessage("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password.length < 8) {
      setErrorMessage("Password must be at least 8 characters long!");
      return;
    }
    setErrorMessage("");
    try {
      const res = await loginUser(formData).unwrap();
      console.log("✅ Login Success:", res);
      localStorage.setItem("token", res.data.token);
      alert("Login Successful!");
      console.log(localStorage.getItem("token"));
      router.push("/");
    } catch (err) {
      console.error("❌ Login Failed:", err);
      setErrorMessage(err?.data?.message || "Login Failed!");
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/banner.jpg')" }}
    >
      <div className="w-full max-w-md p-8 mx-8 bg-white bg-opacity-90 shadow-xl rounded-xl z-10">
        <h2 className="text-3xl font-bold mb-6 text-center">Login</h2>

        {errorMessage && (
          <p className="text-red-500 text-sm mb-4 text-center">{errorMessage}</p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <label htmlFor="">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <div className="relative">
            <label htmlFor="">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 pr-10"
            />
            <span
              className="absolute right-3 top-8 cursor-pointer text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <AiOutlineEyeInvisible size={20} /> : <AiOutlineEye size={20} />}
            </span>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition"
          >
            {isLoading ? "Logging in..." : "Login"}
          </button>
        </form>

        <div className="my-4 text-center text-gray-500">Or Login with</div>

        <div className="flex justify-center gap-4">
          <button className="flex items-center gap-2 border border-gray-300 py-2 px-4 rounded-lg hover:bg-gray-100 transition">
            <FcGoogle size={20} /> Google
          </button>
          <button className="flex items-center gap-2 border border-gray-300 py-2 px-4 rounded-lg hover:bg-gray-100 transition">
            <FaFacebookF size={16} className="text-blue-600" /> Facebook
          </button>
        </div>

        <p className="text-center mt-4 text-gray-500">
          Dont have an account?{" "}
          <span
            className="text-green-600 cursor-pointer hover:underline"
            onClick={() => router.push("/register")}
          >
            Register
          </span>
        </p>
      </div>
    </div>
  );
}
