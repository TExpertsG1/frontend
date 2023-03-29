import ReactDOM from 'react-dom/client'

// third party
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

// project imports
import App from './App';
import { BASE_PATH } from './config';
import { store, persister } from './store';
import { ConfigProvider } from './contexts/ConfigContext';

// style + assets
import './assets/scss/style.scss';

// ==============================|| REACT DOM RENDER  ||============================== //

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persister}>
      <ConfigProvider>
        <BrowserRouter basename={BASE_PATH}>
          <App />
        </BrowserRouter>
      </ConfigProvider>
    </PersistGate>
  </Provider>,
);
