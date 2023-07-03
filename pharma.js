const timmy = {
    prescription: "acetaminophen",
    pricePerRefill: 25,
    refills: 3,
    subscription: false,
    coupon: true,
};

const sarah = {
    prescription: "diphenhydramine",
    pricePerRefill: 50,
    refills: 1,
    subscription: true,
    coupon: false,
}

const rocky = {
    prescription: "phenylephrine",
    pricePerRefill: 30,
    refills: 5,
    subscription: true,
    coupon: true,
}

// Define function that calculates total price before concessions:

const nameofperson = rocky;
const subs = 0.75
const coup = 10;

const subtotal = (nameofperson) => {
    return nameofperson.pricePerRefill * nameofperson.refills;
}

const subtotalcost = subtotal(nameofperson)

// Define function that applies concessions:

const total  = (subtotalcost, nameofperson) => {
    if (nameofperson.subscription && nameofperson.coupon) {
        return (subtotalcost*subs) - coup;
    }
    else if (nameofperson.subscription) {
        return subtotalcost * subs ;
    }
    else if (nameofperson.coupon){
        return subtotalcost - coup;
    }
    else { 
        return subtotalcost;
    }
}

// Return total cost:

console.log(total(subtotalcost, nameofperson))