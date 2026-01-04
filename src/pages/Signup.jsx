import { Link, useNavigate } from "react-router";
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";
import { toast } from "react-toastify";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

const Signup = () => {
  const [show, setShow] = useState(false);
  const {
    createUserWithEmailAndPasswordFunc,
    updateProfileFunc,
    signInWithEmailFunc,
    setLoading,
    setUser,
  } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    const displayName = e.target.name?.value;
    const photoURL = e.target.photo?.value;
    const email = e.target.email?.value;
    const password = e.target.password?.value;

    console.log("signup function entered", {
      email,
      displayName,
      photoURL,
      password,
    });

    const regExp = /^(?=.*[a-z])(?=.*[A-Z])[A-Za-z]{6,}$/;

    console.log(regExp.test(password));

    if (!regExp.test(password)) {
      toast.error(
        "Password must be at least 6 characters long and contain both uppercase and lowercase letters."
      );
      return;
    }

    createUserWithEmailAndPasswordFunc(email, password)
      .then(() => {
        updateProfileFunc(displayName, photoURL)
          .then(() => {
            setLoading(false);
            setUser({
              email,
              displayName,
              photoURL,
            });
            toast.success("Signup successful");
            navigate("/");
          })
          .catch((e) => {
            toast.error(e.message);
          });
      })
      .catch((e) => {
        console.log(e);
        console.log(e.code);
        if (e.code === "auth/email-already-in-use") {
          toast.error("This email is already registered.");
        } else if (e.code === "auth/weak-password") {
          toast.error("Password is too weak.");
        } else if (e.code === "auth/invalid-email") {
          toast.error("Invalid email address.");
        } else if (e.code === "auth/network-request-failed") {
          toast.error("Network error. Try again.");
        } else {
          toast.error(e.message);
        }
      });
  };

  const handleGoogleSignin = () => {
    console.log("google signin");
    signInWithEmailFunc()
      .then((res) => {
        console.log(res);
        setLoading(false);
        setUser(res.user);
        navigate("/");
        toast.success("Signin successful");
      })
      .catch((e) => {
        console.log(e);
        toast.error(e.message);
      });
  };

  return (
    <div className="min-h-[96vh] flex items-center justify-center bg-[#FFFDF8] relative overflow-hidden">
      <div className="relative z-10 flex flex-col  items-center justify-between gap-10 p-8 lg:p-10">
        <div className="max-w-lg text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-amber-700">
            Create Your Account
          </h1>
          <p className="mt-4 text-lg text-gray-600 leading-relaxed">
            Set up your account to manage your profile, preferences, and settings with ease.
          </p>
        </div>

        <div className="w-full max-w-md backdrop-blur-lg bg-white border border-amber-200 shadow-xl rounded-2xl p-8">
          <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">
            Sign Up
          </h2>

          <form onSubmit={handleSignup} className="space-y-4">
            <div>
              <label className="block text-sm mb-1">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter Your Name"
                className="input input-bordered w-full bg-white text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-amber-400 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Photo</label>
              <input
                type="text"
                name="photo"
                placeholder="Your photo URL here"
                className="input input-bordered w-full bg-white text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-amber-400 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm mb-1">Email</label>
              <input
                type="email"
                name="email"
                placeholder="example@email.com"
                className="input input-bordered w-full bg-white text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-amber-400 focus:outline-none"
              />
            </div>

            <div className="relative">
              <label className="block text-sm mb-1">Password</label>
              <input
                type={show ? "text" : "password"}
                name="password"
                placeholder="••••••••"
                className="input input-bordered w-full bg-white text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-amber-400 focus:outline-none"
              />
              <span
                onClick={() => setShow(!show)}
                className="absolute right-[8px] top-[36px] cursor-pointer z-50 text-gray-600"
              >
                {show ? <FaEye /> : <IoEyeOff />}
              </span>
            </div>

            <button
              type="submit"
              className="w-full py-2 rounded-lg  bg-amber-500 hover:bg-amber-600 text-white font-semibold transition-all duration-300"
            >
              Sign Up
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

            <div className="text-center mt-3">
              <p className="text-center text-sm text-gray-600 mt-3">
                Already have an account?{" "}
                <Link
                  to="/signin"
                  className="text-amber-600 hover:text-amber-800 underline"
                >
                  Sign in
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
