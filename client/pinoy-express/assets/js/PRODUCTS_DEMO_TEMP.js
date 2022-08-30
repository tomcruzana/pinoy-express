function addTemplate(num) {
  let produceCards = "";

  for (let i = 0; i < num; i++) {
    produceCards += `<div class="col-lg-4 col-md-6">
        <div class="single-item-wrap custom-cursor" data-bs-toggle="modal" data-bs-target="#exampleModal2">
            <div class="wrap-details">
                <h5><a href="single-product.html">Food Name</a></h5>                        
            </div>
            <div class="thumb">
                <img src="assets/img/product/pizza/1.png" alt="img">
                <a class="fav-btn" href="#"><i class="fas fa-info-circle" data-bs-toggle="modal" data-bs-target="#exampleModal"></i></a> 
            </div>
        </div>
        </div>`;
  }
  return produceCards;
}

// a la carte
document
  .querySelector("#entree")
  .insertAdjacentHTML("afterend", addTemplate(5));

document.querySelector("#sides").insertAdjacentHTML("afterend", addTemplate(3));
document
  .querySelector("#appetizer")
  .insertAdjacentHTML("afterend", addTemplate(4));
document.querySelector("#soup").insertAdjacentHTML("afterend", addTemplate(7));
document.querySelector("#pasta").insertAdjacentHTML("afterend", addTemplate(5));
document
  .querySelector("#dessert")
  .insertAdjacentHTML("afterend", addTemplate(3));

// bf
document
  .querySelector("#all-day-bf")
  .insertAdjacentHTML("afterend", addTemplate(9));

// bakery
document
  .querySelector("#pinoy-classics")
  .insertAdjacentHTML("afterend", addTemplate(11));
document.querySelector("#cakes").insertAdjacentHTML("afterend", addTemplate(3));
document.querySelector("#pies").insertAdjacentHTML("afterend", addTemplate(6));

// drinks
document
  .querySelector("#drinks")
  .insertAdjacentHTML("afterend", addTemplate(5));
