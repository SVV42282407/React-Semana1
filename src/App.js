//import logo from './datas/logo.svg';
import './App.css';
import LoginForm from './components/functional/login-form';

function App() {
  const loginValidate = () => {
    let username = document.getElementById('userName').value;
    let password = document.getElementById('userPassword').value;
    console.log(username);
    console.log(password);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello.<br/>Welcome Back</h1>
      </header>
      <main className="App-main">
        <LoginForm usernameLabel="USERNAME" 
                  passwordLabel="PASSWORD"
                  forgotPasswordLabel="Forgot Password?"
                  forgotPasswordLink="#"
                  loginValidate={loginValidate}
                  loginLabel="LOGIN"
                  createAccountLink="#"
                  createAccountLabel="Create Account"/>
      </main>
      <footer className="App-footer">

      </footer>
    </div>
  );
}

export default App;
