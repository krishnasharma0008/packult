import { useState } from 'react';
import styles from '../styles/components/toast.module.scss';

const Toast = ({ message }) => {

    return (
        <div className={styles.toast}>
            <p>{message}</p>
        </div>
    );
};

export default Toast;