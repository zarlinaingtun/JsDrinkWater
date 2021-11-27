//UI
const liters=document.getElementById('liters');
const percentage=document.getElementById('percentage');
const cupsmalls=document.querySelectorAll('.cup-small');
const remained=document.querySelector('#remained');;
cupsmalls.forEach((cupsmall,idx)=>{
    cupsmall.addEventListener('click',()=>hightlightcups(idx));
});

function hightlightcups(idx){
    console.log('I am idx'+idx);
    if(cupsmalls[idx].classList.contains('full') && !cupsmalls[idx+1].classList.contains('full')){
       idx--;
    }
    cupsmalls.forEach((cup,idx2)=>{
            if(idx2 <= idx){
                cup.classList.add('full');
            }else{
                cup.classList.remove('full');
            }    
    })
    updatebigcup();
}
function updatebigcup(){
    const getfullcups=document.querySelectorAll('.cup-small.full');
    const totalfullcups=getfullcups.length;
    // console.log(totalfullcups);

    const totalcups=cupsmalls.length;
    if(totalfullcups===0){
        percentage.style.visibility='hidden';
        percentage.style.height=0;
    }
    else{
        percentage.style.visibility="visible";
        percentage.style.height=`${totalfullcups/totalcups * 330}px`;
        percentage.innerText=`${totalfullcups/totalcups * 100}%`;
    }

    if(totalfullcups===totalcups){
        remained.style.visibility="hidden";
        remained.style.height=0;
    }
    else{
        remained.style.visibility="visible";
        liters.innerText=`${2 -(250 * totalfullcups / 1000)}L`;
    }
    
}
