import { api } from '@/lib/axios'

export interface Prediction {
  class: string
  confidence: number
}

export interface UploadResponse {
  success: boolean
  message?: string
  top_prediction?: Prediction
  predictions?: Prediction[]
}

/**
 * Extracts the genus name from the class string
 * Format: "01_cylloepus_274_6_A" -> "cylloepus"
 */
export function extractGenusFromClass(className: string): string {
  const parts = className.split('_')
  // The genus is typically the second part (index 1)
  if (parts.length >= 2) {
    return parts[1].charAt(0).toUpperCase() + parts[1].slice(1)
  }
  return className
}

/**
 * Formats confidence value as percentage
 */
export function formatConfidence(confidence: number): string {
  return `${confidence.toFixed(2)}%`
}

/**
 * Uploads an image file to the backend
 * @param file - The image file to upload
 * @returns Promise with upload response
 */
export async function uploadImage(file: File): Promise<UploadResponse> {
  const formData = new FormData()
  formData.append('image', file)

  try {
    const response = await api.post<UploadResponse>('/predict', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })

    return response.data
  } catch (error) {
    if (error && typeof error === 'object' && 'response' in error) {
      const axiosError = error as {
        response?: { data?: UploadResponse }
      }
      if (axiosError.response?.data) {
        return axiosError.response.data
      }
    }

    // Return a generic error response
    return {
      success: false,
      message: 'Failed to upload image. Please try again.',
    }
  }
}
