import Navbar from './component/navbar';
import Addcategory from './component/newCategory';
import { Provider } from 'react-redux';
import { store } from './store';
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Navbar />
        <Addcategory />
      </div>
    </Provider>
  );
}

export default App;
