let pro_arr  = JSON.parse(localStorage.getItem("products"));

pro_arr.map(function(el,index){
    let container = document.getElementById("all_products");

    let div = document.createElement("div");
    div.setAttribute("id","box");

    let type = document.createElement("p");
    type.innerText = "Type: " + el.type;

    let desc = document.createElement("p");
    desc.innerText = "Description: " + el.desc;

    let price = document.createElement("p");
    price.innerText = "INR " + el.price;

    let image = document.createElement("img");
    image.src = el.image;
    
    let removeBtn = document.createElement("button");
    removeBtn.innerText = "Remove";
    removeBtn.id = "remove_product";
    removeBtn.addEventListener("click",function(){
        remove(el,index);
    })

    div.append(image,type,desc,price,removeBtn);

    container.append(div);

});

function remove(el,index){
    // console.log(el,index);
    pro_arr.splice(index,1);
    localStorage.setItem("products",JSON.stringify(pro_arr));
    window.location.reload();
}