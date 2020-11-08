const factory = <T>(concreteFactory: Function, nInstances = 1) => {
  const instances: T[] = [];

  for (let i = 0; i < nInstances; i += 1) {
    instances.push(concreteFactory());
  }

  return {
    create: (replace = {}) => instances.map((i) => ({ ...i, ...replace })),
    single: (replace = {}) => ({ ...instances[0], ...replace }),
  };
};

export default factory;
