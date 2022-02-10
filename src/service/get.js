import axios from "axios";
import { onlinePath, rootPath } from "./config";

const get = (path, root) => {
  const promise = new Promise((resolve, reject) => {
    axios.get(`${root ? onlinePath : rootPath}/${path}`)
      .then((res) => {
        resolve(res.data)
      }, (error) => {
        reject(error)
      })
  })
  return promise
}

export default get