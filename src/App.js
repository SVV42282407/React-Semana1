//import logo from './datas/logo.svg';
import './App.css';
import LoginForm from './components/functional/login-form';
import Header from './components/functional/header';
import { i18nDict } from './datas/i18nDict';
import { userLanguage } from './datas/i18nDict';

function App() {

  const checkEmpty = (str) => {
    if (str == null || str == "") {
      return true
    } else {
      return false
    }
  }

  const loginValidate = () => {
    let username = document.getElementById('userName').value;
    let password = document.getElementById('userPassword').value;

    if ( checkEmpty(username) || checkEmpty(password) ) {
      alert(i18nDict[userLanguage].emptyLoginValues)
    } else {
      console.log(username);
      console.log(password);
      alert(i18nDict[userLanguage].welcomeMessage + " " + username)
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <Header page="login" labels={i18nDict[userLanguage]}/>
      </header>
      <main className="App-main">
        <LoginForm labels={i18nDict[userLanguage]} loginValidate={loginValidate}/>
      </main>
      <footer className="App-footer">

      </footer>
    </div>
  );
}

export default App;
