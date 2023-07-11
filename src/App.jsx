
import './App.css';
import Myroute from './Myroute';
// import { legacy_createStore  } from 'redux';
import { Provider } from 'react-redux';
// import cartReducer from './redux/reducer/cartReducer';
import  store  from './Store';

const App=()=> {
  // const store =legacy_createStore(cartReducer)
  return (
    
      <Provider store={store}>
     <Myroute/>
    </Provider>

    
  );
}

export default App;
