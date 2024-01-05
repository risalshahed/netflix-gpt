import './App.css'
import Header from './components/Global/Header';
import Home from './components/Home'
import { Provider } from 'react-redux'
import appStore from './utils/appStore';

function App() {

  return (
    <Provider store={appStore}>
      <Header />
      <Home />
    </Provider>
  )
}

export default App