import axios from "axios";
import { onlinePath, rootPath } from "./config";

const Delete = (path, root) => {
  const promise = new Promise((resolve, reject) => {
    axios.delete(`${root ? onlinePath : rootPath}/${path}`)
      .then((res) => {
        resolve(res.data)
      }, (error) => {
        reject(error)
      })
  })
  return promise
}

export default Delete