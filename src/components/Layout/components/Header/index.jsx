import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import images from '~/assets/images';
import icons from '~/utils/icons';
import iconsTiktok from '~/components/Icons';
import TippyHeadless from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import { useState, useEffect } from 'react';
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import { toast } from 'react-toastify';

import 'tippy.js/dist/tippy.css';
import { animateFill } from 'tippy.js';
import 'tippy.js/dist/backdrop.css';
import 'tippy.js/animations/shift-away.css';
import 'tippy.js/dist/svg-arrow.css';

import { MENU_ITEMS } from './Const';
import Image from '~/components/Image';

const {
    IoMdCloseCircle,
    BiLoaderCircle,
    FaSearch,
    MdLogin,
    CiMenuKebab,
    AiOutlineCloudUpload,
    SlPaperPlane,
    BiMessageAltMinus,
    GoPerson,
    CiDollar,
    CiSettings,
    MdLogout,
} = icons;

const { InboxIcon, MessageIcon, SearchIcon, UploadIcon } = iconsTiktok;

const cx = classNames.bind(styles);
const { logo } = images;

function Header() {
    const [searchResult, setSearchResult] = useState([]);
    const [currentUser, setCurrentUser] = useState(false);
    const notify = (content) => {
        switch (content) {
            case 'en': {
                return toast('English is showing');
            }
            case 'vi': {
                return toast('Tiếng Việt sẽ sớm được cập nhật');
            }
            default: {
                return toast(content);
            }
        }
    };

    // handle logic onChange()
    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language': {
                notify(menuItem.code);
                break;
            }
        }

        if (menuItem.response) {
            notify(menuItem.response);
        }

        if (menuItem.logout) {
            setCurrentUser(false);
            notify('Log out');
        }
    };

    const userMenu = [
        {
            icon: <GoPerson />,
            title: 'View profile',
            to: '/@hoaa',
        },
        {
            icon: <CiDollar />,
            title: 'Get coins',
            to: '/coin',
        },
        {
            icon: <CiSettings />,
            title: 'Settings',
            to: '/settings',
        },
        ...MENU_ITEMS,
        {
            icon: <MdLogout />,
            title: 'Log out',
            // to: '/logout',
            to: '/',
            separate: true,
            logout: true,
        },
    ];

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={logo} alt="Logo Tiktok" />
                </div>
                {/*  */}
                <TippyHeadless
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
                </TippyHeadless>

                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            {/* <div>
                                <Tippy
                                    content="Upload video"
                                    placement="bottom"
                                    animateFill={true}
                                    plugins={[animateFill]}
                                    arrow={true}
                                >
                                    <button className={cx('ri-upload')}>
                                        <AiOutlineCloudUpload />
                                    </button>
                                </Tippy>
                                <Tippy
                                    content="Send message"
                                    placement="bottom"
                                    animateFill={true}
                                    plugins={[animateFill]}
                                >
                                    <button className={cx('ri-plane')}>
                                        <SlPaperPlane />
                                    </button>
                                </Tippy>
                                <button className={cx('ri-message')}>
                                    <BiMessageAltMinus />
                                </button>
                            </div> */}
                            <Tippy delay={[0, 50]} content="Upload video" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <UploadIcon />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 50]} content="Message" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 50]} content="Inbox" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <InboxIcon />
                                    <span className={cx('badge')}>12</span>
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button primary icon={<MdLogin />} onClick={() => setCurrentUser(true)}>
                                Login
                            </Button>
                        </>
                    )}

                    {/* ⋮ */}
                    {
                        <Menu items={true ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                            {currentUser ? (
                                <span>
                                    <Image className={cx('user-avatar')} src="vite.svg" alt="user-avatar" />
                                </span>
                            ) : (
                                <button className={cx('ri-menu')}>
                                    <CiMenuKebab />
                                </button>
                            )}
                        </Menu>
                    }
                </div>
            </div>
        </header>
    );
}

export default Header;
