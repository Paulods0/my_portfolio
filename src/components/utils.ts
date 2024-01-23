export function getHours() {
  const date = new Date()
  const hour = date.getHours()
  const minutes = date.getMinutes()

  const hours = `${hour} : ${minutes}`
  return hours
}
