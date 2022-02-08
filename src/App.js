import {BrowserRouter as Router , Route, Switch} from 'react-router-dom'
import {Header} from './components/Header'
import {Footer} from './components/Footer'
// import {Preloader} from './components/Preloader'
import {Home} from './pages/Home'
import {About} from './pages/About'
import {Contact} from './pages/Contact'
import { NotFound } from './pages/NotGound'
import { Category } from './pages/Category'
import { Recipe } from './pages/Recipe'





function App() {
  return <>
      <Router >
    <Header />
      <main className='container content'> 
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/About' component={About} />
          <Route path='/Contacts' component={Contact} />
          <Route path='/Category/:name' component={Category} />
          <Route path='/meal/:id' component={Recipe} />
          <Route component={NotFound} />
        </Switch>
      </main>
    <Footer />
      </Router>
  
  </> 
}

export default App;
