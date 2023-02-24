const inputs=document.querySelectorAll(".panels input");
const c=document.querySelector("#celsius");
const f=document.querySelector("#fahrenheit");
const k=document.querySelector("#kelvin");

// loop through all inputs 
inputs.forEach(input=> {
    input.addEventListener("input", e=> {

        const unit=e.target.id;
        const v=parseInt(e.target.value);

        if(unit==="celsius")
        {
            f.value=parseFloat((v*1.8)+32).toFixed(4)*1;
            k.value=parseFloat(v+273.15).toFixed(4)*1;
        }

        else if(unit==="fahrenheit")
        {
            c.value=parseFloat((v-32)*5/9).toFixed(4)*1;
            k.value=parseFloat(((v-32)*5/9)+273.15).toFixed(4)*1;
        }

        else if(unit==="kelvin")
        {
            c.value=parseFloat(v-273.15).toFixed(4)*1;
            f.value=parseFloat((v-273.15)*9/5+32).toFixed(4)*1;
        }
    });
});


function myFunction(){
    document.getElementById("fahrenheit").value = ''
    document.getElementById("celsius").value = ''
    document.getElementById("kelvin").value = ''
    // $('#fahrenheit').val('');
    // $('#kelvin').val('');
}