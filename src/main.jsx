import react from 'react';
import './main.scss';
import {useHistory} from 'react-router-dom';

const Main = () => {
    const history = useHistory();
    return <div className="container">
        <p>It's Main components.</p>
        <p onClick={()=> {
            history.goBack();
        }
        }>Do you want to back?</p>
    </div>
}

export default Main;