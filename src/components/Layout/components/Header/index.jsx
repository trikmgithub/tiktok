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
import { ToastContainer, toast } from 'react-toastify';

const { IoMdCloseCircle, BiLoaderCircle, FaSearch, MdLogin, CiMenuKebab, MdLanguage, FaRegQuestionCircle, CgKeyboard } =
    icons;

const cx = classNames.bind(styles);
const logo = images.logo;

const MENU_ITEMS = [
    {
        icon: <MdLanguage />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
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
    const notify = (content) => {
        switch (content) {
            case 'en': {
                return toast('English is showing');
            }
            case 'vi': {
                return toast('Tiếng Việt sẽ sớm được cập nhật');
            }
        }
    };

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 0);
    }, []);

    // handle logic onChange()
    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language': {
                notify(menuItem.code);
                break;
            }
        }
    };

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
                    <Menu items={MENU_ITEMS} onChange={handleMenuChange}>
                        <button className={cx('ri-menu')}>
                            <CiMenuKebab />
                        </button>
                    </Menu>
                </div>
            </div>
            <ToastContainer autoClose={1500} />;
        </header>
    );
}

export default Header;
