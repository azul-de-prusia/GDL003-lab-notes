import React from 'react';
import { Switch, Route} from 'react-router-dom';
import login from './Components/login';
import Notes from './Components/notes';

const Routes = ()=>{
    return(
        <Switch>
            <Route exact path='/login'component={login}/>
            <Route exact path='/notes'component={Notes}/>
        </Switch>
    )
}
export default  Routes;