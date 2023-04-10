const addItemForList = (setMessageState, messages, name, setTask) => {
  if (!name) {
    alert('Task is empty.');
    return;
  }
  setMessageState([{ id: 0, taskName: name }]);
  setMessageState([
    ...messages,
    { id: messages.length, taskName: name, isChecked: false },
  ]);
  setTask('');
};

export default addItemForList;
