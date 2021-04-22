let txt=document.getElementById('txt')
let txt1=document.getElementById('txt1')
let txt2=document.getElementById('txt2')
let txt3=document.getElementById('txt3')
let res=document.getElementsByClassName('res')[0]
let res1=document.getElementsByClassName('res1')[0]
let res2=document.getElementsByClassName('res2')[0]
let res3=document.getElementsByClassName('res3')[0]











function clicar(){
    if(txt.value==''){
        res.style.display='block'
        res.style.color='red'
        txt.style.borderColor='red'
       
        
        
    } else{
        txt.style.borderColor=''
        res.style.display='none'
        
    } if(txt1.value==''){
        txt1.style.borderColor='red'
        res1.style.display='block'
        res1.style.color='red'
       
    } else{
        txt1.style.borderColor=''
        res1.style.display='none'

    } if(txt2.value==''){
        txt2.style.borderColor='red'
        res2.style.display='block'
        res2.style.color='red'
 
    } else{
        txt2.style.borderColor=''
        res2.style.display='none'
    } if(txt3.value==''){
        txt3.style.borderColor='red'
        res3.style.display='block'
        res3.style.color='red'
    } else{
        txt3.style.borderColor=''
        res3.style.display='none'
    }


}

