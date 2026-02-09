
// for (let i = 0; i < cat.length; i++) {
//     let it = document.createElement("div");
//     it.className = "item";

//     let im = document.createElement("div");
//     im.className = "img";

//     let imgm = document.createElement("img");
//     imgm.src = "img/" + cat[i].pic[0];

//     let mt = document.createElement("div");
//     mt.className = "mtn";
//     mt.innerHTML = cat[i].name ;

//     im.appendChild(imgm);

//     it.appendChild(im);
//     it.appendChild(mt);
    
//     grid.appendChild(it);
// }



// function creatItem(holderID, jsonDataItem) {

//     let it = document.createElement("div");
//     it.className = "item";

//     let im = document.createElement("div");
//     im.className = "img";

//     let imgm = document.createElement("img");
//     imgm.src = "img/" + jsonDataItem.pic[0];

//     let mt = document.createElement("div");
//     mt.className = "mtn";
//     mt.innerHTML = jsonDataItem.name ;

//     im.appendChild(imgm);

//     it.appendChild(im);
//     it.appendChild(mt);
    
//     holderID.appendChild(it);

//     document.getElementById(holderID).appendChild(it);
// }

// function fillInfo(holder, jsonData) {
//     for (let i = 0; i < jsonData.length; i++) {
//         creatItem(holder, jsonData[i]);
//     }
// }


// fillInfo('grid', cat);




function creatItem(holder, jsonDataItem) {
    
    let it = document.createElement("div");
    it.className = "item";

    let im = document.createElement("div");
    im.className = "img";

    let imgm = document.createElement("img");
    imgm.src = "asset/img/" + jsonDataItem.pic[0];

    let mt = document.createElement("div");
    mt.className = "mtn";
    mt.innerHTML = jsonDataItem.name;

    im.appendChild(imgm);
    it.appendChild(im);
    it.appendChild(mt);


    holder.appendChild(it);
}

function fillInfo(holderID, jsonData) {
    const holder = document.getElementById(holderID);
    for (let i = 0; i < jsonData.length; i++) {
        creatItem(holder, jsonData[i]);
    }
}



fillInfo('grid', cat);



           // filter




// var News = document.getElementById('News');
// var grid = document.getElementById('grid');

News.onclick = function() {
    filterData("News");
};
True_Crime.onclick = function() {
    filterData("Featured");
};
True_Crime.onclick = function() {
    filterData("Featured");
};
Society.onclick = function() {
    filterData("True Crime");
};
Shows.onclick = function() {
    grid.innerHTML = "";
    fillInfo('grid', cat);
};
Top_Search.onclick = function() {
    filterData("true");
};



function filterData(param) {
    grid.innerHTML = "";
    let filtered = cat.filter(el => el.cate === param);
    fillInfo('grid', filtered);
}

fillInfo('grid', cat);


