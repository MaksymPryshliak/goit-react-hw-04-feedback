import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => (
  <ul className={css.statistics}>
    <li className={css.statPart}> Good: {good}</li>
    <li className={css.statPart}>Neutral: {neutral}</li>
    <li className={css.statPart}>Bad: {bad}</li>
    <li className={css.statPart}>Total: {total}</li>
    <li className={css.statPart}>Positive feedback: {positivePercentage}%</li>
  </ul>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};