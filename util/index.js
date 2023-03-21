export function transformTime(timestamp) {
  const dayjs = require('dayjs')
  const utc = require('dayjs/plugin/utc')
  dayjs.extend(utc)
  return dayjs.utc(timestamp).format('YYYY/MM/DD')
}
