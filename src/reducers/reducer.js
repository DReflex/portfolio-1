
const stateInit = {
  from:"",
  subject: "",
  text:"",
}
const form = (state = stateInit, action) => {
  switch (action.type) {
    case 'FROM':
      return {
        ...state,
        from:action.from
      }
      case 'SUBJECT':
      return {
        ...state,
        subject:action.subject
      }
      case 'TEXT':
      return {
        ...state,
        text:action.text
      }
      case 'RESET':
      return{
        ...state,
        from:"",
        subject: "",
        text:"",
      }
      default:
      return state
  }

}

export default form
