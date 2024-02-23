declare type Paginated<T> = {
  nextPage: number;
  page: number;
  data: T;
};
