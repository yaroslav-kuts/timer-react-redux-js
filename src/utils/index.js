const leadingZero = (n) => (`${n}`.length === 1 ? `0${n}` : `${n}`);

export const getDiffInSeconds = (time) => Math.floor((Date.now() - time) / 1000);

export const formatTime = (values) => {
  const hours = Math.floor(values / 3600);
  const minutes = Math.floor((values % 3600) / 60);
  const seconds = (values % 3600) % 60;
  return [hours, minutes, seconds].map(leadingZero).join(':');
};
