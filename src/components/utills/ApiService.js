const apiKey = "22768423-65df9381e505940710ceeb6f4"
const perPage = 12

// https://pixabay.com/api/?q=что_искать&page=номер_страницы&key=твой_ключ&image_type=photo&orientation=horizontal&per_page=12

function fetchQuery() {
  const apiUrl = `https://pixabay.com/api/?q=${this.searchQuery}&page=${this.page}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=${perPage}`
  return fetch(apiUrl).then((response) => {
    if (response.ok) {
      return response.json()
    }
    return Promise.reject(new Error(`"${this.searchQuery}" did't found`))
  })
}

const api = {
  searchQuery: "",
  page: 1,
  fetchQuery,
}

export default api