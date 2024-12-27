import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import images from '~/assets/images';
import icons from '~/utils/icons';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import { useState, useEffect } from 'react';
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';

const { IoMdCloseCircle, BiLoaderCircle, FaSearch, MdLogin, CiMenuKebab, MdLanguage, FaRegQuestionCircle, CgKeyboard } =
    icons;

const cx = classNames.bind(styles);
const logo = images.logo;

const MENU_ITEMS = [
    {
        icon: <MdLanguage />,
        title: 'English',
    },
    {
        icon: <FaRegQuestionCircle />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <CgKeyboard />,
        title: 'Keyboard shortcuts',
    },
];

function Header() {
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 0);
    }, []);

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={logo} alt="Logo Tiktok" />
                </div>
                {/*  */}
                <Tippy
                    interactive
                    visible={searchResult.length > 0}
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <h4 className={cx('search-title')}>Accounts</h4>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </PopperWrapper>
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
                <div className={cx('actions')}>
                    <Button text>Upload</Button>
                    <Button primary icon={<MdLogin />}>
                        Login
                    </Button>
                    {/* ⋮ */}
                    <Menu items={MENU_ITEMS}>
                        <button className={cx('ri-menu')}>
                            <CiMenuKebab />
                        </button>
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
