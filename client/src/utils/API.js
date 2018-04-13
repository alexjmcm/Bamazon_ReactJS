import axios from 'axios';

export default {

  getProducts: function() {
    return axios.get('/api/products/all')
  },

  updateProducts: function(data) {
    return axios.put('/api/products/update', data);
  }
}