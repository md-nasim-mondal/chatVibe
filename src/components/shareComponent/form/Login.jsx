"use client";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { FaGoogle, FaFacebook, FaEyeSlash, FaEye } from "react-icons/fa";
import { useState } from "react";
import { signIn } from "next-auth/react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function Login() {
  const route = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = async (data) => {
    // Handle form submission, e.g., send data to server
    const email = data.email;
    const password = data.password;
    try {
      const resp = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });
      // toast
      if (resp.error) {
        toast.error(resp.error);
      } else {
        toast.success("Login Successfully");
        route.push("/");
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <div className="flex justify-center items-center h-3/4">
      <div className="bg-white p-8 shadow-lg rounded-lg w-full max-w-sm">
        <h2 className="text-2xl font-semibold mb-6 text-center">Log In</h2>

        {/* Form starts here */}
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Email Input */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">
              Enter Your Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter Your Email"
              {...register("email", { required: "Email is required" })}
              className={`mt-1 w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.email ? "border-red-500" : ""
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password Input */}
          <div className="mb-4 relative">
            <label htmlFor="password" className="block text-gray-700">
              Enter Your Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="Enter Your Password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters long",
                },
              })}
              className={`mt-1 w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.password ? "border-red-500" : ""
              }`}
            />
            <button
              type="button"
              className="absolute right-2 top-10 text-blue-600"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Forget Password */}
          <div className="text-right mb-6">
            <Link href="#" className="text-blue-500 hover:underline">
              Forget Password?
            </Link>
          </div>

          {/* Sign In Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Log In
          </button>
        </form>

        {/* Redirect to Sign Up */}
        <p className="text-xs text-center text-gray-500 mt-4">
          Don’t have an account?{" "}
          <Link href="/api/auth/signup" className="underline text-blue-500">
            Sign Up
          </Link>
        </p>

        {/* Privacy & Terms */}
        <p className="text-xs text-center text-gray-500 mt-4">
          By signing in, you agree to the charitable{" "}
          <Link href="#" className="underline text-blue-500">
            Privacy Statement
          </Link>{" "}
          and{" "}
          <Link href="#" className="underline text-blue-500">
            Terms of Service
          </Link>
        </p>

        {/* Social Logins */}
        <div className="flex justify-center items-center space-x-4 mt-6">
          <button className="text-orange-600 hover:text-blue-500">
            <FaGoogle size={30} />
          </button>
          <button className="text-blue-600 hover:text-blue-600">
            <FaFacebook size={30} />
          </button>
        </div>
      </div>
    </div>
  );
}
