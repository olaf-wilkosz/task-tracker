import PropTypes from 'prop-types';

const Header = ({ title }) => {
  return (
    <header>
      {/* CSS in JS - inline:
      <h1 style={{ color: 'red', backgroundColor: 'black' }}>{title}</h1> */}
      {/* CSS in JS - with variable:
      <h1 style={headingStyle}>{title}</h1> */}
      <h1>{title}</h1>
    </header>
  );
}

Header.defaultProps = {
  title: 'Task Tracker',
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

// CSS in JS - with variable:
// const headingStyle = {
//   color: 'red',
//   backgroundColor: 'black'
// }

export default Header;