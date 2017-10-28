import { Router } from 'express'
import axios from 'axios'

const routes = Router()
routes.get('/', (req, res) => {
  const {q} = req.query
  axios.get(`https://api.github.com/users/${q}/followers`)
    .then(function (response) {
      res.render('index', {q, data: response.data})
    })
    .catch(function (error) {
      res.render('error', {message: error})
    })
})

export default routes
