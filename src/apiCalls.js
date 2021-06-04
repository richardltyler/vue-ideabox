const apiCalls = {
  getIdeas() {
    return fetch('http://localhost:3001/api/v1/ideas')
      .then(res => res.json())
  }
}

export default apiCalls;
