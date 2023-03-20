import { useState, useEffect } from 'react';

function useLocalStorageTaskList() {
  const [taskList, setTaskList] = useState([]);
  console.log("🚀 initialised taskList:", taskList)

  const [isMounting, setIsMounting] = useState(true);

  useEffect(() => {
    const storedTaskList = localStorage.getItem('taskList');
    if (storedTaskList) {
      try {
        setTaskList(JSON.parse(storedTaskList));
        console.log("🚀 set taskList:", JSON.parse(storedTaskList));
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
      console.log("🚀 set taskList in localStorage:", JSON.stringify(taskList))
    }
  }, [taskList, isMounting]);

  return [taskList, setTaskList];
}

export default useLocalStorageTaskList;
