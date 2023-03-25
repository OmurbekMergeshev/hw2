import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <ul className="navBar">
      <li>
        <Link to="/">Home</Link>
     </li> 
     <li>
        <Link to="/photo/1">Photo</Link>
     </li> 
    </ul>
  )
}

export default NavBar