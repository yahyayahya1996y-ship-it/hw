import "./login.scss";
const Login = () => {
    return (
        <div className="login-container">
        <form action="#">
            <h2>Login</h2>
            <div className="input-group">
                <label htmlFor="username">Username</label>
                <input type="text" id="username" name="username" required />
            </div>
            <div className="input-group">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" required />
            </div>
            <button type="submit" className="login-btn">Login</button>
            <p className="signup-link">Don't have an account? <a href="#">Sign up</a></p>
        </form>
    </div>
    );
};

export default Login;