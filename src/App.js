import styled from 'styled-components';
import { Menu } from './components/index';

function App() {
  return (
    <Container>
      <Menu></Menu>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export default App;
