// business logic
$(document).ready(function(){
    function Pizza(size, crust, topping, quantity, totalprice){
      this.size = size;
      this.crust = crust;
      this.topping = topping;
      this.quantity = quantity;
      this.totalprice = totalprice;
}
Pizza.prototype.fullOrder = function() {
    return this.size + " " + this.crust + " " +this.topping + " " + this.quantity + " " + this.totalprice;
}

// user interface
$(document).ready(function(){
$("form#checked").submit(function(event){
    event.preventDefault();
    var sizing = $("select#size").val();
    var crusts = $("select#size1").val();
    var topping1 = $("select#size2").val();
    var number = $("input#size3").val();
      
    var newpizza = new Pizza(sizing, crusts, topping1, number, totalprice);
    console.log(newpizza);
  
$(".btn").last().click(function(){
$("#show-order").show();
$("#show-order h2").text(newpizza.size);
$(".size").text(newpizza.size);
$(".crust").text(newpizza.crust);
$(".topping").text(newpizza.topping);
$(".quantity").text(newpizza.quantity);
$(".totalPrice").text(newpizza.totalprice);
$("ul#ordering").text(" ");
});
});
$(".btn").click(function(){
    var sizingb = $("select#size").val();
    var crustd = $("select#size1").val();
    var toppingz = $("select#size2").val();
    var numberf = $("input#size3").val();
    
    var price, totalPrice;
    switch(sizingb){
    case size = "small":
    price = 2500 ;
    if(crustd = "Crispy") {
       totalprice = (price*numberf) + 250;
    }
    else if (crustd = "Stuffed"){
             totalprice = (price*numberf)+ 250;
    }
    else if (crustd = "Gluten-Free"){
             totalprice = (price*numberf) + 250;
    }
    break;
    case size = "medium":
         price = 5500;
    if(crustd = "Crispy") {
       totalprice = (price*numberf) + 150;
    }
    else if (crustd = "Stuffed"){
             totalprice = (price*numberf) + 250;
    }
    else if (crustd = "Gluten-Free"){
             totalprice = (price*numberf) + 250;
    }
    break;
    case sizingb = "large":
         price = 7000;
    if(crustd = "Crispy") {
       totalprice = (price*numberf) + 250;
    }
    else if (crustd = "Stuffed"){
             totalprice = (price*numberf) + 250;
    }
    else if (crustd = "Gluten-Free"){
             totalprice = (price*numberf) + 250;
    }
    break;
    }
    
    switch (toppingz) {
    case toppingz = "Mushrooms":
         totalprice = totalprice + 400;
    break;
    case toppingz = "Sausage":
         totalprice = totalprice + 700;
    break;
    case toppingz = "Extra cheese":
         totalprice = totalprice + 200;
    break;
    case toppingz = "Black olives":
         totalprice = totalprice + 500;
    break;
    case toppingz = "Onions":
         totalprice = totalprice + 500;
    break;
    case toppingz = "Bacon":
         totalprice = totalprice + 500;
    break;
    case toppingz = "Green peppers":
         totalprice = totalprice + 500;
    break;
    }
    console.log(totalprice);
    });
$("select#size").val("");
$("select#size1").val("");
$("select#size2").val("");
$("input#size3").val("");
    
});
    
$("#delivery").click(function(){
      
  var location = prompt("enter your location");
  alert("thank you, your order will be processed and be delivered to you in 1 hour at "+location );
});
    
});
    