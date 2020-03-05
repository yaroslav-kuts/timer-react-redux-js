/* eslint-disable no-restricted-syntax */
const leadingZero = (n) => (`${n}`.length === 1 ? `0${n}` : `${n}`);

export const getDiffInSeconds = (time) => Math.floor((Date.now() - time) / 1000);

export const formatTime = (values) => {
  const hours = Math.floor(values / 3600);
  const minutes = Math.floor((values % 3600) / 60);
  const seconds = (values % 3600) % 60;
  return [hours, minutes, seconds].map(leadingZero).join(':');
};

export const msecs2time = (msecs) => new Date(msecs).toTimeString().replace(/GMT.*$/, '');

export const aggregateIntervals = (tasks) => {
  const startOfDay = new Date().setHours(0, 0, 0, 0).valueOf() - 86400000;

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
