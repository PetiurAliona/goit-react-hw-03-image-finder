import styled from "./Button.module.css"
import PropTypes from "prop-types"

const Button = ({ onBtnLoadClick }) => {
  return (
    <div className={styled.buttonWrapper}>
      <button onClick={onBtnLoadClick} type="button" className={styled.button}>
        Load more
      </button>
    </div>
  )
}
Button.propTypes = {
  onBtnLoadClick: PropTypes.func,
}

export default Button
