import Link from "next/link";
import "@fortawesome/fontawesome-free/css/all.min.css";
export default function htmlForgotPassword() {
  return (
    <div className="h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full">
        <div className="bg-white p-8 rounded-lg shadow-xl">
          {/* // Back Button - */}
          <button className="mb-6 text-gray-500 hover:text-gray-600"></button>
          <div className="flex">
            <img
              className="h-[46px] md:h-16 w-auto mr-auto my-2 object-fill"
              src="https://logodix.com/logo/2173861.png"
              alt="Meetup Logo"
            />
            <Link
              href="/navbar"
              className="py-2 text-sm text-[#56a6b1] block text-center"
            >
            
              <i className="fas fa-arrow-left"></i>
            </Link>
          </div>
          {/* // <!-- Title --> */}
          <h2 className="text-2xl font-bold text-gray-900">
            htmlForgot password?
          </h2>
          <p className="text-sm text-gray-500 mt-2">
            No worries! Enter the email associated with your account. We'll send
            you a secure link to reset your password.
          </p>

          {/* //   <!-- htmlForm --> */}
          <form className="mt-6 space-y-6" action="#" method="POST">
            {/* //   <!-- Email Input --> */}
            <div>
              <label
                htmlFor="email-address"
                className="block text-sm font-medium mb-2 text-gray-700"
              >
                Email
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-400 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                placeholder="Enter your email"
              />
            </div>

            {/* //   -- reCAPTCHA -- */}
            <div className="bg-gray-50 border border-gray-300 p-4 rounded-md flex items-center space-x-2">
              <input
                id="recaptcha"
                name="recaptcha"
                type="checkbox"
                className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
              />
              <label htmlFor="recaptcha" className="text-sm text-gray-900">
                I'm not a robot
              </label>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/RecaptchaLogo.svg/1024px-RecaptchaLogo.svg.png"
                alt="reCAPTCHA logo"
                className="ml-auto h-8 w-8"
              />
            </div>

            {/* // Submit Button -- */}
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                Send reset link
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
