export interface responseType<dataType> {
  status: boolean;
  msg: string;
  data?: dataType;
  code?: number;
  errors?: Record<string, string>;
}
