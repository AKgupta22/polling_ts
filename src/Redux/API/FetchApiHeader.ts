import axios from "axios";

const FetchApiHeader = async (query:string, token:string) => {
  const response = axios.get(`https://etechpolltesting.onrender.com/${query}`, {
    headers: {
      "access_token": token
    }
  }).then(response => response)
    .catch(error => error)
  return response
}

export default FetchApiHeader
