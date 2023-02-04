import PropTypes from "prop-types"
import Button from "./Button"

const NavBar = ({ title }) => {
  return (
    <div>
      <h1>
        {title}
        <Button text="Search"/>
        <Button text="Explore"/>
        <Button color="grey" text="Sign In"/>
        <Button color="grey" text="Sign Out"/>
      </h1>
    </div>
  )
}

NavBar.defaultProps = {
  title: "Navigation Bar"
}

NavBar.propTypes = {
  title: PropTypes.string,
}

export default NavBar