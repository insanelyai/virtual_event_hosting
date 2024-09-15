import Link from "next/link";
import "@fortawesome/fontawesome-free/css/all.min.css";


export default function Login() {
  return (
    <div className="h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full">
        <div className="bg-white p-8 rounded-lg shadow-xl relative">
          <Link href="/navbar" className="absolute top-8 right-8 text-gray-500 hover:text-gray-700 focus:outline-none">
              <i className="fas fa-times text-2xl"></i>
          </Link>

          <div className="flex justify-center mb-2">
            <img
              className="h-20 w-20"
              src="https://seeklogo.com/images/M/meetup-logo-A0A979F531-seeklogo.com.png"
              alt="Meetup Logo"
            />
          </div>
          <h2 className="text-4xl font-bold text-center mb-4">Login</h2>
          <p className="text-center text-gray-600 mb-6">
            New Member?{" "}
            <Link href="/signup" className="text-[#56a6b1] hover:underline">
              Sign up
            </Link>
          </p>
          <form>
            <div className="space-y-4">
              <input
                className="block border-gray-300 py-2 border rounded w-full"
                type="email"
                autoComplete="email"
                required
                placeholder="Enter ID"
              />
              <input
                className="block border-gray-300 py-2 border rounded w-full"
                type="password"
                required
                placeholder="Enter Password"
              />
              <Link
                href="/forgotpassword"
                className="py-2 text-sm text-[#56a6b1] block text-center"
              >
                Forgot Password?
              </Link>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-500 hover:bg-red-600 focus:ring-red-500"
              >
                Login
              </button>
            </div>
          </form>
          {/* Signup Options with Social Media */}
          <div className="mt-4 space-y-2">
            <button className="p-2 flex items-center justify-center w-full border-2 text-black rounded-md hover:bg-blue-700 transition duration-300">
              <img
                className="mr-2"
                src="https://seeklogo.com/images/M/meta-icon-new-facebook-2021-logo-83520C311D-seeklogo.com.png"
                alt="Facebook Logo"
                style={{ height: "2rem", width: "auto" }}
              />
              Continue with Facebook
            </button>
            <button className="flex items-center justify-center w-full bg-white border border-gray-300 text-gray-700 py-2 rounded-md hover:bg-gray-50 transition duration-300">
              <img
                className="mr-2"
                src="https://seeklogo.com/images/G/google-2015-logo-65BBD07B01-seeklogo.com.png"
                alt="Google Logo"
                style={{ height: "2rem", width: "auto" }}
              />
              Continue with Google
            </button>
            <button className="p-2 flex items-center justify-center w-full border-2 bg-white text-black rounded-md transition duration-300 hover:bg-yellow-500">
              <img
                className="mr-2"
                src="https://seeklogo.com/images/A/apple-logo-E3DBF3AE34-seeklogo.com.png"
                alt="Apple Logo"
                style={{ height: "2rem", width: "auto" }}
              />
              Continue with Apple
            </button>
            <button className="flex items-center justify-center w-full bg-gray-200 text-gray-700 py-2 rounded-md hover:bg-gray-300 transition duration-300">
              <i className="fas fa-envelope mr-2"></i> Sign up with email
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
