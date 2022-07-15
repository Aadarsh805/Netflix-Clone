import './Nav.css'

const Nav = () => {
  return (
    <div className='nav'>
        <img src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" alt="" />

        <div className="signIn__container">
            <p>Unlimited tv shows & movies</p>
            <button className="btn joinBtn">Join now</button>
            <button className="btn signInBtn">Sign in</button>
        </div>
    </div>
  )
}

export default Nav