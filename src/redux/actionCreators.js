export const start = () => ({ type: 'START' });

export const stop = (title) => ({ type: 'STOP', title });

export const deleteTask = (id) => ({ type: 'DELETE', id });

export const generateTasks = () => ({ type: 'GENERATE' });
