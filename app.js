/// for loop -> davtalt
// () -> dotor davtah nuhtsul
//for(var i = iehleh too i<=tugsgul too; i++/i--)
// for(){
//  end davtah code baina
//}
console.log('Hello');
for( var i=1; i<11; i++){
    console.log(i+'Hello');
}
// i=1 ->
console.log('Hi');
for( var i=10; i>0; i--){
    console.log(i+'Hi');
}
console.log('tegsh');
console.log('sondgoi');
for( var i=1; i<21; i++){
    if((i%2)==0){
        console.log(i+'tegsh');
    }else{
        console.log(i+'sondgoi');
    }
}

var niilber=0;
for( var i=1; i<11; i++){
    niilber = niilber + i;
}
console.log(niilber);
var urjver=1;
for(var i=1; i<11; i++){
    urjver = urjver*i;
}
console.log(urjver);
// bodlogo 4
var hurd = 10;
for( var i=1; i<11; i++){
    hurd = 10*i;
    console.log(i + "*" +10 + "=" + hurd);
}
// define
var utga = document.getElementsByTagName('input')[0];
var result = document.querySelector(".result");
var fact= 1;
var garGal = document.querySelector(".solution");
var sol = "";
// check
console.log(utga);
console.log(result);
// uildel
function calc(){
    var number = parseInt(utga.value);
    for( var i=1; i<= number; i++){
        fact=fact*i;
    }

    result.innerText = "Result : "+ fact;
    
   
}
function clear2(){
    utga.innerText= "0";
    result.innerText = "Result :";
    garGal.innerText= "Solution :";
}
//gert; 
// bodlogo 1:
for(var i=1; i<=1; i++){
    console.log("IOI");
}
// bodlogo 2:
for(var i=1; i<4; i++){
    console.log(i+"IOI");
}
// bodlogo 3
var orolt = 3;
for(var i=1; i<=orolt; i++){
    console.log(i+"IOI");
}
// bodlogo 4:
// var orolt1 = 5;
// for(var i=1; i<=orolt1; i++){
//     orolt1 = i + 1;
// }
// console.log(orolt1);
// bodlogo 5:
var too1 = 3;
var hurtel;
for(var i=1; i<=too1; i++){
    if(i == too1){  
    hurtel = too1* 100;
    }
}
console.log(hurtel);
// bodlogo 6: 
var to1 = 70;
var toiRog = 5;
var hariu;
for(var i=1; i<=toiRog; i++){
    if(i == toiRog){  
        hariu = to1* toiRog;
    }
}
console.log(hariu);
// bodlogo 7:
var zereg = 5;
var t1 = 1;
for(i=1; i<=zereg; i++){
    t1 = t1*2
}
console.log(t1);
// bodlogo 8: 
var n = 2;
var t2 = 1;
var utg1 = 3;
for(i=1; i<=n; i++){
    t2 = t2 * utg1;
}
console.log(t2);


