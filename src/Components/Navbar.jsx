import 'bootstrap/dist/css/bootstrap.min.css';
import user from '../Icons/user.png';
import logo from "../Icons/logo.svg";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand d-flex align-items-center" href="#">
          <img src={logo} height="30" className="me-2" />
          <span className="text-white font-monospace">Streamify</span>
        </a>
        <div className="ms-auto">
          <img src={user} height="30" className="rounded-circle" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
