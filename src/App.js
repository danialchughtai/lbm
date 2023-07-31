import './App.css';
import Main from './pages/Main';
import AddLocation from './pages/AddLocation';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/main' element={<Main />} />
          <Route path='/addlocation' element={<AddLocation />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
