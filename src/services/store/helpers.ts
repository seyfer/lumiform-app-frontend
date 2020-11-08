export const buildStoreOptions = (actionName: string, ...modules: string[]) => `${modules.join('/')}/${actionName}`;
