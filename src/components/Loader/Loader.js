import Loader from "react-loader-spinner"
import styled from "./Loader.module.css"

const LoaderSpinner = () => {
  return (
    <div className={styled.loaderWrapper}>
      <Loader type="Circles" color="#3f51b5" height={80} width={80} />
    </div>
  )
}

export default LoaderSpinner
