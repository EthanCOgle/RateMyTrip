import PropTypes from "prop-types"

const NavBar = ({ title }) => {
  return (
    <div>
      <h1>
        {title}
        <Button color="light blue" text="Search"/>
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