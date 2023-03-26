import "./App.scss";
import { useState } from "react";
import {useHistory, Route} from 'react-router-dom';
import Main from './main';

function App() {
    const [input, setInput] = useState("hello");
    const history = useHistory();
    const a = (x, y) => {
        return console.log(x + y);
    };
    return (
        <div className="App">
        <p className="click" onClick={() => {
        console.log('hello!')
            history.push('/main')
        }
        }>Click!</p>
            <Route exact path="/main" render={() => <Main />} />
        </div>
    );
}

export default App;
