import PropTypes from 'prop-types';

export default function Statistics({title, id, label, percentage}) {
    return (
        <section class="statistics">
        <h2 class="title">{title}</h2>

  <ul class="stat-list">
    <li class="item">
      <span class="label">{label} </span>
      <span class="percentage">{percentage}%</span>
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