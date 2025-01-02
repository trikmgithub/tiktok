import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import icons from '~/utils/icons';
import Image from '../Image';
import { Link } from 'react-router';

const { PiSealCheckFill } = icons;
const cx = classNames.bind(styles);

function AccountItem({ data }) {
    return (
        <>
            <Link to={`/@${encodeURIComponent(data.nickname)}`} className={cx('wrapper')}>
                <span className={cx('avatar')}>
                    <Image className={cx('avatar')} src={data.avatar} alt={data.full_name} />
                </span>
                <div className={cx('info')}>
                    <h4 className={cx('name')}>
                        <span>{data.full_name}</span>
                        <span className={cx('ri-check')}>{data.tick && <PiSealCheckFill />}</span>
                    </h4>
                    <span className={cx('username')}>{data.nickname}</span>
                </div>
            </Link>
        </>
    );
}

export default AccountItem;
