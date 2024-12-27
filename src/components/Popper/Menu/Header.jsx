import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import icons from '~/utils/icons';

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

export default Header;
