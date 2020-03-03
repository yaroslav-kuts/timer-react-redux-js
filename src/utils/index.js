const leadingZero = n => `${n}`.length === 1 ? `0${n}` : `${n}`;

export const getDiffInSeconds = time => Math.floor((Date.now() - time) / 1000);

export const formatTime = values => {
    let hours = Math.floor(values / 3600);
    let minutes = Math.floor((values % 3600) / 60);
    let seconds = (values % 3600) % 60;
    return [hours, minutes, seconds].map(leadingZero).join(':');
}
