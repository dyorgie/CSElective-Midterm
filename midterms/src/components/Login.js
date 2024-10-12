import "./Login.css";
import { useState } from "react";
import Body from './Body';


export default function Login() {

    
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [LoggedIn, setLoggedIn] = useState(false); 
  
    const submit = () => {
        let users = [
            { username: 'john', password: '123' },
            { username: 'mary', password: '456' }
        ];
        
        let validUsers = users.find((x) => (x.username === username && x.password === password));
        if (validUsers) {
            setLoggedIn(true); 
        }
        else {
            alert('Login Failed, try again.');
        }
    };
  
    if (LoggedIn) { 
        return (
            <>
            <Body></Body>
            </>
        );
    }
    

  return (
    <>
      <div className="container">
        <div className="form-container">
          <form>
            <h1 className="header">Login</h1>
            <div className="login">
              <input type="text" placeholder="Username" required value={username} onChange={(e) => setUsername(e.target.value)}></input>
            </div>
            <div className="password">
              <input type="password" placeholder="Password" required value={password} onChange={(e) => setPassword(e.target.value)}></input>
            </div>
            <button type="submit" onClick={submit}>Login</button>
          </form>
        </div>
      </div>
    </>
  );
}
