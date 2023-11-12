import { BrowserRouter } from 'react-router-dom';
import Home from './screens/Home';
import { Routes, Route } from 'react-router';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/list' element={<Home />} />
        <Route path='/todo' element={<Home />} />
        <Route path='/plan' element={<Home />} />
        <Route path='/city' element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
