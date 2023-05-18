import styled from 'styled-components';
import { Menu, Hero } from './components/index';

function App() {
  return (
    <Container>
      <Menu></Menu>
      <Hero />
      <h2>Continue...</h2>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export default App;
