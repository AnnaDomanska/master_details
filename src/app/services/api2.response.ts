export interface Api2Response<T> {
  users: T;
  total: number;
  skip: number;
  limit: number;
}
