
export function IsJsonFormat(value) {
    try {
        JSON.parse(value);
    } catch (e) {
        return false;
    }
    return true;
}


export function CreateReport(items){

    let resulArr = (items.length)?[]:{}

    items.length? 
        items.forEach(item=>{
            let resulObj = {}
            console.dir(item)
            item.cells.forEach(cell=>{
                console.dir(cell)
                resulObj[cell.key]=cell.value
            })
            delete resulObj['id']
            delete resulObj['isEdit']
            resulArr.push(resulObj)
            console.dir(resulObj)
        })
    : 
        items.forEach(item=>{
            resulArr[item.key]=item.value
            console.dir(resulArr)
        })

    return JSON.stringify(resulArr)
}

export function updateTitles(currentTitles, items){
    let titles = []
    items.forEach(item=>
        item.cells.forEach(cell=>{
            if(!titles.includes(cell.key))
                titles.push(cell.key) 
            })
    )
    return titles
}

export function getLastId(items){
    return (items.length)?items[items.length-1].id:0
}