import logo from './logo.svg';
import './App.css';
import RouterComponent from './routes/router';
import { Provider } from "react-redux";
import store from "./store/store";
function App() {
  return (
    <Provider store={store}>
    <RouterComponent/>
    </Provider>
  );
}

export default App;
