export type Counter = {
  [key: string]: number;
};
const counters: Counter = {};

export default function (prefix = 'id') {
  if (!counters[prefix]) {
    counters[prefix] = 0;
  }
  counters[prefix] += 1;
  return `${prefix}-${counters[prefix]}`;
}
