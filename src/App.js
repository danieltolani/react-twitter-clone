import LeftSideBar from './components/left-sidebar'
import './styles/App.css';
import BodyContent from './components/feed-content';

function App() {
  return (
    <div className="App">
        <LeftSideBar />
        <BodyContent />
    </div>
  );
}

export default App;
