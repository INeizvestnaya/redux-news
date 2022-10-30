const representDate = (time: number) => new Date(time * 1000).toDateString();

export default representDate;
