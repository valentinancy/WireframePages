import axios from 'axios';

export default function getApiTokenAuth(username, password) {
  return axios ({
    method: 'post',
    url: 'http://54.169.153.88:8000/apitokenauth/',
    data: {
      username: username,
      password: password
    }
  })
}

export default function setLogin(username, password, token) {
  return axios ({
    method: 'post',
    url: 'http://54.169.153.88:8000/apitokenauth/',
    data: {
      username: username,
      password: password
    },
    headers: {
      Authorization: 'jwt' + token
    }
  })
}





// getApiTokenAuth(username,password) {
//   return axios.get('http://54.169.153.88:8000/apitokenauth/');
// }
//
// getSetLogin(login_id,password) {
//   return axios.get('http://54.169.153.88:8000/setLogin/');
// }

// const promiseATA = getApiTokenAuth('iki','71fd94a0d995244544c153158bbbefc5');
// promiseATA.then((data) => (console.log(data))
