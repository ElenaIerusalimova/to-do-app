export const mapDataFromServer = (data) => {
  if(!data) return [];

  const newData = data.map((todo) => {
    const result = {
      _id: todo.id,
      title: todo.title,
      isCompleted: todo.completed
    };
    return result 
  })

  return newData;
}