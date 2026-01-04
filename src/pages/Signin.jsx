import React, { useContext, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";
import { toast } from "react-toastify";
import { AuthContext } from "../context/AuthContext";

const Signin = () => {
  const [show, setShow] = useState(false);

  const emailRef = useRef(null);

  const {
    signInWithEmailAndPasswordFunc,
    signInWithEmailFunc,
    sendPassResetEmailFunc,
    setLoading,
    setUser,
    user,
  } = useContext(AuthContext);

  const location = useLocation();
  const from = location.state || "/";
  const navigate = useNavigate();

  if (user) {
    navigate("/");
    return;
  }

  const handleSignin = (e) => {
    e.preventDefault();
    const email = e.target.email?.value;
    const password = e.target.password?.value;
    console.log({ email, password });
    signInWithEmailAndPasswordFunc(email, password)
      .then((res) => {
        setLoading(false);

        setUser(res.user);
        toast.success("Signin successful");
        navigate(from);
      })
      .catch((e) => {
        console.log(e);
        toast.error(e.message);
      });
  };

  const handleGoogleSignin = () => {
    console.log("google signin");
    signInWithEmailFunc()
      .then((res) => {
        setLoading(false);
        setUser(res.user);
        navigate(from);
        toast.success("Signin successful");
      })
      .catch((e) => {
        toast.error(e.message);
      });
  };

  const handleForgetPassword = () => {
    console.log();
    const email = emailRef.current.value;
    sendPassResetEmailFunc(email)
      .then(() => {
        setLoading(false);
        toast.success("Check your email to reset password");
      })
      .catch((e) => {
        toast.error(e.message);
      });
  };

  return (
    <div className="min-h-[calc(100vh-20px)] flex items-center justify-center bg-[#FFFDF8] ">
      <div className="relative z-10 flex flex-col items-center justify-between gap-10 p-8 lg:p-10 ">
        <div className="max-w-lg text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-amber-700">
            Welcome Back
          </h1>
          <p className="mt-4 text-lg text-gray-600 leading-relaxed">
            Sign in to access your account and continue exploring ToyTopia.
          </p>
        </div>

        <div className="w-full max-w-md bg-white border border-amber-200 shadow-xl rounded-2xl p-8">
          <form onSubmit={handleSignin} className="space-y-5">
            <h2 className="text-2xl font-semibold mb-2 text-center text-gray-800">
              Sign In
            </h2>

            <div>
              <label className="block text-sm mb-1 text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                ref={emailRef}
                placeholder="example@email.com"
                className="input input-bordered w-full bg-white text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-amber-400 focus:outline-none"
                required
              />
            </div>

            <div className="relative">
              <label className="block text-sm mb-1">Password</label>
              <input
                type={show ? "text" : "password"}
                name="password"
                placeholder="••••••••"
                className="input input-bordered w-full bg-white text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-amber-400 focus:outline-none"
                required
              />
              <span
                onClick={() => setShow(!show)}
                className="absolute right-[8px] top-[36px] cursor-pointer z-50 text-gray-600"
              >
                {show ? <FaEye /> : <IoEyeOff />}
              </span>
            </div>

            <button
              className="hover:underline cursor-pointer text-amber-600"
              onClick={handleForgetPassword}
              type="button"
            >
              Forget password?
            </button>

            <button
              type="submit"
              className="w-full py-2 rounded-lg bg-amber-500 hover:bg-amber-600 text-white font-semibold transition-all duration-300"
            >
              Login
            </button>

            <div className="flex items-center justify-center gap-2 my-2">
              <div className="h-px w-16 bg-gray-300"></div>
              <span className="text-sm text-gray-500">or</span>
              <div className="h-px w-16 bg-gray-300"></div>
            </div>

            <button
              type="button"
              onClick={handleGoogleSignin}
              className="flex items-center justify-center gap-2  border border-amber-400 text-gray-800 px-5 py-2 rounded-lg w-full font-semibold hover:bg-amber-50 transition-colors cursor-pointer"
            >
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="google"
                className="w-5 h-5"
              />
              Continue with Google
            </button>

            <p className="text-center text-sm text-gray-600 mt-3">
              Don’t have an account?{" "}
              <Link
                to="/signup"
                className="text-amber-600 hover:text-amber-800 underline"
              >
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signin;
