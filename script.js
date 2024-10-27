

// Declaration d'objets
class Product{
    constructor(id,name,price) {
    this.id=id;
    this.name=name;
    this.price=price;

}
}

class ShoppingCardItem{
    constructor(Product,quantity){
        this.product=product;
        this.quantity=quantity;
    }

}

class ShoppingCard{
    constructor(){
        this.items=[];
    }
    


calculateTotalPrice(){
    return this.product.price*this.quantity;
}
}


addItem(product,quantity=1);{
    const existingitem=this.items.find(item=>item.prodcut.id===product.id);
    if (existingitem){
        existingitem.quantity+=quantity;

    } else{
        const newItem= new ShoppingCardItem(product,quantity)
        this.items.push(newItem);
    }
}

removeItem(productId){
   this.items=this.items.filter(item => item.product.id !== productId);

   
}



