import classNames from "classnames/bind";
import { Link } from 'react-router-dom'

import styles from './Button.module.css'

const cx = classNames.bind(styles)

export default function Button({
    to,
    href,
    primary = false,
    secondary = false,
    onClick = false,
    disabled = false,
    rounded = false,
    small = false,
    large = false,
    children,
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
    }else if(href){
        Comp = 'a'
        props.href = href
    }

    const classes = cx({
        primary: '',
        secondary: '',
        rounded,
        large,
        small
    })

    return (
        <Comp className={classes} {...props}>
            <div className={cx('')}>{children}</div>
        </Comp>
    )
}