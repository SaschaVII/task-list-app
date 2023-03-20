import { useState, useEffect } from 'react';

function useLocalStorageTaskList() {
  const [taskList, setTaskList] = useState([]);

  const [isMounting, setIsMounting] = useState(true);

  useEffect(() => {
    const storedTaskList = localStorage.getItem('taskList');
    if (storedTaskList) {
      try {
        setTaskList(JSON.parse(storedTaskList));
      } catch (e) {
        // If the stored value cannot be parsed, handle it gracefully
        console.warn(`Error parsing task list from local storage: ${e.message}`);
      }
    }
    setIsMounting(false);
  }, []);

  useEffect(() => {
    if (!isMounting) {
      localStorage.setItem('taskList', JSON.stringify(taskList));
    }
  }, [taskList, isMounting]);

  return [taskList, setTaskList];
}

export default useLocalStorageTaskList;
