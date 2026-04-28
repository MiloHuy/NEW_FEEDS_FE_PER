import axios from 'axios'
import qs from 'qs'
import { deleteTokenFromCookie, getAccessTokenFromCookie, setTokenInCookie } from '../utils/app.utils'
import { SSOCOOKIES } from '../constants/cookies.const'

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL_API || '',
  withCredentials: true,
  paramsSerializer: (params) => {
    return qs.stringify(params)
  },
})

axiosInstance.defaults.headers['Accept'] = 'application/json'
axiosInstance.defaults.headers['Content-Type'] = 'application/json'

axiosInstance.interceptors.request.use(
  (config) => {
    const token = getAccessTokenFromCookie(SSOCOOKIES.ACCESS_TOKEN)

    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`
    }

    return config
  },
  (error) => Promise.reject(error),
)

axiosInstance.interceptors.response.use(
  (response) => {
    return response
  },
  async (error) => {
    const originalRequest = error.config

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true

      const refreshToken = getAccessTokenFromCookie(SSOCOOKIES.REFRESH_TOKEN)

      try {
        if (!refreshToken) throw new Error('No refresh token available')

        const { refreshTokenSvcCaller } = await import('./auth/refresh-token/refresh-token.svc')
        const res = await refreshTokenSvcCaller.execute({
          refreshToken,
        })

        if (res.token) {
          setTokenInCookie(SSOCOOKIES.ACCESS_TOKEN, res.token)
          originalRequest.headers.Authorization = `Bearer ${res.token}`
        }

        return axiosInstance(originalRequest)
      } catch (refreshError) {
        deleteTokenFromCookie(SSOCOOKIES.ACCESS_TOKEN)
        return Promise.reject(refreshError)
      }
    }
    return Promise.reject(error)
  },
)

export default axiosInstance
