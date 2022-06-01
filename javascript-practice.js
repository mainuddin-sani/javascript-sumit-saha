// javascript function

const userName = (name)=>{
    document.write(`${name} is a most popular language`);
}
userName('Javascript');
setTimeout(()=>{
    userName('Python');
}, 3000)

console.log('Hello!')


let b = 'Javascript Programming';

const showData = ()=>{
    b = 3;
}

console.log('before', b);
showData();
console.log('after', b);


// local scope

let name = 'Mianuddin';

const showName = ()=>{
    let x = "Sani";
    console.log(name +' '+ b);
}
showName();

// console.log(x);

// block scope 

let first = 'Hello!';

const daialog = ()=> {
    let second  = "Mainuddin";
    console.log(first+ ' ' + second);
    if(second == 'Mainuddin'){
        let third = "Sani";
        console.log(first + " " + second + " " + third);
    }
    console.log(first + " " + second + " " + third);
}

daialog();