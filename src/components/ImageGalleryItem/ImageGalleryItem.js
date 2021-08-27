import styled from "./ImageGalleryItem.module.css"

const ImageGalleryItem = ({ webformatURL, name, onClickImg, id }) => {
  return (
    <li className={styled.ImageGalleryItem} onClick={() => onClickImg(id)}>
      <img src={webformatURL} alt={name} className={styled.ImageGalleryItemImage} />
    </li>
  )
}

export default ImageGalleryItem
