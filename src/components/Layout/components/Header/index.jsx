import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import images from '~/assets/images';
import icons from '~/utils/icons';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapped } from '~/components/Popper';
import { useState, useEffect } from 'react';
import AccountItem from '~/components/AccountItem';

const { IoMdCloseCircle, BiLoaderCircle, FaSearch } = icons;

const cx = classNames.bind(styles);
const logo = images.logo;

function Header() {
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([1, 2, 3]);
        }, 0);
    }, []);

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={logo} alt="Logo Tiktok" />
                </div>
                <Tippy
                    interactive
                    visible={searchResult.length > 0}
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PopperWrapped>
                                <h4 className={cx('search-title')}>Accounts</h4>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </PopperWrapped>
                        </div>
                    )}
                >
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
                </Tippy>
                <div className={cx('actions')}></div>
            </div>
        </header>
    );
}

export default Header;
