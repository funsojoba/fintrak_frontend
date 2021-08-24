import './App.css';
import SideBar from './components/sideBar';
import Input from './components/input';
import Box from './components/box';

function App() {
  return (
    <div className="App">
      <SideBar />

      <Box width="500px">
        <Input width="100%" placeholder="search" type="password"/>
      </Box>

    </div>
  );
}

export default App;
