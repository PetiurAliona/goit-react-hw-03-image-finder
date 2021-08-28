import React, { Component } from "react"

import PropTypes from "prop-types"

import styled from "./ImageGalleryItem.module.css"
import Modal from "../Modal/Modal"

class ImageGalleryItem extends Component {
  state = { showModal: false }

  toggleModal = () => {
    this.setState((prevState) => ({
      showModal: !prevState.showModal,
    }))
  }

  render() {
    const { webformatURL, largeImageURL, name } = this.props

    return (
      <li className={styled.ImageGalleryItem}>
        <img src={webformatURL} alt={name} className={styled.ImageGalleryItemImage} onClick={this.toggleModal} />
        {this.state.showModal && <Modal onClose={this.toggleModal} largeImageURL={largeImageURL} alt={name} />}
      </li>
    )
  }
}

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string,
  largeImageURL: PropTypes.string,
  name: PropTypes.string,
}

export default ImageGalleryItem
