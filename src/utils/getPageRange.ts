// Total = total number of items per page. Could be 10, 20, 50, etc
// Length = maximum number of page numbers you want the function to return at a time
// Min = the minimum number to start the page number from. This value is usually 0 or the starting page index
export const getPagingRange = (
  current: number,
  { min = 1, total = 20, length = 5 } = {}
) => {
  // eslint-disable-next-line no-param-reassign
  if (length > total) length = total;

  let start = current - Math.floor(length / 2);
  start = Math.max(start, min);
  start = Math.min(start, min + total - length);

  return Array.from({ length }, (_, i) => start + i);
};
