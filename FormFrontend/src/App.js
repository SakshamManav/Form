import { useEffect } from 'react';
import Formstate from './components/Context/Formstate';
import Form from './components/Form';
import Navbar from './components/Navbar';

function App() {
  useEffect(()=>{
document.body.style.backgroundColor = "lightgrey";
  },[])
  return (
<Formstate>
<Navbar/>
<Form/>
</Formstate>
  );
}

export default App;
