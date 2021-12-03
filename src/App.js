import Navbar from './component/navbar';
import Addcategory from './component/newCategory';
function App() {
  const xyz = () => {
    document.addEventListener('onclick', function () {
      '.dropdown-submenu a.test'.on('click', function (e) {
        this.next('ul').toggle();
        e.stopPropagation();
        e.preventDefault();
      });
    });
  };
  xyz();

  return (
    <div className="App">
      <Navbar />
      <Addcategory />
    </div>
  );
}

export default App;
