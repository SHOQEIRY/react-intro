import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
    
        <img class="image" src="/assets/gmc.svg"/>

    <div class="form-floating mb-3">
  <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"></input>
  <label for="floatingInput">Email address</label>
</div>
<div class="form-floating">
  <input type="password" class="form-control" id="floatingPassword" placeholder="Password"></input>
  <label for="floatingPassword">Password</label>
  <button type="button" class="btn btn-danger">Sign-in</button>
    
</div>


    </>
  );
}

export default App;
