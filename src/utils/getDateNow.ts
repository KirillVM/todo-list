const getDateNow = (): string => {
  const dateNow: Date = new Date();
  const options: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  };
  return dateNow.toLocaleDateString('ru-RU', options);
};

export default getDateNow;
