import styled from "./Button.module.css"

const Button = ({ onBtnLoadClick }) => {
  return (
    <button onClick={onBtnLoadClick} type="button" className={styled.button}>
      Load more
    </button>
  )
}

export default Button
