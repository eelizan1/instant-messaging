import React from "react";

function Login() {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Bizz Chat</span>
        <span className="title">Login</span>
        <form>
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <button>Sign in</button>
          {/* {err && <span>Something went wrong</span>} */}
        </form>
        <p>You don't have an account? Register</p>
      </div>
    </div>
  );
}

export default Login;
