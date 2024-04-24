import styled from "styled-components";
import bg from './img/bg.png';
import { MainLayout } from "./styles/layouts";

function App() {
  return (
    <AppStyled bg={bg} className="App">
        <main>
          <MainLayout>
          
          </MainLayout>
        </main>
    </AppStyled>
  );
}

const AppStyled = styled.div`
  height: 100vh;
  background-image: url(${props => props.bg});
  position: relative;
`;

export default App;
