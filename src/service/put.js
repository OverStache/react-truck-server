import axios from "axios";
import { onlinePath, rootPath } from "./config";

const put = (path, root, data) => {
  const promise = new Promise((resolve, reject) => {
    axios.put(`${root ? onlinePath : rootPath}/${path}`, data)
      .then((res) => {
          resolve(res.data)
        }, (error) => {
          reject(error)
        })
  })
  return promise
}

export default put