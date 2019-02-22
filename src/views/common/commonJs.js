export function alertStatus (tittle = '成功', message, type = 'success') {
  this.$notify({
    title: tittle,
    message: message,
    type: type
  })
}
