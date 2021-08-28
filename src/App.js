import React, { Component } from "react"
import { ToastContainer } from "react-toastify"
import ImageGallery from "./components/ImageGallery/ImageGallery"
import Searchbar from "./components/Searchbar/Searchbar"

class App extends Component {
  state = { searchQuery: "" }

  onNewQuery = ({ searchQuery }) => {
    this.setState({ searchQuery })
  }

  render() {
    const { searchQuery } = this.state
    return (
      <>
        <Searchbar onSubmit={this.onNewQuery} />
        <ImageGallery searchQuery={searchQuery} />
        <ToastContainer autoClose={2000} />
      </>
    )
  }
}

export default App
