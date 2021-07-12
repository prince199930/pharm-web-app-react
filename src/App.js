import logo from './logo.svg';
import './App.css';
import Auth from "./components/authentication/Auth"
import { Provider } from 'react-redux';
import Store from './Store/Store';

function App() {
  return (
    <>
    <Provider store={Store}>
      <Auth/>
    </Provider>
    </>
  );
}

export default App;
