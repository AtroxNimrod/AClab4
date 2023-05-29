import axios from 'axios';

export default class FinanceService {
  static async getCachBalance(accountId) {
    // const response = await axios.get('https://jsonplaceholder.typicode.com/posts/' + postId );
    // return response

    const response = await axios.post('/user', {
        firstName: 'Fred',
        lastName: 'Flintstone'
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

      return response
  }
}