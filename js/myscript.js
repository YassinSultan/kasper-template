// Start Slide Landing
const rightBtn =document.getElementById('right-btn')
const leftBtn =document.getElementById('left-btn')
const landingSection =document. getElementById('landing-section')
let backgound=['url(images/landing.jpg)','url(images/landing02.jpg)','url(images/landing03.jpg)']
let bullets=[document.getElementById('bullets2'),document.getElementById('bullets3'),document.getElementById('bullets1')]
let counter = 0;
function frontChange(){
    if(counter==backgound.length-1){
        counter=0

    }
    else{
        counter++
    }
    landingSection.style.backgroundImage=backgound[counter]
    console.log(counter)
    if(counter==0){
        bullets[2].style.backgroundColor='transparent';
        bullets[counter].style.backgroundColor='#00c7fc';
    }
    else{
        bullets[counter-1].style.backgroundColor='transparent'; 
        bullets[counter].style.backgroundColor='#00c7fc';
    }
}
function backChange(){
    if(counter==0){
        counter=backgound.length-1

    }
    else{
        counter=counter-1
    }
    landingSection.style.backgroundImage=backgound[counter]
    console.log(counter)
    if(counter==2){
        bullets[0].style.backgroundColor='transparent';
        bullets[counter].style.backgroundColor='#00c7fc';
    }
    else{
        bullets[counter+1].style.backgroundColor='transparent'; 
        bullets[counter].style.backgroundColor='#00c7fc';
    }
}
rightBtn.onclick=frontChange;
leftBtn.onclick=backChange;

// End Slide Landing