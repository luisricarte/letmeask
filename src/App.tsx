import { Home } from './pages/Home';
import { NewRoom } from './pages/NewRoom';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' Component={Home}  />
      <Route path='/room/new' Component={NewRoom} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
