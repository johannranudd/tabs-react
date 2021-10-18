import { StyledMain } from './components/Styled.main';
import Tabs from './components/Tabs';
import { useEffect, useState } from 'react';

const url = 'https://course-api.com/react-tabs-project';

function App() {
  const [list, setList] = useState(url);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const getData = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setList(data);
    } catch {
      setError(true);
    }
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  if (error) {
    return (
      <header className='title'>
        <h1>Error...</h1>
      </header>
    );
  }
  if (loading) {
    return (
      <header className='title'>
        <h1>Loading...</h1>
      </header>
    );
  }
  return (
    <StyledMain>
      <header className='title'>
        <h1>Experience</h1>
        <div className='underline'></div>
      </header>
      <Tabs list={list} />
    </StyledMain>
  );
}

export default App;
