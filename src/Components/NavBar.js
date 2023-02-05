import PropTypes from "prop-types"
//import Button from "./Button"
import {Link, useMatch, useResolvedPath} from "react-router-dom"
const NavBar = () => {
  return (
    <nav className = "nav">
      <Link to = "/" className = "site_title"> RateMyTrip</Link>
      <ul>
       <CustomLink to = "/search">Search</CustomLink>
       <CustomLink to = "/explore">Explore</CustomLink>
       <CustomLink to ="/Posting">Post</CustomLink>
       <CustomLink to = "/signIn">Sign In</CustomLink>
       <CustomLink to = "/signUp">Sign Up</CustomLink>
      </ul>
    </nav>

    // <div>
    //   <h1>
    //     {title}
    //     <Button text="Search"/>
    //     <Button text="Explore"/>
    //     <Button text="Post"/>
    //     <Button color="grey" text="Sign In"/>
    //     <Button color="grey" text="Sign Out"/>
    //   </h1>
    // </div>
  )
}

function CustomLink({to, children, ...props}) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })
  return (
    <li className={isActive ? "active" : ""}>
      <Link to = {to} {...props}>
        {children}
      </Link>
    </li>
  )
}
   



NavBar.defaultProps = {
  title: "Navigation Bar"
}

NavBar.propTypes = {
  title: PropTypes.string,
}

export default NavBar