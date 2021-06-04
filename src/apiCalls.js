const apiCalls = {
  getIdeas() {
    return fetch('http://localhost:3001/api/v1/ideas')
      .then(res => res.json())
  },

  deleteIdea(ID) {
    return fetch(`http://localhost:3001/api/v1/ideas/${ID}`)
      .then(res => res.json())
  }
}

export default apiCalls;
