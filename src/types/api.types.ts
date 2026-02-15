export interface ApiErrorResponse {
  success: boolean
  message: string
}

export interface ApiError {
  response?: {
    data?: ApiErrorResponse
  }
}