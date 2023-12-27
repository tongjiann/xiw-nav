interface ApiResponse<T, E> {
  // 业务返回码
  code: number
  // 业务返回信息
  message: string
  // 业务返回额外信息
  extra: E | null
  // 业务数据
  data: T
}

interface ListExtra<T> {
  page: number,
  pageSize: number,
  totalCount: string,
  totalPage: number,
  pageSum?: Record<keyof T, number> | null,
  totalSum?: Record<keyof T, number> | null,
}

interface ApiConfig {
  baseUrl: string
  apiPrefix: string
  // 这里不能定义成timeout，因为这个名称和useFetch自己的参数冲突
  // 冲突会导致参数判断错误
  // https://github.com/vueuse/vueuse/blob/99922ec5356940a4d13b79dc3e892971dda989bf/packages/core/useFetch/index.ts#L311
  timeLimit: number
  tokenSupport: boolean
  tokenKey: string
  rememberMeSupport: boolean
  rememberMeKey: string
  defaultErrorHandle: boolean
  defaultFailedHandle: boolean
  defaultSuccessHandle: boolean
  throwErrorOnBusinessFailed: boolean
  debug: boolean
}

// 通用API处理承载
interface RequestBusPayLoad<T, E> {
  // 业务是否成功
  business: boolean
  // 服务是否成功
  server: boolean
  // 网络是否成功
  network: boolean
  // http状态码
  status?: number
  // http状态信息
  statusText?: string
  // 请求上下文
  ctx: {
    data?: ApiResponse<T, E> | null
    response?: Response
    error?: Error
  },
  options: ApiOptionsWithDefault,
}

interface FetchCtx<T, E> {
  response: Response | null
  data: ApiResponse<T, E> | null
  error?: Error
}

type ApiOptions = Omit<RequestInit, 'headers'> & {
  headers: Record<string, string>
  responseType?: 'json' | 'text' | 'blob' | 'arrayBuffer' | 'formData'
} & ApiConfig & HandleOptions

type ApiOptionsWithDefault = ApiOptions & ApiConfig & Required<Pick<HandleOptions, 'isSuccess'>>


// API处理配置选项
interface HandleOptions {
  onBefore?: (ctx: import("@vueuse/core").BeforeFetchContext) => Promise<void>
  isSuccess?: <T, E>(ctx: {
    data?: ApiResponse<T, E> | null
    response?: Response
    error?: Error
  }, options: ApiOptions) => boolean
  handleSuccess?: (ctx: {
    data?: ApiResponse<unknown, unknown> | null
    response?: Response
    error?: Error
  }, options: ApiOptions) => void
  handleFailed?: (ctx: {
    data?: ApiResponse<unknown, unknown> | null
    response?: Response
    error?: Error
  }, options: ApiOptions) => void
  handleError?: (ctx: {
    data?: ApiResponse<unknown, unknown> | null
    response?: Response
    error?: Error
  }, options: ApiOptions) => void
}
