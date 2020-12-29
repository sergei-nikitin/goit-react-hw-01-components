import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

export default function Statistics({title, id, label, percentage}) {
    return (
        <section className={styles.statistics}>
        <h2 className={styles.title}>{title}</h2>

  <ul className={styles.statList}>
    <li className={styles.item}>
      <span className={styles.label}>{label} </span>
      <span className={styles.percentage}>{percentage}%</span>
    </li>
  </ul>
</section>
    )
}

Statistics.propTypes = {
    title:PropTypes.string,
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
}