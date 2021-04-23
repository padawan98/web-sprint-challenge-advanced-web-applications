import {axiosWithAuth} from '../helpers/axiosWithAuth'

const fetchColors = () => {
  return axiosWithAuth()
    .get('/colors')
    .then(res => {
        console.log(res.data)
        return res
    })
    .catch(err => {
        console.log(err)
        return(err)
    })

};

export default fetchColors;