import React, { Component } from "react"

import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem"
import styled from "./ImageGallery.module.css"

import { toast } from "react-toastify"

import api from "../utills/ApiService"
import Button from "../Button/Button"
import LoaderSpinner from "../Loader/Loader"

class ImageGallery extends Component {
  state = {
    arrImg: [],
    loading: "false",
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

    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    })
  }

  saveImages() {
    this.setState({ loading: "true" })

    api
      .fetchQuery()
      .then((res) =>
        this.setState((prevState) => ({
          arrImg: [...prevState.arrImg, ...res.hits],
        }))
      )
      .catch((error) => {
        this.setState({ error })
      })
      .finally(() => this.setState({ loading: false }))
  }

  onLoadMoreClick = () => {
    api.incrementPage()
    this.saveImages()
  }

  onClickImg = (id) => {
    const { arrImg } = this.state
    const img = arrImg.find((e) => e.id === id).largeImageURL
    this.setState({ imgInModal: img })
  }

  render() {
    const { arrImg, loading } = this.state

    return (
      <>
        <ul className={styled.ImageGallery}>
          {arrImg.map(({ webformatURL, tags, id }, index) => (
            <ImageGalleryItem
              webformatURL={webformatURL}
              name={tags}
              key={index}
              id={id}
              onClickImg={this.onClickImg}
            />
          ))}
        </ul>
        {arrImg.length > 1 && !loading && <Button onBtnLoadClick={this.onLoadMoreClick} />}
        {arrImg.length > 1 && loading && <LoaderSpinner />}
      </>
    )
  }
}

export default ImageGallery
