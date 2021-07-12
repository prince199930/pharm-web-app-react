const initial = JSON.parse(localStorage.getItem("executives")) || {"test-sales":{First_Name:"Prince", Last_Name:"Hira", Date_of_birth:"30June1999", Gender:"Male", Experience_Years:"1"}}
export const ExecutiveReducer = (state=initial, action)=>{
    let executivechangeData;
    switch(action.type){
        
        case "EXECUTIVEADD":
            executivechangeData = {...state, ...action.payload}
            localStorage.setItem("executives", JSON.stringify(executivechangeData))
            return executivechangeData
        case "EXECUTIVEEDIT":
            state[action.id]=action.payload
            localStorage.setItem("executives", JSON.stringify(state))
            return state
        case "EXECUTIVEDELETE":
            executivechangeData = Object.assign({}, state);
            delete executivechangeData[action.id]
            localStorage.setItem("executives", JSON.stringify(executivechangeData))
            return executivechangeData
        default:
            return state
    }
}