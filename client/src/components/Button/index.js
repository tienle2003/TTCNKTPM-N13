import classNames from "classnames/bind";
import { Link } from 'react-router-dom'

import styles from './Button.module.css'

const cx = classNames.bind(styles)

export default function Button({
    to,
    href,
    primary = false,
    secondary = false,
    normal = false,
    disabled = false,
    rounded = false,
    small = false,
    large = false,
    children,
    className,
    style,
    onClick = () => { },
    ...passProps
}) {
    let Comp = 'button'
    const props = {
        onClick,
        ...passProps
    }

    if (disabled) {
        // delete props.onClick;
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }
    if (to) {
        Comp = Link
        props.to = to
    } else if (href) {
        Comp = 'a'
        props.href = href
    }

    const classes = cx('wrapper', {
        'bg-colorPrimary rounded-md text-white px-4 py-2': primary,
        'bg-colorSecondary rounded-md text-white px-4 py-2': secondary,
        'text-colorDark text-md': normal,
        'rounded-full': rounded,
        'text-xl': large,
        'text-sm': small,
        [className]: className,
    })

    return (
        <Comp className={classes} {...props} style={style}>
            <span className={cx('')}>{children}</span>
        </Comp>
    )
}