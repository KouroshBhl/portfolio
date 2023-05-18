import styled from 'styled-components';
import { Menu, Hero, Skills } from './components/index';

function App() {
  return (
    <Container>
      <Menu></Menu>
      <Hero />
      <Skills />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export default App;
