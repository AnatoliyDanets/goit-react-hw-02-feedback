import PropTypes from "prop-types";
import s from "../Notification/Notification.module.css";

export default function Notification({ message }) {
  return (
    <div>
      <p className={s.notice}>{message}</p>
    </div>
  );
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
