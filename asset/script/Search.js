





ss.onkeyup = function (){
    result.style["display"] = "block";
    search_of.innerHTML = "search of" + "  =  " + this.value;


    var searched = [];

    searched = cat.filter(el => el.name.indexOf(this.value) != -1 && this.value != "");
    fillSearch(searched);

}


function fillSearch(jsonData){
search_show.innerHTML ="";
for (let el of jsonData) {

  let mini = document.createElement("div");
    mini.className = "mini_item";
    mini.innerHTML = el.name ;

    search_show.appendChild(mini);
    // alert(fillSearch)
}

}

// listen.onclick = function(){
//   //  alert("g")
//   // console.log(fillSearch)
//     }