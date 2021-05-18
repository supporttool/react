
import Home from './Home';
import Loginportal from './Loginportal';
import Searchoptions from './componenets/Searchoptions';
import Specifiedsearch from './componenets/Specifiedsearch';
import Checkapistatus from './componenets/Checkapistatus';
import Apistatusresult from './componenets/Apistatusresult';
import SpecifiedsearchResults from './componenets/SpecifiedSearchResults';
import Contact from './componenets/Contact';
import Getdata from './componenets/Getdata';
import Getfulllogs from './componenets/Getfulllogs'; 
import Menu from './componenets/Menu';
import Error from './componenets/Error';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <main>
        <Switch>
            <Route exact path="/" component={Loginportal} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/searchoptions" component={Searchoptions} />
            <Route exact path="/specifiedsearch" component={Specifiedsearch} />
            <Route exact path="/specifiedsearchResults" component={SpecifiedsearchResults} />
            <Route exact path="/checkapistatus" component={Checkapistatus} />   
            <Route exact path="/apistatusresult" component={Apistatusresult} />   
            <Route exact path="/contact" component={Contact} />   
            <Route exact path="/getdata" component={Getdata} />   
            <Route exact path="/getfulllogs" component={Getfulllogs} />   
            <Route component={Error} />   
        </Switch>
    </main>
  );
}

export default App;
