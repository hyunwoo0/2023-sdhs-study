import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Main from './main';
import List from './list';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='list' element={<List />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
