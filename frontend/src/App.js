import styled from 'styled-components';
import React, {useState} from 'react';
import './App.css';
import bg from './img/bg.jpg';
import { MainLayout } from './styles/Layout';
import Orb from './Components/Orb/Orb';
import Navigation from './Components/Navigation/Navigation';
function App() {
  const[active, setActive] = React.useState(1)
  return (
    <AppStyled bg ={bg} className="App">
      <Orb />
      <main>
        
      </main>
     <MainLayout>
     <Navigation active={active} setActive={setActive} />


     </MainLayout>
    </AppStyled>
  );
}

const AppStyled = styled.div`
  height: 100vh;
  background-image: url(${props => props.bg});
  background-size: cover;
  position:relative;
`;

export default App;
