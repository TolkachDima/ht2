// let L = Math.trunc(prompt(`Enter not double length < 1000`));
// while(L > 1000){
//     L = prompt(`Enter not double length < 1000!!`)
// }

// let W = Math.trunc(prompt(`Enter not double width < 1000`));
// while(W > 1000){
//     W = prompt(`Enter not double width < 1000!!`)
// }

// let H = Math.trunc(prompt(`Enter not double height < 1000`));
// while(H > 1000){
//     H = prompt(`Enter not double height < 1000!!`)
// }

// const paint = 16

// let w1 = Math.ceil(L*W/paint);
// let w2 = Math.ceil(H*W/paint);


// alert(w1*2 + w2*2);
//---------------------------------------------------------------

// let a1 = Math.trunc(prompt(`Enter not double a1 < 100`));
// while (a1 > 100) {
//     a1 = prompt(`Enter not double a1 < 100!!`)
// }

// let a2 = Math.trunc(prompt(`Enter not double a2 < 100`));
// while (a2 > 100) {
//     a2 = prompt(`Enter not double a2 < 100!!`)
// }

// let a3 = Math.trunc(prompt(`Enter not double a3 < 100`));
// while (a3 > 100) {
//     a3 = prompt(`Enter not double a3 < 100!!`)
// }

// let b1 = Math.trunc(prompt(`Enter not double b1 < 100`));
// while (b1 > 100) {
//     b1 = prompt(`Enter not double b1 < 100!!`)
// }

// let b2 = Math.trunc(prompt(`Enter not double b2 < 100`));
// while (b2 > 100) {
//     b2 = prompt(`Enter not double b2 < 100!!`)
// }

// let b3 = Math.trunc(prompt(`Enter not double b3 < 100`));
// while (b3 > 100) {
//     b3 = prompt(`Enter not double b3 < 100!!`)
// }


// if (a1 > a2 && a1 > a3) {
//     alert("dfsf");

//     if (b1 > b2 && b1 > b3) {
//         let a1b1 = a1 * b1;
//         alert(a1b1);
//     } else if (b2 > b1 && b2 > b3) {
//         let a1b2 = a1 * b2;
//         alert(a1b2);
//     } else if (b3 > b1 && b3 > b2) {
//         let a1b3 = a1 * b3;
//         alert(a1b3);
//     }
// } else if (a2 > a1 && a2 > a3) {
//     alert("dfsf1");

//     if (b1 > b2 && b1 > b3) {
//         let a2b1 = a2 * b1;
//         alert(a2b1);

//     } else if (b2 > b1 && b2 > b3) {
//         let a2b2 = a2 * b2;
//         alert(a2b2);
//     } else if (b3 > b1 && b3 > b2) {
//         let a2b3 = a2 * b3;
//         alert(a2b3);

//     }
// } else if (a3 > a2 && a3 > a1) {
//     alert("dfsf2");

//     if (b3 > b2 && b3 > b1) {
//         let a3b1 = a3 * b1;
//         alert(a3b1);

//     } else if (b2 > b1 && b2 > b3) {
//         let a3b2 = a3 * b2;
//         alert(a3b2);

//     } else if (b3 > b1 && b3 > b2) {
//         let a3b3 = a3 * b3;
//         alert(a3b3);

//     }
// }
//------------------------------------------------------------
// let a = prompt(`Enter ticket num`);
// let b = a.split("");
// let b1 = b.slice(0, 3);
// let b2 = b.slice(3, 6);
// alert(b1 + ' ' + b2);
// b1 = b1.map(Number);
// let b1Sum = b1.reduce((sum, current) => sum + current)
// let b2Sum = b2.reduce((sum, current) => sum + current)
// if (b1Sum == b2Sum) {
//     alert('Yes');
// } else {
//     alert('No')
// }
//-----------------------------------------------------------

let age = 11;


switch (true) {
    case 0 < age && age > 12 :{
        alert('child');
        break;}
    case (12 <= age >= 18):
        alert('teenager');
        break;
    case (18 <= age >= 60):
        alert('adult');
        break;
    case (60 <= age ):
        alert('retiree');
        break;
}





