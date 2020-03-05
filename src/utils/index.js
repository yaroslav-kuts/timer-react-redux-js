/* eslint-disable no-restricted-syntax */
import { v4 } from 'uuid';

const leadingZero = (n) => (`${n}`.length === 1 ? `0${n}` : `${n}`);

const startOfCurrentDay = () => new Date().setHours(0, 0, 0, 0).valueOf();

export const getDiffInSeconds = (time) => Math.floor((Date.now() - time) / 1000);

export const formatTime = (values) => {
  const hours = Math.floor(values / 3600);
  const minutes = Math.floor((values % 3600) / 60);
  const seconds = (values % 3600) % 60;
  return [hours, minutes, seconds].map(leadingZero).join(':');
};

export const msecs2time = (msecs) => new Date(msecs).toTimeString().replace(/GMT.*$/, '');

export const aggregateIntervals = (tasks) => {
  const startOfDay = new Date().setHours(0, 0, 0, 0).valueOf();

  const taskIntervals = tasks.reduce((arr, { startTime, endTime }) => [
    ...arr,
    [(startTime - startOfDay) / 60000, (endTime - startOfDay) / 60000]],
  []);

  const durations = [];

  const intervals = [...Array(24)].map((v, i) => ([i * 60, i * 60 + 60]));

  for (const [is, ie] of intervals) {
    let duration = 0;

    const startedInInterval = taskIntervals.reduce((arr, [s, e], i) => (
      s >= is && s < ie ? [...arr, [s, e, i]] : arr
    ), []);

    if (startedInInterval.length > 0) {
      for (const [s, e, i] of startedInInterval) {
        if (e < ie) {
          duration += e - s;
        } else {
          duration += ie - s;
          taskIntervals[i] = [ie, e];
        }
      }
    }

    durations.push(duration);
  }

  return [...Array(24)].map((v, i) => ({
    name: `${i + 1}`,
    Minutes: durations[i],
  }));
};

const generateDuration = () => {
  const minutes = Math.floor(Math.random() * (91 - 10) + 10);
  return minutes * 60 * 1000;
};

const generatePause = () => Math.floor(Math.random() * (16 - 1) + 1) * 60 * 1000;

export const generateTasks = () => {
  const tasksNumber = Math.floor(Math.random() * (16 - 10) + 10);

  let startTime = Math.floor(Math.random() * (540 - 360) + 360) * 60 * 1000 + startOfCurrentDay();

  const tasks = [];

  for (let i = 0; i < tasksNumber; i += 1) {
    startTime += generatePause();
    const endTime = startTime + generateDuration();

    tasks.push({
      id: v4(),
      title: `task#${i + 1}`,
      startTime,
      endTime,
    });

    startTime = endTime;
  }

  return tasks;
};
