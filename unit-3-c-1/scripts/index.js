//store the products array in localstorage as "products"
let pro_arr  = JSON.parse(localStorage.getItem("products")) || [];

function addData(){
    // e.preventDefault();
    let form = document.getElementById("products");

    let type = form.type.value;
    let desc = form.desc.value;
    let price = form.price.value;
    let image = form.image.value;

    const p = new Products(type,desc,price,image);
    // console.log(p);

    pro_arr.push(p);
    console.log(pro_arr);
    localStorage.setItem("products",JSON.stringify(pro_arr));
    window.location.reload();

}
function Products(t,d,p,i){
    this.type = t;
    this.desc = d;
    this.price = p;
    this.image = i;
}