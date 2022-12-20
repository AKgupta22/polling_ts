import axios from "axios";

const FetchApi = async (query:string) => axios.get(`https://etechpolltesting.onrender.com/${query}`)
  .then(response => response)
  .catch(error => error)

export default FetchApi