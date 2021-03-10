import { NavLink } from 'react-router-dom';
const NavBar = () => {
  return (
    <div className="navbar">
      <h1 className="logo">MyQuote</h1>
      <nav>
        <ul>
          <li>
            <NavLink to="/" exact>
              Home
            </NavLink>
            <NavLink to="/create">Create</NavLink>
            <NavLink to="/about">About</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
