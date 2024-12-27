import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import icons from '~/utils/icons';

const { PiSealCheckFill } = icons;
const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <>
            <div className={cx('wrapper')}>
                <span className={cx('avatar')}>
                    <img src="vite.svg" alt="Username" />
                </span>
                <div className={cx('info')}>
                    <h4 className={cx('name')}>
                        <span>Kieu Minh Tri</span>
                        <span className={cx('ri-check')}>
                            <PiSealCheckFill />
                        </span>
                    </h4>
                    <span className={cx('username')}>trikm</span>
                </div>
            </div>
        </>
    );
}

export default AccountItem;
