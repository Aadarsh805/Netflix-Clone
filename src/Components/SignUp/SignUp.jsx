import {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {auth} from '../../firebase'


const SignUp = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
  
    const signup = (e) => {
      e.preventDefault();
  
      auth.createUserWithEmailAndPassword(email, password)
        .then((auth) => {
          navigate('/movie')
        })
        .catch((e) => alert(e.message))
    }
  return (
    <div className="login">
    <div className="landing__header">
      <img
        src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
        alt=""
        className="landing__logo"
      />
    </div>

    <img
      src="https://assets.nflxext.com/ffe/siteui/vlv3/3a073c5f-0160-4d85-9a42-6f59aa4b64b9/ce862595-09a3-4fbf-b41c-76386c05f759/IN-en-20220718-popsignuptwoweeks-perspective_alpha_website_large.jpg"
      alt=""
      className="landing__background"
    />
    <main className="login-main">
      <div className="form-control">
        <h2>Sign In</h2>
        <form className="form">
          <div className="input__container">
            <input type="text" placeholder="Name" />
            <input value={email} onChange={e => setEmail(e.target.value)} type="text" placeholder="Email or phone number" />
            <input value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder="password"/>
          </div>
          <button onClick={signup} className="submit">Create Account</button>
        </form>
        <div className="remember">
          <div className="remember__left">
            <input type="checkbox" checked />
            <span>Remember me</span>
          </div>
          <span className="remember__right">Need help?</span>
        </div>

        <h3 className="new">
            Already have an account?
          <Link to="/login">Sign In</Link>
        </h3>

        <span className="captcha">
          This page is protected by Google reCAPTCHA to ensure you're not a
          bot. <a href="">Learn more.</a>
        </span>
      </div>
    </main>

    <div className="section-d">
      <div className="footer">
          <h3>
              Questions? Call 000-800-040-1843
          </h3>

          <div className="links__columns">
              <div className="links__column">
                  <a>FAQ</a>
                  <a>Cookie prefrences</a>
              </div>
              <div className="links__column">
                  <a>Help Center</a>
                  <a>corporate Information</a>
              </div>
              <div className="links__column">
                  <a>Terms of Use</a>
              </div>
              <div className="links__column">
                  <a>Privacy</a>
              </div>
          </div>

          <span>Netflix India</span>
      </div>
    </div>
  </div>
  )
}

export default SignUp