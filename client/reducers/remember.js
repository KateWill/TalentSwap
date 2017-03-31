const remember = (state = false, action) => {
  switch (action.type) {
    case 'REMEMBER':
      return true;
    case 'FORGET':
      return false
    default:
      return state
  }
}

export default remember;