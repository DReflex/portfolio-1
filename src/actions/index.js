
export const queryFrom = (from) =>{
  return {
    type:"FROM",
    from
  }
}
export const querySubject = (subject) =>{
  return {
    type:"SUBJECT",
    subject
  }
}
export const queryText = (text) =>{
  return {
    type:"TEXT",
    text
  }
}
export const queryReset = () =>{
  return{
    type:"RESET"
  }
}
export const nav = (nav) =>{
  return{
    type:"NAV",
    nav
  }
}
export const error = (error) => {
  return{
    type:"ERROR",
    error
  }
}
