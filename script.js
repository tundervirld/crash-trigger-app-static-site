//Counter Crash
var iter=0;
window.onload = function() {
    load();
};

function load() {
    const buttonCrashTrigger = document.getElementById('btn-crash-trigger');
    const divMsmSection = document.getElementById('msm-section');
    
    buttonCrashTrigger.addEventListener('click', () => {  
        var divText = document.createElement("div");
        var textContent = 'Crash 💥 '+ iter++;
        divText.innerHTML = textContent;
        divMsmSection.appendChild(divText);        
        
        //Calling the function 
        CrashTrigger();
    });
}

function CrashTrigger(){
  throw new Error('Button Thrown Error 💥 Nº'+iter);
}


