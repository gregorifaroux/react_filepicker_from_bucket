import React from 'react';
import './App.css';
import Files from './Files';
import FilePicker from './FilePicker';
import  {Container} from 'reactstrap';
function App() {
  return (
    <div className="App">
     <Container>
      <Files />
      <br />
      </Container>
    </div>
  );
}

export default App;
