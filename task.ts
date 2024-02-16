interface customerTypes{   //type of the properties for every customer
    id:number,
    name:string,
    email:string,
    location:{
        city:string,
        country:string
    }
}

interface orderTypes{
    orderId:number,
    customerId:number,
    product:string,
    quantity:number,
    price:number
}

let customers: customerTypes[]=[   //customerTypes is the datatype of every object, but as we creted the array of objects, we use array notation []
    { id: 1, name: 'Alice', email: 'alice@example.com', location: { city: 'New York', country: 'USA' } },
    { id: 2, name: 'Bob', email: 'bob@example.com', location: { city: 'Paris', country: 'France' } },
    { id: 3, name: 'Zafrina', email: 'zaf@example.com', location: { city: 'Rome', country: 'Italy' } },
    { id: 4, name: 'Charlie', email: 'charlie@example.com', location: { city: 'Berlin', country: 'Germany' } },
    { id: 5, name: 'David', email: 'david@example.com', location: { city: 'London', country: 'UK' } },
]


let orders: orderTypes[]=[
    { orderId: 101, customerId: 1, product: 'Laptop', quantity: 1, price: 1200 },
    { orderId: 102, customerId: 2, product: 'Smartphone', quantity: 2, price: 800 },
    { orderId: 103, customerId: 3, product: 'Tablet', quantity: 1, price: 500 },
    { orderId: 104, customerId: 4, product: 'Headphones', quantity: 1, price: 150 },
    { orderId: 105, customerId: 5, product: 'Camera', quantity: 1, price: 900 },
  ]
  

//task1
const emailArray:string[]=customers.map(customer=>customer.email) //email type is string, but as ve create the array of string, we add array mark []
console.log("\n emails of customers:",emailArray);

////task2
const filterArray: orderTypes[]=orders.filter(order=>order.quantity*order.price>1000) // it return filtered orders array, so we should use orderTypes as a type
console.log("\n all orders with a total value greater than $1000:",filterArray);

//task3

orders.forEach(order=>{
  const cName:string=customers.find(customer=> order.customerId===customer.id)!.name  // i added! mark because in this task, there is definetly same number of customers and orders accordingly to their id number, so it will never return undefined
  console.log(`Order ${order.customerId} by ${cName}: ${order.quantity} x ${order.product} for ${order.price}$ each.`)
})

//task4
const findIndexOfOrder=(id:number)=>{
  return orders.findIndex(order=>order["orderId"]===id)
}
console.log(findIndexOfOrder(102));

//task 5
//checking

const checking=(country:string)=>{
  return customers.some(customer=>customer["location"]["country"]===country)
}
console.log(checking("USA"));


//task6

const findingCustomerName=(customerId:number)=>{
  const foundCustomer=customers.find(customer => customerId===customer.id)
  return foundCustomer!.name
}

//task7-sorting
const sortedArray: customerTypes[]=[...customers].sort((a,b)=>{ //by using rest operator, i copied the array and used it directly
    const x=a.name;
    const y=b.name;
    if(x>y){ 
        return 1
    }
    if(x<y){
        return -1
    }
    return 0
})
console.log(sortedArray);
