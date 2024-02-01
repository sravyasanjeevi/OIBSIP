let screen=document.getElementById('result');
buttons=document.querySelectorAll('button');
let screenValue='';
for(item of buttons){
  item.addEventListener('click',(e)=>{
      buttonText=e.target.innerText;
      console.log('Button text is ',buttonText);
  if(buttonText=='x'){
      buttonText='*';
      screenValue +=buttonText;
      screen.value =screenValue;
      }
  else if(buttonText=='+'){
      buttonText='+';
      screenValue +=buttonText;
      screen.value=screenValue;
  }
  else if(buttonText=='-'){
      buttonText='-';
      screenValue +=buttonText;
      screen.value=screenValue;
  }
  else if(buttonText=='÷'){
      buttonText='/';
      screenValue +=buttonText;
      screen.value=screenValue;
  }
  else if(buttonText=='x²'){
      buttonText='**2';
      screenValue +=buttonText;
      screen.value=screenValue;
  }
  else if(buttonText=='√'){
      buttonText='**0.5';
      screenValue +=buttonText;  
      screen.value=screenValue;
      
  }
  else if(buttonText=='Del'){
 screenValue=screen.value.slice(0,-1);
 screen.value=screenValue;
  }

  else if(buttonText=='%'){
      buttonText='%';
      screenValue +=buttonText;
      screen.value=screenValue;
  }
  
  else if(buttonText=='.'){
      buttonText='.';
      screenValue +=buttonText;
      screen.value=screenValue;
  }

  else if(buttonText=='Clr'){
      screenValue="";
      screen.value=screenValue;
  }
  
  
  else if(buttonText=='=')
  {
       screen.value=eval(screenValue);
  }
  
  else{
      screenValue +=buttonText;
      screen.value=screenValue;
  }
  
  }
  )
}