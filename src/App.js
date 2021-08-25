import './App.css';
import Navbar from './Components/NavBar';
import { BrowserRouter as Router, Switch,Route,Redirect } from 'react-router-dom';
import Home from './pages';
import Signup from './pages/signup';
import { CssBaseline, makeStyles } from '@material-ui/core';
const useStyles= makeStyles((theme)=>({
  root:{
    
    backgroundImage:`url(${process.env.PUBLIC_URL+"/assets/back.jpg"})`,
    backgroundSize:'cover',
    backgroundRepeat:'no-repeat',
    backgroundAttachment:'fixed',
    textAlign:'center',
    marginLeft:'auto',
    marginRight:'auto',
  



  },
}));
function App() {
  const classes =useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline/>
     
    
    <Router  >
      <Navbar />
      <Switch 
      >
        <Route path='/' exact component={Home}> <Redirect to="/index" /></Route>
        <Route path='/index' exact component={Home}/>
        <Route path='/signup' exact component={Signup} />

      </Switch>
    </Router>
    </div>
    
  );
}

export default App;
