import React, { Component } from "react"

import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem"
import styled from "./ImageGallery.module.css"

import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

import PropTypes from "prop-types"

import api from "../utills/ApiService"
import Button from "../Button/Button"
import LoaderSpinner from "../Loader/Loader"

class ImageGallery extends Component {
  state = {
    arrImg: [],
    loading: false,
  }

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevProps.searchQuery
    const nextQuery = this.props.searchQuery

    if (prevQuery !== nextQuery) {
      this.setState({ arrImg: [] })
      api.resetPage()
      api.searchQuery = nextQuery
      this.saveImages()
    }

    if (api.page > 1) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      })
    }
  }

  saveImages() {
    this.setState({ loading: true })
    const notifyError = () => toast.error("Images wasn`t found")

    api
      .fetchQuery()
      .then((res) => {
        if (!res.hits.length) notifyError()
        this.setState((prevState) => ({
          arrImg: [...prevState.arrImg, ...res.hits],
        }))
      })

      .catch((error) => console.log(error))
      .finally(() => this.setState({ loading: false }))
  }

  onLoadMoreClick = () => {
    api.incrementPage()
    this.saveImages()
  }

  render() {
    const { arrImg, loading } = this.state
    return (
      <>
        <ul className={styled.ImageGallery}>
          {arrImg.map(({ webformatURL, tags, largeImageURL }, index) => (
            <ImageGalleryItem webformatURL={webformatURL} name={tags} key={index} largeImageURL={largeImageURL} />
          ))}
        </ul>
        {arrImg.length > 1 && !loading && <Button onBtnLoadClick={this.onLoadMoreClick} />}
        {loading && <LoaderSpinner />}
      </>
    )
  }
}

ImageGallery.propTypes = {
  searchQuery: PropTypes.string,
}

export default ImageGallery
