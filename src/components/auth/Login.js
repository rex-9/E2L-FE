import { Link } from 'react-router-dom';

const Login = () => (
  <>
    <div className="flex justify-center h-screen pt-12 text-white bg-dark">
      <div className="flex flex-col items-center">
        <div className="my-8 header">Log In</div>
        <form>
          <input className="input" type="text" placeholder="Email or Username" />
          {' '}
          <br />
          <input className="input" type="password" placeholder="Password" />
          {' '}
          <br />
          <input type="checkbox" className="checkbox" />
          <span>Remember me</span>
          {' '}
          <br />
          <div className="flex justify-center w-full my-2"><button type="button" className="btn hover:shadow-gray-600">Log In</button></div>
        </form>
        <div className="flex items-center justify-center">
          <Link to="/register" className="link">Register</Link>
          <div className="vertical-line" />
          <Link to="/forgot-password" className="link">Forgot your password</Link>
        </div>
      </div>
    </div>
  </>
);

export default Login;
