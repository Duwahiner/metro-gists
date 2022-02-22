export const overflowText = ( text, { init, end } ) => {
  if (text?.length > 100) {
    if (end > 120) {
      return text?.substr(init, end)
    } 

    return text?.substr(init, end) + '...'
  } else {
    return text?.substr(init, end)
  }
}