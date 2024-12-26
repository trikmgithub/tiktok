import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import images from '~/assets/images';
import icons from '~/utils/icons';

const { IoMdCloseCircle, BiLoaderCircle, FaSearch } = icons;

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="Logo Tiktok" />
                </div>
                <div className={cx('search')}>
                    <input placeholder="Search accounts and videos" spellCheck={false} />
                    <button className={cx('ri-close')}>
                        <IoMdCloseCircle />
                    </button>
                    <span className={cx('ri-loader')}>
                        <BiLoaderCircle />
                    </span>
                    <button className={cx('ri-search')}>
                        <FaSearch />
                    </button>
                </div>
                <div className={cx('actions')}></div>
            </div>
        </header>
    );
}

export default Header;
