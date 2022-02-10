import Delete from './delete';
import get from './get';
import post from './post';
import put from './put';

//get
const getPosts = () => get('posts?_sort=id&_order=desc', false)
const getTrucks = () => get('trucks', false)
const getBrands = () => get('brands', false)
const getTrucksByBrand = (slug) => get(`brands/${slug}`, false)

//post
const postPosts = (data) => post('posts', false, data)

//put
const updatePosts = (data, id) => put(`posts/${id}`, false, data)

//delete
const deletePosts = (id) => Delete(`posts/${id}`, false)

const API = {
  getPosts,
  getTrucks,
  getTrucksByBrand,
  getBrands,
  postPosts,
  updatePosts,
  deletePosts
}

export default API

//jsonplaceholder
// fetch('https://jsonplaceholder.typicode.com/posts')
// .then(response => response.json())
//   .then(json => {
//     this.setState({
//     post:json
//   })
// })