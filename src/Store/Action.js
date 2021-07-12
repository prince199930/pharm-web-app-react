export const ADDMedicine = (product)=>{
    alert("add medicine")
    return {type:"ADD", payload:product}
}
export const EDITMedicine = (currentKey,product)=>{
    return {type:"EDIT", payload:product,id:currentKey}
}
export const DELETEMedicine = (key)=>{
    console.log(key)
    alert('medicin delete')
    return {type:"DELETE", id:key}
}

export const ADDExecutive = (executive)=>{
    alert("executive added")
    return {type:"EXECUTIVEADD", payload:executive}
}
export const EDITExecutive = (currentKey,executive)=>{
    return {type:"EXECUTIVEEDIT", payload:executive,id:currentKey}
}
export const DELETEExecutive = (key)=>{
    console.log(key)
    alert('executive delete')
    return {type:"EXECUTIVEDELETE", id:key}
}
export const ADDOrder = (order)=>{
    alert("add order")
    return {type:"ORDERADD", orderpayload:order}
}
export const EDITOrder = (orderCurrentKey,order)=>{
    return {type:"ORDEREDIT", orderpayload:order,id:orderCurrentKey}
}
export const DELETEOrder = (key)=>{
    alert('orderdelet')
    console.log(key)
    return {type:"ORDERDELETE", id:key}
}

