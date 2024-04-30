import React from 'react';
import Modal from './components/Modal';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
function App() {
  return (
    <>
      <Home />
      <Modal />
      <Sidebar />
    </>
  );
}

export default App;



/* things to know 
Why we using useGlobalContext ?
 for opening and closing sidebar and modal 
-> app.js -- gigantic crystal(more functionality)
-> prop drilling(app-home-sidebar)

*/
