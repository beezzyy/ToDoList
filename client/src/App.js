import { useEffect, useState } from 'react';
import ListHeader from './components/ListHeader';
import ListItem from './components/ListItem';

function App() {
  const userEmail = 'adir@test.com';
  const [tasks, setTasks] = useState(null);

  const getData = async () => {
    try {
      const response = await fetch(`http://localhost:8000/todos/${userEmail}`);
      const data = await response.json();
      setTasks(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  //Sort by Date
  const sortedTasks = tasks?.sort((a, b) => {
    return new Date(a.date) - new Date(b.date);
  });

  return (
    <div className="app">
      <ListHeader listName={'📝To-Do List'} getData={getData} />
      {sortedTasks?.map((task) => (
        <ListItem key={task.id} task={task} getData={getData} />
      ))}
    </div>
  );
}

export default App;
