import classnames from 'classnames/bind';

import styles from './button.module.scss';

let cx=classnames.bind(styles);

const Button = ({ 
    children,
    type,
    clickHandler
    }) => {
    let buttonClasses = cx({
        btn:true,
        primary: type == 'primary',
        secondary: type == 'secondary'
    })
    return <button 
    className={buttonClasses}
    onClick={clickHandler}>
         {children}
    </button>
}
export default Button;