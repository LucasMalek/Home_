import React from 'react';
import './style.css';
import Header from './Components/Header';
function Home(){

    return (
   <div>
    <Header />
    <main className = 'main'>
     <div className = 'navbar'>
    navbar
     </div>
     <div className = 'feed'>
    feed
     </div>
    </main>
   </div>
    );

}

export default Home;
