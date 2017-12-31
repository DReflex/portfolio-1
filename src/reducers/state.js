const stateInit ={
  nav:"transparent",
  error:false
}
const State = (state = stateInit, action)=>{
  switch(action.type){
    case "NAV":
    return{
      ...state,
      nav:action.nav
    }
    case "ERROR":
    return{
      ...state,
      error: action.error
    }
    default:
    return state

  }
}
export default State
