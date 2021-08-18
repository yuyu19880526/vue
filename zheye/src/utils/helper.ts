import { ImageProps } from '../api/testData'

export function generateFitUrl (data: ImageProps, width: number, height: number, format = ['m_pad']):void {
  if (data && data.url) {
    const formatStr = format.reduce((prev, current) => {
      return current + ',' + prev
    }, '')
    data.fitUrl = data.url + `?x-oss-process=image/resize,${formatStr}h_${height},w_${width}`
  }
}
