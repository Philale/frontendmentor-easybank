const nav_resp = document.getElementById("navbar-responsive");

function navbarClick(){
    if(nav_resp.classList.contains("hide")){
        nav_resp.classList.remove("hide");
    }else{
        nav_resp.classList.add("hide");
    }
}