import axios from "axios";
const baseUrl = "http://localhost:8080"

export const getApi = endPoint =>{
  return axios.get(baseUrl+endPoint)
    .then(response => {return response.data})
    .catch(error => console.log(error.message));
}

export const postAPI = (endPoint,data) => {
  return   axios.post(baseUrl+endPoint,data)
    .then( response => { return  response})
    .catch(error => console.log(error.message));
}

export const deleteApi = (endPoint) => {
  return  axios.delete(baseUrl+endPoint)
    .then(response => {return response.data})
    .catch(error => console.log(error.message));
}