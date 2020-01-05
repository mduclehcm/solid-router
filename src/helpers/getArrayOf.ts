export default function getArrayOf<T>(array: T | T[]): T[] {
  if (Array.isArray(array)) {
    return array;
  }
  if (!!array) {
    return [array];
  }
  return [];
}
