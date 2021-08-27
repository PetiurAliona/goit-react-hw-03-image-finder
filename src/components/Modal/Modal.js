import React, { Component } from "react"
import { createPortal } from "react-dom"

const modalRoot = document.querySelector("#modal")

import styled from "./Modal.module.css"

class Modal extends Component {
  state = {}

  componentDidMount() {
    window.addEventListener("keydown", this.closeModalEsc)
    const body = document.querySelector("body")
    body.style.overflow = "hidden"
  }
  componentWillUnmount() {
    window.removeEventListener("keydown", this.closeModalEsc)
    const body = document.querySelector("body")
    body.style.overflow = "auto"
  }

  closeModalEsc = (e) => {
    if (e.code === "Escape") this.props.onClose()
  }

  onOverlayClick = (e) => {
    if (e.target === e.currentTarget) this.props.onClose()
  }

  render() {
    const { largeImageURL, tags } = this.props
    return createPortal(
      <div className={styled.Overlay} onClick={onOverlayClick}>
        <div className={styled.Modal}>
          <img src={largeImageURL} alt={tags} />
        </div>
      </div>,
      modalRoot
    )
  }
}

export default Modal
