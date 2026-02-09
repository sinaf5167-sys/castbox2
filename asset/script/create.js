


function creatItem(holderID, jsonDataItem) {
    let it = document.createElement("div");
    it.className = "item";

    let nm = document.createElement("div");
    nm.className = "number";
    nm.innerHTML = jsonDataItem.id;

    let im = document.createElement("div");
    im.className = "image";

    im.onclick = function() {
        showPublisher(jsonDataItem);
    };

    let imgm = document.createElement("img");
    imgm.src = "asset/img/" + jsonDataItem.pic[0];

    let inf = document.createElement("div");
    inf.className = "info";

    let nam = document.createElement("div");
    nam.className = "name";
    nam.innerHTML = jsonDataItem.name;

    let wr = document.createElement("div");
    wr.className = "writer";


    let ad = document.createElement("div");
    ad.className = "add";
    
              // add to subscribe
    let itemNames = [];
    let isSubscribed = false;
    ad.onclick = function() {
        
        // add and remove item and change the backgrond
        if (isSubscribed) {
            
            let subscribedItems = document.getElementById('left_subscribed').getElementsByClassName('item');
            for (let i = 0; i < subscribedItems.length; i++) {
                if (subscribedItems[i].getElementsByClassName('name')[0].innerHTML === jsonDataItem.name) {
                    subscribedItems[i].remove();
                   
                }
            }
            ad.style["background"] = "url('asset/img/Untitled.png')";
            ad.style["background-size"] = "100% 100%";
        } else {
            itemNames.push(jsonDataItem.name);
            addItemToSubscribed(jsonDataItem);
            ad.style["background"] = "url('asset/img/subedBtn.32dc06bf.png')";
            ad.style["background-size"] = "100% 100%";
        }
    
        isSubscribed = !isSubscribed;
    };



    inf.appendChild(nam);
    inf.appendChild(wr);
    im.appendChild(imgm);

    it.appendChild(nm);
    it.appendChild(im);
    it.appendChild(inf);
    it.appendChild(ad);

    document.getElementById(holderID).appendChild(it);
}

function fillInfo(holder, jsonData) {
    for (let i = 0; i < jsonData.length; i++) {
        creatItem(holder, jsonData[i]);
    }
}















function addItemToSubscribed(jsonDataItem) {
    let subscribed = document.getElementById('left_subscribed');

    let it = document.createElement("div");
    it.className = "item";

    let im = document.createElement("div");
    im.className = "image";

    im.onclick = function() {
        showPublisher(jsonDataItem);
    }

    let imgm = document.createElement("img");
    imgm.src = "asset/img/" + jsonDataItem.pic[0];


    let nam = document.createElement("div");
    nam.className = "name";
    nam.innerHTML = jsonDataItem.name;

    let aud = document.createElement("div");
    aud.className = "Author_dec";
    aud.innerHTML = jsonDataItem.describe;
 
    im.appendChild(imgm);
    it.appendChild(im);
    it.appendChild(nam);
    it.appendChild(aud);
   



    subscribed.appendChild(it);
    // subscribed.className = "show";
}





                  // filter

// function title(){
//    category_butten.innerHTML = "Salam Khobi?";
// }

News.onclick = function() {
    filterData("News");
};
Featured.onclick = function() {
    filterData("Featured");
};
True_Crime.onclick = function() {
    filterData("True Crime");
};
Society.onclick = function() {
    filterData("Society & Culture");
};

function filterData(param) {
    left.innerHTML = "";
    let filtered = cat.filter(el => el.cate === param);
    fillInfo('left', filtered);
}

fillInfo('left', cat);











// subscribe show




// function creatItem_b(holderID, jsonDataItem) {
//     let it = document.createElement("div");
//     it.className = "item";

//     let im = document.createElement("div");
//     im.className = "image";

//     im.onclick = function() {
//         showPublisher(jsonDataItem);
//     }

//     let imgm = document.createElement("img");
//     imgm.src = "img/" + jsonDataItem.pic[0];


//     let nam = document.createElement("div");
//     nam.className = "name";
//     nam.innerHTML = jsonDataItem.name;

//     let aud = document.createElement("div");
//     aud.className = "Author_dec";
//     aud.innerHTML = jsonDataItem.describe;
 
//     im.appendChild(imgm);
//     it.appendChild(im);
//     it.appendChild(nam);
//     it.appendChild(aud);
   

//     document.getElementById(holderID).appendChild(it);
// }


// function fillInfo_b(holder, jsonData) {
//     for (let i = 0; i < jsonData.length; i++) {
//         creatItem_b(holder, jsonData[i]);
//     }
// }


// fillInfo_b('left_subscribed', cat);







