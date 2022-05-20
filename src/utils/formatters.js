export const handleFormatDate = (date) => {
  const currentDate = new Date(date)
  const day = String(currentDate.getDate() + 1).padStart(2, '0')
  const month = String(currentDate.getMonth() + 1).padStart(2, '0')
  const year = currentDate.getFullYear()
  return day + '-' + month + '-' + year
}

export const handleFormatPrice = (number, digits = 4) => {
  return number.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    maximumFractionDigits: digits
  })
}
