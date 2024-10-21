type car={
    maker:string;
    model:number;
    color:string;
    working:boolean
}

let car1:car={
    maker:'toyota',
    model:2023,
    color:'black',
    working:true

}
let car2:car={
    maker:'tesla',
    model:2021,
    color:'white',
    working:true

}

function burhan(){
for(let keys in car1){
    console.log(keys,car1[keys]);
    
}
for(let keys in car2){
    console.log(keys,car2[keys]);
    
}
}
burhan()