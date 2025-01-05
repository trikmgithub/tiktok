import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import icons from '~/utils/icons';
import Image from '../Image/Image';
import { Link } from 'react-router';
import PropTypes from 'prop-types';

const { PiSealCheckFill } = icons;
const cx = classNames.bind(styles);

function AccountItem({ data }) {
    return (
        <>
            <Link to={`/@${data.nickname}`} className={cx('wrapper')}>
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

AccountItem.propTypes = {
    data: PropTypes.object.isRequired,
};

export default AccountItem;
