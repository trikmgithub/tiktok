import './GlobalStyles.scss';
import PropTypes from 'prop-types';
function GlobalStyles({ children }) {
    // return React.Children.only(children);
    return children;
}

GlobalStyles.propTypes = {
    children: PropTypes.node.isRequired,
};

export default GlobalStyles;
