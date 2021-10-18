import { StyledMain } from './components/Styled.main';
import Tabs from './components/Tabs';
import { FaAngleDoubleRight } from 'react-icons/fa';

const url = 'https://course-api.com/react-tabs-project';

function App() {
  return (
    <StyledMain>
      <header className='title'>
        <h1>Experience</h1>
        <div className='underline'></div>
      </header>
      <Tabs />
    </StyledMain>
  );
}

export default App;
