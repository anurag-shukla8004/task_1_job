import Navbar from './component/navbar';
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
    </div>
  );
}

export default App;
