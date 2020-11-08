const toCamel = (str: string) => str.replace(/([-_][a-z])/ig, ($1) => $1.toUpperCase()
  .replace('-', '')
  .replace('_', ''));

const isObject = (obj: any) => obj === Object(obj) && !Array.isArray(obj) && typeof obj !== 'function';

const RecursivelyCamelCaseObject = (obj: any): any => {
  if (isObject(obj)) {
    const n = {};

    Object.keys(obj)
      .forEach((k) => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore
        n[toCamel(k)] = RecursivelyCamelCaseObject(obj[k] as unknown as object);
      });

    return n;
  } if (Array.isArray(obj)) {
    return obj.map((i) => RecursivelyCamelCaseObject(i));
  }

  return obj;
};

export default RecursivelyCamelCaseObject;
