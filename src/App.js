import {Routes, Route} from 'react-router-dom'
import About from './About';
import Article from './pages/Article';
import Articles from './pages/Articles';
import Layout from './Layout';
import Home from './Home';
import Profile from './pages/Profile'

function App() {
  return (
    <Routes>
      <Route path = "/" element = {<Layout />}> 
        <Route index element = {<Home />} />
        <Route path = "/about" element = {<About />} />
        <Route path = "/profiles/:username" element = {<Profile />} />
      </Route>
      <Route path = "/" element = {<Home />} />
      <Route path = "/about" element = {<About />} />
      <Route path = "/profiles/:username" element = {<Profile />} />
      <Route path = "/articles" element = {<Articles />}>
        <Route path = ":id" element = {<Article />} />
      </Route>
    </Routes>
  );
}

export default App;
