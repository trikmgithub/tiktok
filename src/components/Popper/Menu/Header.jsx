import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import icons from '~/utils/icons';
import PropTypes from 'prop-types';
const cx = classNames.bind(styles);

const { IoMdArrowRoundBack } = icons;

function Header({ title, onBack }) {
    return (
        <header className={cx('header')}>
            <button className={cx('ri-arrow-back')} onClick={onBack}>
                <IoMdArrowRoundBack />
            </button>
            <h4 className={cx('header-title')}>{title}</h4>
        </header>
    );
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
    onBack: PropTypes.func.isRequired,
};

export default Header;
