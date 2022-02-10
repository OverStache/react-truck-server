import axios from "axios";
import { onlinePath, rootPath } from "./config";

const post = (path, root, data) => {
  const promise = new Promise((resolve, reject) => {
    axios.post(`${root ? onlinePath : rootPath}/${path}`, data)
      .then((res) => {
          resolve(res.data)
        }, (error) => {
          reject(error)
        })
  })
  return promise
}

export default post