import React from 'react';
import styles from './Loading.module.css';

import spinner from './loading.gif';

const Loading = () => {
    return (
        <div className={styles.loading}  >
            <img src={spinner} width="60px" alt="Loading..." height="60px" />
        </div>
    );
};

export default Loading;