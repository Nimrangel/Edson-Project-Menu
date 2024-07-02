import { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [user, setUser] = useState("");

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    // use navigate - 1 to go back since thats the page that you want to unlock
    navigate(-1);
    localStorage.setItem("user", JSON.stringify(user));
    
  };

  return (
    <div className="loginWrapper">
      <div className="formWrapper">
        <form onSubmit={handleSubmit}>
          <div className="inputWrapper">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              placeholder="Please input name"
              value={user}
              onChange={(e) => setUser(e.target.value)}
            />
          </div>

          <div className="inputWrapper">
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              id="email"
              placeholder="Please inpute Email"
             
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
