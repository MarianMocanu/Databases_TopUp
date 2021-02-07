import { useEffect } from 'react';
import './App.css';

const App = () => {

    fetch('/hello').then(res => console.log(res.text()));


    return (
        <div className="App">
            <h1>Hi, I'm a React App</h1>
        </div>
    );
}

export default App;
