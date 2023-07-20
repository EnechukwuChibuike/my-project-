import "../styles/Signup.css";

function Signup() {
  return (
    <div className="signup">
      <form>
     
          <h1>Sign Up</h1>
          <label>Full name:</label>
          <input type="text" placeholder="enter your name..." />
          <label>Email:</label>
          <input type="email" placeholder="enter your email..." />
          <label>Password:</label>
          <input type="password" placeholder="enter your password..." />
          <button>Create Account</button>
      </form>
    </div>
  );
}

export default Signup;
