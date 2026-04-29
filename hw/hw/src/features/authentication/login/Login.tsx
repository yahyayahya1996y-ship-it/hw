const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form className="bg-white p-8 rounded-lg shadow-md w-[300px]">
        <h2 className="text-center mb-5 text-xl font-semibold">Login</h2>

        <div className="mb-4">
          <label htmlFor="username" className="block mb-1 text-sm">
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            required
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block mb-1 text-sm">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            required
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        <button
          type="submit"
          className="w-full p-2 bg-green-500 text-white rounded-md hover:bg-green-600"
        >
          Login
        </button>

        <p className="text-center mt-4 text-sm">
          Don't have an account?{" "}
          <a href="#" className="text-blue-500">
            Sign up
          </a>
        </p>
      </form>
    </div>
  );
};

export default Login;