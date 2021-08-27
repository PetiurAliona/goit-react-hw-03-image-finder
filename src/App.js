import React, { Component } from "react"
import { ToastContainer } from "react-toastify"
import ImageGallery from "./components/ImageGallery/ImageGallery"
import Searchbar from "./components/Searchbar/Searchbar"

// import Loader from "react-loader-spinner"

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

        <ToastContainer autoClose={3000} />
      </>
    )
  }
}

export default App
