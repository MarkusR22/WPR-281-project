document.addEventListener('DOMContentLoaded',(event)=>{ //ensures the page has been loaded succesfully before the js script runs
   
    //select modal events based on their ids
    const modal=document.getElementById("modal"); 
    const loginButton=document.getElementById("loginButton");
    const closeButton=document.getElementsByClassName("close")[0];

    loginButton.onclick=function(){ //modal is made visible when user clicks login/signUp
        modal.style.display="flex"
    }

    closeButton.onclick=function() { 
        modal.style.display="none"
    }

    window.onclick=function(event){ //modal closes when user clicks outside it
        if (event.target==modal) {
            modal.style.display="none"; 
        }
    }
});









