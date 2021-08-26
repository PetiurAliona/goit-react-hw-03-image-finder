import styled from "./Searchbar.module.css"

const Searchbar = ({ onSubmit }) => {
  return (
    <header className={styled.Searchbar}>
      <form className={styled.SearchForm}>
        <button type="submit" className={styled.SearchFormButton}>
          <span className={styled.SearchFormButtonLabel}>Search</span>
        </button>

        <input
          className={styled.SearchFormInput}
          type="text"
          autocomplete="off"
          autofocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  )
}

export default Searchbar
