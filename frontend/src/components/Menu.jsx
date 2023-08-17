import {NavLink} from "react-router-dom";


const Menu = () => {
    return (
        <div>   
 <nav className="navbar navbar-expand-lg bg-body-tertiary mb-5">
  <div className="container">
    <NavLink className="navbar-brand" to={"/"}>Frontend</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link" to={"/"}>Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to={"/create"}>Create</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
        </div>
    );
};

export default Menu;