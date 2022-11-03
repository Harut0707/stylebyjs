// gitem vor tnayins erorova asxatum

let color='rgb(247, 226, 110';
//header
let header=document.body.firstElementChild;
header.style.backgroundColor=color;
let nav=header.firstElementChild;
nav.style.display='flex';
nav.style.margin='0 200px';
nav.style.padding='20px 0'
nav.style.justifyContent='space-between'
let ul=nav.firstElementChild;
ul.style.display='flex';
ul.style.gridGap='30px';
let input=nav.lastElementChild;
input.style.backgroundColor='rgb(184, 173, 27)'
//main
let main1=header.nextElementSibling.firstElementChild;
main1.style.margin='50px 200px 50px';
main1.style.borderBottom='2px solid rgb(233, 233, 233)'
main1.style.paddingBottom='40px'
let main1h1=main1.firstElementChild;
main1h1.style.marginBottom='30px';
let main1p=main1h1.nextElementSibling;
let i
// anjatel em vorovhetev eror er talis

//  for(i=0; i<main1p.childNodes.length; i++){
//     let span=main1p.children[i];
//     span.style.color=color;
// }
let btparent=main1p.nextElementSibling;
btparent.style.textAlign='end';
let button=btparent.firstElementChild;
button.style.backgroundColor='red';
button.style.padding='5px 10px';
button.style.color='white';
button.style.border='none';
let main2=main1.nextElementSibling;
main2.style.color=color;
main2.style.margin='30px 200px';
let main3=main2.nextElementSibling;
main3.style.margin='0 200px'
main3.style.display='grid';
main3.style.gridTemplateColumns='1fr 1fr 1fr';
main3.style.gridGap='50px';
let a;
for(a=0; a<main3.childNodes.length; a++){
    let box=main3.children[a];
    box.style.display='flex';
    box.style.flexDirection='column';
    box.style.justifyContent='centr'
    box.style.gridGap='10px';
    let img=box.firstElementChild;
    img.style.width='250px';
    img.style.height='150px';
    img.style.border='8px solid rgb(233, 233, 233)';
    let boxh1=img.nextElementSibling;
    boxh1.style.color=color;
     // esi uxaki qcel em stex vor tesq@ stanam
    let main3button=header.nextElementSibling.lastElementChild.firstElementChild;
main3button.style.backgroundColor='red';
main3button.style.padding='5px 10px';
main3button.style.color='white';
main3button.style.border='none';
header.nextElementSibling.lastElementChild.style.textAlign='end'
header.nextElementSibling.lastElementChild.style.margin='30px 200px'
}


// let main3button=header.nextElementSibling.lastElementChild.firstElementChild;
// main3button.style.backgroundColor='red';
// main3button.style.padding='5px 10px';
// main3button.style.color='white';
// main3button.style.border='none';
// header.nextElementSibling.lastElementChild.style.textAlign='end'
// header.nextElementSibling.lastElementChild.style.margin='30px 200px'