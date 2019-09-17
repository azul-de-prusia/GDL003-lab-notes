import React from 'react';
import { Switch, Route} from 'react-router-dom';
import login from './Components/login';
import Notes from './Holi';

const Routes = ()=>{
    return(
        <Switch>
            <Route exact path='/'component={login}/>
            <Route exact path='/'component={Notes}/>
        </Switch>
    )
}
export default  Routes;