import "./Nav.css";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav">
      <Link to="/movie">
        <img
          src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
          alt=""
        />
      </Link>

      <div className="signIn__container">
        <p>Unlimited tv shows & movies</p>
        <Link to="/login">
          <button className="btn joinBtn">Join now</button>
        </Link>
        <Link to="/signup">
          <button className="btn signInBtn">Sign in</button>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
