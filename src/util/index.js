const buildFilter = pagination => {
  if (!pagination) return {};
  const {
    sortBy,
    descending,
    page,
    rowsPerPage
  } = pagination;
  const skip = page === 1 ? 0 : (page - 1) * rowsPerPage;
  const filter = {};
  if (skip >= 0) {
    filter.skip = skip;
  }
  if (rowsPerPage && rowsPerPage > 0) {
    filter.limit = rowsPerPage;
  }
  if (sortBy) {
    filter.order = `${sortBy} ${descending ? "DESC" : "ASC"}`;
  }
  return filter;
};
const buildSearchFilter = (prop, query) => ({
  where: {
    [prop]: {
      like: `.*${query}.*`,
      options: "i"
    }
  }
});

const zeroPad = num => (num >= 10 ? num : `0${num}`);
const guessBirthDate = age => {
  const today = new Date().getTime();
  const ageInsec = age * 365 * 24 * 60 * 60 * 1000;
  const birthSec = today - ageInsec;
  return new Date(birthSec);
};
const getAge = birthDate => {
  const sec = new Date().getTime() - new Date(birthDate).getTime();
  return Math.floor(sec / 1000 / 60 / 60 / 24 / 365);
};
export {
  buildSearchFilter,
  buildFilter,
  zeroPad,
  guessBirthDate,
  getAge
};