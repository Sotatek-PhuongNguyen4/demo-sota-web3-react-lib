import './App.css';
import { Link, Route, Router, Switch } from 'wouter'
import Home from './Home'
import { lazy, Suspense } from 'react'


const LazyComponent1 = lazy(() => new Promise(resolve => {
  setTimeout(() => resolve(import('./Component1')), 2000)
}))
const LazyComponent2 = lazy(() => new Promise(resolve => {
  setTimeout(() => resolve(import('./Component2')), 2000)
}))

function App() {
  return (
    <div className="App">
      <ul>
        <li>
          <Link to="/component1">component1</Link>
        </li>
        <li>
          <Link to="/component2">component2</Link>
        </li>
      </ul>
        <Suspense fallback={<h1>Loading kakkak</h1>}>
          <Router>
            <Switch>
              <Route path="/" component={Home}/>
              <Route path="/component1" component={() => <LazyComponent1 />}/>
              <Route path="/component2" component={() => <LazyComponent2 />}/>
            </Switch>
          </Router>
        </Suspense>
    </div>
  );
}

export default App;
