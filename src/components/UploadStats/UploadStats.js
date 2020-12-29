import PropTypes from 'prop-types';
import styles from './UploadStats.module.css';

export default function UploadStats({ title, children }) {
    return <div className={styles.uploadStatsContainer}>
        {title && <h2 className={styles.titleStatsContainer}>{title}</h2>}
        <div className={styles.statsUpload}>
            {children}
        </div>
    </div>;
}

UploadStats.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node,
    }
        