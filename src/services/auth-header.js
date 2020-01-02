/**
 * Przeszukuje bazę w poszukiwaniu obiektu user;
 * jeżeli user jest zalogowany (jwt), zwraca autoryzację
 * w przeciwnym wypadku zwraca null
 */

export default function authHeader() {
    let user = JSON.parse(localStorage.getItem('user'));

  
    if (user && user.accessToken) {
      return { Authorization: 'Bearer ' + user.accessToken };
    } else {
      return {Authorization: 'Bearer ' + user.accessToken};
    }
    //return null;
  }