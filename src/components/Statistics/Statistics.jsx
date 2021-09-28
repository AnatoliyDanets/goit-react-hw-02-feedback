import PropTypes from "prop-types";
import s from "../Statistics/Statistics.module.css";

export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  return (
    <div>
      <ul className={s.static__list}>
        <li className={s.static__item}>
          <p className={s.static__text}>Good: {good}</p>
        </li>
        <li className={s.static__item}>
          <p className={s.static__text}>Neutral: {neutral}</p>
        </li>
        <li className={s.static__item}>
          <p className={s.static__text}>Bad: {bad}</p>
        </li>
        <li className={s.static__item}>
          <p className={s.static__text}> Total: {total}</p>
        </li>
        <li className={s.static__item}>
          <p className={s.static__text}>
            Positive feedback: {positivePercentage}%
          </p>
        </li>
      </ul>
    </div>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
