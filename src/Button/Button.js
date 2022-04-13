import styles from './Button.module.scss';

const Button = props => {
    return (
<div>
        <button className={styles.button} onClick={() => props.setTime(true)}>Start</button>
        <button className={styles.button} onClick={() => props.setTime(false)}>Stop</button>
        <button className={styles.button} onClick={() => props.setTime(0)}>Reset</button> 
</div>

    );
};

export default Button;