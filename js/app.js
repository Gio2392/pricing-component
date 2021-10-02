const d = document,
      $price = d.querySelectorAll(".price"),
      $check = d.getElementById("check");

let prices = {
  basic: {
    monthly: 19.99,
    anually: 199.99
  },
  professional: {
    monthly: 24.99,
    anually: 249.99
  },
  master: {
    monthly: 39.99,
    anually: 399.99
  }
}


console.log(prices.basic.monthly)
d.addEventListener("click", (e) => {
  if(e.target.matches("#check")){
    if($check.checked){
      console.log(prices.basic.anually );
      $price[0].textContent = prices.basic.anually;
      $price[1].textContent = prices.professional.anually;
      $price[2].textContent = prices.master.anually;
    }else{
      $price[0].textContent = prices.basic.monthly;
      $price[1].textContent = prices.professional.monthly;
      $price[2].textContent = prices.master.monthly;
    }
  }
})