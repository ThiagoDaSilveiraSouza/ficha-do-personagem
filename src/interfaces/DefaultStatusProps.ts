export type DefaultStatusProps<T extends {}> = {
  [key in keyof T]: {
    status: boolean;
  };
};
