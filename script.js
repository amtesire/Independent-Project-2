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