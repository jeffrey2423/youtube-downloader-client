import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Layout from './Layout';
import NotFound from '../pages/NotFound';
import DownLoader from '../pages/DownLoader';

function App() {
  return (
      <BrowserRouter>
      <Layout>
      < Switch >
        <Route exact path="/" component={DownLoader} />
        <Route component={NotFound} />
      </Switch >
      </Layout>
    </BrowserRouter >
  );
}

export default App;
