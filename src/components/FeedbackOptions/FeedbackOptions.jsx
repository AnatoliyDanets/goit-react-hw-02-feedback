import React from 'react';
import s from '../FeedbackOptions/FeedbackOptions.module.css';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul className={s.btn__list}>
      {Object.keys(options).map(option => {
        return (
          <li className={s.btn__item} key={option}>
            <button
              className={s.btn__feedback}
              type="button"
              onClick={onLeaveFeedback}
            >
              {option}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
