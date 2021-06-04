const baseURL = 'http://localhost:3001/api/v1/ideas';

const apiCalls = {
  getIdeas() {
    return fetch(baseURL)
      .then(res => res.json())
  },

  deleteIdea(ID) {
    return fetch(`${baseURL}/${ID}`, {method: "DELETE"})
  },

  addIdea(idea) {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(idea)
    }
    
    return fetch(baseURL, options)
      .then(res => res.json())
  }
}

export default apiCalls;
