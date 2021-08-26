import React, { Component } from "react"
import { ToastContainer } from "react-toastify"
import Searchbar from "./components/Searchbar/Searchbar"

// import Loader from "react-loader-spinner"

class App extends Component {
  state = { searchQuery: "" }

  render() {
    return (
      <>
        <Searchbar />

        <ToastContainer />
      </>
    )
  }
}

export default App
