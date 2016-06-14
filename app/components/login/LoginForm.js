import React from 'react';
import getApiTokenAuth from '../../utils/helpers';
import setLogin from '../../utils/helpers';

class LoginForm extends React.Component {

  handleLogin(val) {
    val.preventDefault();
    const username = this.usernameRef.value;
    const password = this.passwordRef.value;
    this.usernameRef.value = '';
    this.passwordRef.value = '';
    // if (username==password) {
    //   this.props.history.push(`home/${username}`)
    // }
    // else {
    //   alert("username and password doesn't match!")
    // }

    getApiTokenAuth(username,password) //INI MAU GET TOKEN NYA
      .then(function(data){
        const token = data.data.token; //INI TOKEN NYA
        console.log(token) //INI MAU LIAT TOKEN NYA
        setLogin(username,password,token) //KARENA SI TOKEN GA DIKENALI DI LUAR BLOCK STATEMENT, JADINYA SI SETLOGIN GUA TULIS DI SINI KA
        .then(function(data){
            console.log('setLogin',data.statusText) //INI MAU LIAT STATUS TEXT NYA
            if(data.statusText=='OK') { //JADI KALO STATUSNYA OK BARU BISA LOG IN
              console.log(username) //INI MAU MASTIIN KALO USERNAME NYA TETEP SAMPE KE DALEM SINI
              console.log("masuk if") // INI ISENG AJA HEHE
              access = 'ok'; //JADI INI MAU NGISI NILAI ACCESS JADI "OK", POKOKNYA ARTINYA BOLEH LOG IN
            }
            else {
              console.log("masuk else")
              alert("username and password doesn't match!")
            }
        });
      });
      console.log(access)
      if(access=='ok') { // JADI PENGEN NYA NILAI ACCESS YANG ADA DI BARIS 30 TETEP BISA KE BAWA SAMPE SINI
        this.props.history.push(`home/${username}`) // BARIS INI GATAU KENAPA KALO DI TARO BARIS 30 JADI "UNCAUGHT LALALA"
      }                                             // MAKANYA MAU DITARO DI LUAR FUNGSI YG KE DATABASE, SOALNYA KALO DISINI BISA GA "UNCAUGHT LALALA"
      else {                                        // SEMANGAT KADIS WK
        alert('gak match cuy')
      }
  }




  // componentDidMount() {
  //   var tokenVal = "hey";
  //   getApiTokenAuth('iki','71fd94a0d995244544c153158bbbefc5')
  //     .then(function(data){
  //       const token = data.data.token;
  //       console.log("token",token)
  //       tokenVal = "halo"
  //       setLogin('iki','71fd94a0d995244544c153158bbbefc5',token)
  //       .then(function(response){
  //           console.log('setLogin',response)
  //           if(data.statusText=='OK') {
  //           }
  //           else {
  //             alert("username and password doesn't match!")
  //           }
  //       });
  //     });
  // }

  render() {

    return (
      <div className="login-form">
        <div className="login-container bg-white">
          <form method="get">
            <div className="p-l-50 m-l-20 p-r-50 m-r-20 p-t-50 m-t-30 sm-p-l-15 sm-p-r-15 sm-p-t-40">
              <img src="assets/img/logo.png" alt="logo"width="78" height="22"/>
              <p className="p-t-35">Sign into your pages account</p>
                <div className="form-group form-group-default">
                  <label>Login</label>
                  <div className="controls">
                    <input type="text" placeholder="User Name" className="form-control" ref={(ref) => this.usernameRef = ref}/>
                  </div>
                </div>
                <div className="form-group form-group-default">
                  <label>Password</label>
                  <div className="controls">
                    <input type="password" className="form-control" placeholder="Credentials" ref={(ref) => this.passwordRef = ref}/>
                  </div>
                </div>
                <button onClick={(val) => this.handleLogin(val)} type="submit" className="btn btn-primary m-t-10">Sign in</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default LoginForm
