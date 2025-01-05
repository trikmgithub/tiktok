import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router';
const cx = classNames.bind(styles);
import PropTypes from 'prop-types';

function Button({
    to,
    href,
    onClick,

    disable = false,
    text = false,
    primary = false,
    outline = false,

    small = false,
    large = false,

    rounded = false,

    className = false,
    icon = false,

    children,
    ...passProps
}) {
    let Comp = 'button';

    const classes = cx('wrapper', {
        text,
        primary,
        outline,
        small,
        large,
        disable,
        rounded,
        [className]: className,
    });

    const props = {
        onClick,
        ...passProps,
    };

    // remove event listener
    if (disable) {
        // delete props.onClick; ==> remove event listener onClick()
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    return (
        <Comp className={classes} {...props}>
            {icon && <span className={cx('icon')}>{icon}</span>}
            <span className={cx('title')}>{children}</span>
        </Comp>
    );
}

Button.propTypes = {
    to: PropTypes.string,
    href: PropTypes.string,
    onClick: PropTypes.func,

    disable: PropTypes.bool,
    text: PropTypes.bool,
    primary: PropTypes.bool,
    outline: PropTypes.bool,

    small: PropTypes.bool,
    large: PropTypes.bool,

    rounded: PropTypes.bool,

    className: PropTypes.string,
    icon: PropTypes.node,

    children: PropTypes.node,
};

export default Button;
