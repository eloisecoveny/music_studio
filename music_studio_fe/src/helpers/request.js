class React {

  get(url){
    return fetch(url)
    .then(res => res.json())
  }

  delete(url){
    return fetch(url, {
      method: "DELETE",
      headers: {"Content-Type": "application/json" }
    })
  }

  post(url){
    return fetch(url, {
      method: "POST",
      headers: {"Content-Type": "application/json"}
    })
  }
}

export default Request;
