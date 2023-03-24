const orders = [];

class Order {
    constructor(customer, date, quantity, item) {
        this.customer_name = customer;
        this.order_date = date;
        this.item_name = item;
        this.order_quantity = quantity;
    }
}

orders.push( new Order("jeff", "may 4", 5, 'the hobbit'))
orders.push( new Order("harry", "sep 3", 80, 'the knife of never letting go'))
orders.push( new Order("lenny", "dec 18", 43, 'how to train your dragon'))
orders.push( new Order("maddie", "mar 6", 101, 'the deathly hallows'))



document.addEventListener('DOMContentLoaded', ()=>{
    const list = document.querySelector('#orders-list')

    /* 
        orderElement {
            name
                orderdetails {
                    orderDetailElement
                    orderDetailElement
                    ...
                }  
            
        }
    */

    for(let order of orders) {
        const orderElement = document.createElement('li');
        orderElement.textContent = order.customer_name;
        
        const orderDetails = document.createElement('ul');
        for(detail in order) {
            if ( detail != 'customer_name' ) {
                const orderDetailElement = document.createElement('li');
                orderDetailElement.textContent = `${detail}: ${order[detail]}`;
                orderDetails.appendChild(orderDetailElement);
            }
        }
        orderElement.appendChild(orderDetails)
        list.appendChild(orderElement)
    }
})