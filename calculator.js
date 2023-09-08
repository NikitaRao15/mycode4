let string ='';
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((input)=>{
    input.addEventListener('onclick',(e)=>
    {
        if(e.target.innerHTML == '=')
        {
            string =eval(string);
            document.querySelector('.input').value=string;
        }
        else if(e.target.innerHTML == 'AC')
        {
         string='';
         document.querySelector('.input').value=string;
        }
        else{
            string = string + e.target.innerHTML;
            document.querySelector('.input').value = string;
        }
    }
    )


}
)