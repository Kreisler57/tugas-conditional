//Q1:

let valueA = 9
if(valueA === 9){
    console.log(9);
}else{
    console.log(valueA)
}

//Q2:

let person = 'male'
if(person = 'male'){
    console.log('He is male')
} else {
    console.log('She is female')
};

//Q3

let valueB = 10
if(valueB >=10){
    console.log('Largeeeee')
} else {
    console.log('Smalllll')
};

//Q4:

let valueC = 11
if ( valueC > 10){
    console.log('Largeeeee')
} else if ( valueC = 10){
    console.log("mediumm")
} else {
    console.log('Smalllll')
};

//Q5:

let valueD =4317493
if (valueD === 4317493 || valueD === 100024){
    console.log('Valid Value')
} else {
    console.log('Invalid Value')
};

//Q6:

const valueE = [5, 3, 2, 1, 6, 4];
if(valueE[5] === 4){
    console.log(true);
}

//Q7:

const valueF = ['dop', 'Yay! You Made It', 'nope']
if(valueF[(30+31+99)/40-3] === 'Yay! You Made It'){
    console.log(valueF[1])
} else {
    console.log('Nay! Keep your spirit up!! 🔥🔥')
};

//Q8:

const valueG =[]
if (valueG[0] = 'undefined') {
    console.log('Empty!')
};

//Q9:

const valueH = [1, 2, 3]
if(valueH.length >= 0){
    console.log(valueH.length)
};

//Q10:

const valueI = [1, 2, 3]
if(Array.isArray(valueI)){
    console.log(valueI[valueI.length -1])
};

//Q11:

let valueJ = 'string'
if(typeof valueJ === 'string'){
    console.log('string')
};

//Q12:

let valueK ={
    yard: 100,
    length:200
}
if(typeof valueK === 'object'){
    console.log('object')
};

//Q13:

let valueL = 7
if(Number.isInteger(valueL)){
    console.log('integer')
};

//Q14:

let valueM;
if(typeof valueM == 'undefined'){
    console.log('undefined')
};


//Q15:

let valueN =[1, 2, 3];
if(Array.isArray(valueN)){
    console.log("Yay! it's array")
};

//Q16:

const valueO ={
    age : 10,
    height: 170,
    diameter: 50
}
if(valueO.age === 10){
    console.log("it's " + 10)
} else {
    console.log(valueO.age)
};

//Q17:

const valueP ={
    age:15,
    numberOfSnacks:15
}
if(valueP.cat === valueP.dog){
    console.log('Sameee')
} else {
    console.log('Nayyyy')
};

//Q18:

const valueQ ={
    age:12,
    numberofCandies: 12,
    father: 'john',
    mother: 'bertha',
    bro: 'doe'
}
if(valueQ.age === valueQ.numberofCandies || valueQ.age === valueQ.father ||valueQ.age === valueQ.mother || valueQ.age === valueQ.bro){
    console.log(valueQ.age)
} else {
    console.log('There are no keys with same value inside')
};

//Q19;
const valueR ={
    valueRA: 2,
    valueRB: 3,
    ValueResult(){
        console.log(valueR.valueRA + valueR.valueRB);
    },
    valueRC:5,
    valueRD:6,
    valueRE:7,
    valueRF:8,
    valueRP:9,
    valueRO:10,
    valueRJ:11,
    valueRV:12,
    valueRS:13,
    valueRW:14,
    valueRQ:15
}
if(valueR.ValueResult() > 0){
    valueR.ValueResult();
};

//Q20

const valueS = {
    bro: undefined,
}
if(valueS.bro === undefined){
    Object.assign(valueS,{sis:2}),
    valueS.bro = 3,
    valueS.sis = 4,
    delete valueS.bro,
    console.log(valueS.sis)
} else {
    console.log(valueS.bro)
};
