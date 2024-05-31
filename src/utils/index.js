const showFormattedDate = (date) => {
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  return new Date(date).toLocaleDateString('id-ID', options);
};

const removeDuplicates = (property, array = []) => {
  const uniqueMap = {};
  return array?.filter((obj) => {
    const value = obj[property];
    if (!uniqueMap[value]) {
      uniqueMap[value] = true;
      return true;
    }
    return false;
  });
};

export { showFormattedDate, removeDuplicates };
