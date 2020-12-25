import PropTypes from 'prop-types';

export default function Statistics({label, id, percentage}) {
    return (
        <section class="statistics">
  <h2 class="title">Upload stats</h2>

  <ul class="stat-list">
    <li class="item">
      <span class="label">{label}</span>
      <span class="percentage">{percentage}%</span>
    </li>
    <li class="item">
      <span class="label">{label}</span>
      <span class="percentage">{percentage}%</span>
    </li>
    <li class="item">
      <span class="label">{label}</span>
      <span class="percentage">{percentage}%</span>
    </li>
    <li class="item">
      <span class="label">{label}</span>
      <span class="percentage">{percentage}%</span>
    </li>
  </ul>
</section>
    )
}

Statistics.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
}