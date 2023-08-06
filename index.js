// Car marketplace data
const agencies = [ const agencies = [
    {
      agencyName: "Best Deal",
      cash: 1245000,
      credit: 200000,
      agencyId: "Plyq5M5AZ",
  
      cars: [
        {
          brand: "bmw",
          models: [
            {
              name: "3",
              year: 2015,
              price: 137000,
              carNumber: "AZJZ4",
              ownerId: "Plyq5M5AZ",
            },
            {
              name: "X6",
              year: 2020,
              price: 966500,
              carNumber: "S6DL1",
              ownerId: "Plyq5M5AZ",
            },
          ],
        },
        {
          brand: "toyota",
          models: [
            {
              name: "Land Cruiser",
              year: 2020,
              price: 336300,
              carNumber: "6rvXw",
              ownerId: "Plyq5M5AZ",
            },
            {
              name: "Hilux",
              year: 2005,
              price: 35005,
              carNumber: "MWXBG",
              ownerId: "Plyq5M5AZ",
            },
            {
              name: "Corolla",
              year: 2020,
              price: 111900,
              carNumber: "hCzl-",
              ownerId: "Plyq5M5AZ",
            },
          ],
        },
        {
          brand: "Ford",
          models: [
            {
              name: "Focus",
              year: 2020,
              price: 98200,
              carNumber: "kN3HP",
              ownerId: "Plyq5M5AZ",
            },
            {
              name: "Focus",
              year: 2005,
              price: 6502,
              carNumber: "LJTCs",
              ownerId: "Plyq5M5AZ",
            },
          ],
        },
        {
          brand: "Alpha romeo",
          models: [
            {
              name: "Romeo Julia",
              year: 2020,
              price: 275406,
              carNumber: "2kjy7",
              ownerId: "Plyq5M5AZ",
            },
            {
              name: "Romeo Stelvio",
              year: 2019,
              price: 215403,
              carNumber: "7A5b-",
              ownerId: "Plyq5M5AZ",
            },
          ],
        },
        {
          brand: "Chevrolet",
          models: [
            {
              name: "Traverse",
              year: 2020,
              price: 201102,
              carNumber: "QwBOT",
              ownerId: "Plyq5M5AZ",
            },
            {
              name: "Impala",
              year: 2019,
              price: 165041,
              carNumber: "2v4jt",
              ownerId: "Plyq5M5AZ",
            },
            {
              name: "Malibu",
              year: 2017,
              price: 75405,
              carNumber: "O4_Jv",
              ownerId: "Plyq5M5AZ",
            },
          ],
        },
      ],
    },
    {
      agencyName: "CarMax",
      cash: 968541,
      credit: 500000,
      agencyId: "26_IPfHU1",
      cars: [
        {
          brand: "bmw",
          models: [
            {
              name: "X5",
              year: 2015,
              price: 218000,
              carNumber: "4Ixb0",
              ownerId: "26_IPfHU1",
            },
            {
              name: "X6",
              year: 2014,
              price: 97100,
              carNumber: "kAnv-",
              ownerId: "26_IPfHU1",
            },
            {
              name: "Z4",
              year: 2019,
              price: 296900,
              carNumber: "ISMdU",
              ownerId: "26_IPfHU1",
            },
            {
              name: "3",
              year: 2010,
              price: 75100,
              carNumber: "9DJPw",
              ownerId: "26_IPfHU1",
            },
          ],
        },
        {
          brand: "toyota",
          models: [
            {
              name: "Land Cruiser",
              year: 2005,
              price: 80540,
              carNumber: "Kt-pW",
              ownerId: "26_IPfHU1",
            },
            {
              name: "Corolla",
              year: 2019,
              price: 109100,
              carNumber: "YiYdI",
              ownerId: "26_IPfHU1",
            },
            {
              name: "Hilux",
              year: 2019,
              price: 204000,
              carNumber: "DRmNw",
              ownerId: "26_IPfHU1",
            },
          ],
        },
        {
          brand: "Ford",
          models: [
            {
              name: "F250",
              year: 2020,
              price: 198500,
              carNumber: "g4Wfp",
              ownerId: "26_IPfHU1",
            },
            {
              name: "Explorer",
              year: 2020,
              price: 265200,
              carNumber: "iNT8Q",
              ownerId: "26_IPfHU1",
            },
          ],
        },
        {
          brand: "Alpha romeo",
          models: [
            {
              name: "Spider",
              year: 2011,
              price: 75405,
              carNumber: "6t7QU",
              ownerId: "26_IPfHU1",
            },
            {
              name: "166",
              year: 2002,
              price: 12400,
              carNumber: "XMqpn",
              ownerId: "26_IPfHU1",
            },
          ],
        },
        {
          brand: "Chevrolet",
          models: [
            {
              name: "Impala",
              year: 2016,
              price: 65042,
              carNumber: "vbeAo",
              ownerId: "26_IPfHU1",
            },
            {
              name: "Savannah",
              year: 2016,
              price: 76505,
              carNumber: "WelWa",
              ownerId: "26_IPfHU1",
            },
          ],
        },
      ],
    },
    {
      agencyName: "The Auto World",
      cash: 687450,
      credit: 200000,
      agencyId: "gNHjNFL12",
      cars: [
        {
          brand: "bmw",
          models: [
            {
              name: "X6",
              year: 2018,
              price: 548100,
              carNumber: "EMW_7",
              ownerId: "gNHjNFL12",
            },
            {
              name: "3",
              year: 2017,
              price: 178000,
              carNumber: "XlnB4",
              ownerId: "gNHjNFL12",
            },
          ],
        },
        {
          brand: "toyota",
          models: [
            {
              name: "Prius",
              year: 2017,
              price: 101542,
              carNumber: "-RQgN",
              ownerId: "gNHjNFL12",
            },
            {
              name: "Highlander",
              year: 2017,
              price: 202540,
              carNumber: "AZJZ4",
              ownerId: "gNHjNFL12",
            },
            {
              name: "Corolla",
              year: 1996,
              price: 5420,
              carNumber: "kHE8f",
              ownerId: "gNHjNFL12",
            },
            {
              name: "Corolla",
              year: 2012,
              price: 40570,
              carNumber: "p2qEi",
              ownerId: "gNHjNFL12",
            },
          ],
        },
        {
          brand: "Ford",
          models: [
            {
              name: "Explorer",
              year: 2014,
              price: 127502,
              carNumber: "Ty1zN",
              ownerId: "gNHjNFL12",
            },
            {
              name: "F350",
              year: 2012,
              price: 54250,
              carNumber: "z03H2",
              ownerId: "gNHjNFL12",
            },
          ],
        },
        {
          brand: "Chevrolet",
          models: [
            {
              name: "Savannah",
              year: 2010,
              price: 36504,
              carNumber: "RXFZe",
              ownerId: "gNHjNFL12",
            },
            {
              name: "Malibu",
              year: 2009,
              price: 19585,
              carNumber: "K5IsM",
              ownerId: "gNHjNFL12",
            },
          ],
        },
      ],
    },
    {
      agencyName: "Car Werks",
      cash: 302502,
      credit: 150000,
      agencyId: "9KeaYbRLP",
      cars: [
        {
          brand: "bmw",
          models: [
            {
              name: "8",
              year: 2020,
              price: 942500,
              carNumber: "4IUMz",
              ownerId: "9KeaYbRLP",
            },
            {
              name: "X6",
              year: 2010,
              price: 129000,
              carNumber: "Vw0fV",
              ownerId: "9KeaYbRLP",
            },
            {
              name: "X3",
              year: 2019,
              price: 358100,
              carNumber: "ufN54",
              ownerId: "9KeaYbRLP",
            },
            {
              name: "3",
              year: 2020,
              price: 389100,
              carNumber: "F127X",
              ownerId: "9KeaYbRLP",
            },
            {
              name: "3",
              year: 2002,
              price: 18400,
              carNumber: "ueZUp",
              ownerId: "9KeaYbRLP",
            },
          ],
        },
        {
          brand: "toyota",
          models: [
            {
              name: "Prius",
              year: 2011,
              price: 38520,
              carNumber: "AZJZ4",
              ownerId: "9KeaYbRLP",
            },
            {
              name: "Land Cruiser",
              year: 2019,
              price: 290040,
              carNumber: "AZJZ4",
              ownerId: "9KeaYbRLP",
            },
            {
              name: "Hilux",
              year: 2020,
              price: 215700,
              carNumber: "xig8N",
              ownerId: "9KeaYbRLP",
            },
            {
              name: "Hilux",
              year: 2015,
              price: 178506,
              carNumber: "ghTiQ",
              ownerId: "9KeaYbRLP",
            },
            {
              name: "Corolla",
              year: 2002,
              price: 8504,
              carNumber: "Mvw8T",
              ownerId: "9KeaYbRLP",
            },
          ],
        },
        {
          brand: "Chevrolet",
          models: [
            {
              name: "Impala",
              year: 2005,
              price: 9320,
              carNumber: "BZpkt",
              ownerId: "9KeaYbRLP",
            },
            {
              name: "Malibu",
              year: 2002,
              price: 4502,
              carNumber: "KqKV_",
              ownerId: "9KeaYbRLP",
            },
          ],
        },
      ],
    },
    {
      agencyName: "Carsova",
      cash: 72450,
      credit: 50000,
      agencyId: "oqQmsZoUo",
      cars: [
        {
          brand: "bmw",
          models: [
            {
              name: "7",
              year: 1999,
              price: 24700,
              carNumber: "sZrjp",
              ownerId: "oqQmsZoUo",
            },
            {
              name: "3",
              year: 2008,
              price: 54000,
              carNumber: "da88K",
              ownerId: "oqQmsZoUo",
            },
          ],
        },
        {
          brand: "toyota",
          models: [
            {
              name: "Prius",
              year: 2019,
              price: 124050,
              carNumber: "ZfbqH",
              ownerId: "oqQmsZoUo",
            },
            {
              name: "Hilux",
              year: 1996,
              price: 11540,
              carNumber: "AZJZ4",
              ownerId: "oqQmsZoUo",
            },
          ],
        },
      ],
    },
  ] ];

// 1 Function to search for a car agency by its name or ID
function searchAgency(query) {
  const agency = agencies.find(
    (agency) =>
      agency.agencyName.toLowerCase() === query.toLowerCase() ||
      agency.agencyId === query
  );

  return agency ? agency : "Agency not found.";
}

// 2 Function to retrieve all agencies' names
function getAllAgenciesNames() {
  return agencies.map((agency) => agency.agencyName);
}

// 3 Function to add a new car to an agency's inventory
function addCarToAgency(agencyId, carData) {
  const agency = agencies.find((agency) => agency.agencyId === agencyId);

  if (agency) {
    agency.cars.push(carData);
    return "Car added successfully.";
  } else {
    return "Agency not found.";
  }
}

// 4 Function to remove a car from an agency's inventory
function removeCarFromAgency(agencyId, carNumber) {
  const agency = agencies.find((agency) => agency.agencyId === agencyId);

  if (agency) {
    const carIndex = agency.cars.findIndex(
      (car) => car.carNumber === carNumber
    );
    if (carIndex !== -1) {
      agency.cars.splice(carIndex, 1);
      return "Car removed successfully.";
    } else {
      return "Car not found in the agency's inventory.";
    }
  } else {
    return "Agency not found.";
  }
}

// 5 Function to change the cash or credit of an agency
function updateAgencyFunds(agencyId, cash, credit) {
  const agency = agencies.find((agency) => agency.agencyId === agencyId);

  if (agency) {
    agency.cash = cash;
    agency.credit = credit;
    return "Agency funds updated successfully.";
  } else {
    return "Agency not found.";
  }
}

// 6 Function to update the price of a specific car in an agency
function updateCarPrice(agencyId, carNumber, newPrice) {
  const agency = agencies.find((agency) => agency.agencyId === agencyId);

  if (agency) {
    const car = agency.cars.find((car) => car.carNumber === carNumber);

    if (car) {
      car.price = newPrice;
      return "Car price updated successfully.";
    } else {
      return "Car not found in the agency's inventory.";
    }
  } else {
    return "Agency not found.";
  }
}

// 7 Function to calculate and return the total revenue for a specific agency
function getTotalAgencyRevenue(agencyId) {
  const agency = agencies.find((agency) => agency.agencyId === agencyId);

  if (agency) {
    const totalRevenue = agency.cars.reduce(
      (acc, car) => acc + car.price,
      0
    );
    return totalRevenue;
  } else {
    return "Agency not found.";
  }
}

// 8 Function to transfer a car from one agency to another
function transferCarBetweenAgencies(fromAgencyId, toAgencyId, carNumber) {
  const fromAgency = agencies.find((agency) => agency.agencyId === fromAgencyId);
  const toAgency = agencies.find((agency) => agency.agencyId === toAgencyId);

  if (fromAgency && toAgency) {
    const carIndex = fromAgency.cars.findIndex(
      (car) => car.carNumber === carNumber
    );

    if (carIndex !== -1) {
      const car = fromAgency.cars.splice(carIndex, 1)[0];
      toAgency.cars.push(car);
      return "Car transferred successfully.";
    } else {
      return "Car not found in the source agency's inventory.";
    }
  } else {
    return "One or both agencies not found.";
  }
}

// Testing the functions
console.log(searchAgency("CarMax")); // Search for agency by name
console.log(getAllAgenciesNames()); // Get all agencies' names

const newCarData = {
  brand: "Toyota",
  models: [
    {
      name: "Camry",
      year: 2021,
      price: 30000,
      carNumber: "ABC123",
      ownerId: "someAgencyId",
    },
  ],
};

console.log(addCarToAgency("Plyq5M5AZ", newCarData)); // Add car to agency
console.log(removeCarFromAgency("26_IPfHU1", "kAnv-")); // Remove car from agency

console.log(updateAgencyFunds("gNHjNFL12", 800000, 300000)); // Update agency funds
console.log(updateCarPrice("9KeaYbRLP", "4IUMz", 950000)); // Update car price

console.log(getTotalAgencyRevenue("oqQmsZoUo")); // Get total agency revenue

console.log(transferCarBetweenAgencies("Plyq5M5AZ", "26_IPfHU1", "S6DL1")); // Transfer car between agencies







// Customers data
const customers = [ const customers = [
    {
      name: "Lilah Goulding",
      id: "BGzHhjnE8",
      cars: [
        {
          name: "Corolla",
          year: 2013,
          price: 40570,
          carNumber: "16da1",
          ownerId: "BGzHhjnE8",
        },
      ],
      cash: 35000,
    },
    {
      name: "Ravi Murillo",
      id: "2RprZ1dbL",
      cars: [
        {
          name: "M5",
          year: 2019,
          price: 578054,
          carNumber: "WIh0U",
          ownerId: "2RprZ1dbL",
        },
        {
          name: "Spider",
          year: 2012,
          price: 81520,
          carNumber: "RLS4q",
          ownerId: "2RprZ1dbL",
        },
      ],
      cash: 278542,
    },
    {
      name: "Aleksander Carr",
      id: "pAuFtn_WA",
      cars: [
        {
          name: "Highlander",
          year: 2018,
          price: 214503,
          carNumber: "2WU_y",
          ownerId: "pAuFtn_WA",
        },
      ],
      cash: 125402,
    },
    {
      name: "Lana Edge",
      id: "cnTobUDy6",
      cars: [
        {
          name: "F250",
          year: 2020,
          price: 198500,
          carNumber: "Xxcy_",
          ownerId: "cnTobUDy6",
        },
        {
          name: "Hilux",
          year: 2005,
          price: 35005,
          carNumber: "VSCUj",
          ownerId: "cnTobUDy6",
        },
      ],
      cash: 7000,
    },
    {
      name: "Nikita Philip",
      id: "5x2tMcX4R",
      cars: [
        {
          name: "Impala",
          year: 2016,
          price: 65042,
          carNumber: "LKInp",
          ownerId: "5x2tMcX4R",
        },
      ],
      cash: 40541,
    },
    {
      name: "Bob Steel",
      id: "Wm6BkA1F0",
      cars: [],
      cash: 15732,
    },
    {
      name: "Will Reyes",
      id: "FQvNsEwLZ",
      cars: [
        { name: "X6", year: 2020, price: 966500, ownerId: "FQvNsEwLZ" },
        {
          name: "Land Cruiser",
          year: 2020,
          price: 336300,
          carNumber: "vaJvd",
          ownerId: "FQvNsEwLZ",
        },
        {
          name: "Romeo Julia",
          year: 2020,
          price: 275406,
          carNumber: "qLoYR",
          ownerId: "FQvNsEwLZ",
        },
        {
          name: "Explorer",
          year: 2020,
          price: 265200,
          carNumber: "tlGRq",
          ownerId: "FQvNsEwLZ",
        },
      ],
      cash: 1547242,
    },
  ] ];

// 9 Function to search for a customer by their name or ID
function searchCustomer(query) {
  const customer = customers.find(
    (customer) =>
      customer.name.toLowerCase() === query.toLowerCase() ||
      customer.id === query
  );

  return customer ? customer : "Customer not found.";
}

// 10 Function to retrieve all customers names
function getAllCustomersNames() {
  return customers.map((customer) => customer.name);
}

// 11 Function to change the cash of a customer
function updateCustomerCash(customerId, newCash) {
  const customer = customers.find((customer) => customer.id === customerId);

  if (customer) {
    customer.cash = newCash;
    return "Customer cash updated successfully.";
  } else {
    return "Customer not found.";
  }
}

// 12 Function to calculate the total value of all cars owned by a specific customer
function getCustomerTotalCarValue(customerId) {
  const customer = customers.find((customer) => customer.id === customerId);

  if (customer) {
    const totalCarValue = customer.cars.reduce(
      (acc, car) => acc + car.price,
      0
    );
    return totalCarValue;
  } else {
    return "Customer not found.";
  }
}

// Testing the functions
console.log(searchCustomer("Lana Edge")); // Search for customer by name
console.log(getAllCustomersNames()); // Get all customers' names

console.log(updateCustomerCash("2RprZ1dbL", 300000)); // Update customer cash

console.log(getCustomerTotalCarValue("FQvNsEwLZ")); // Get total car value of a customer










// 13 Car Operations
function getAllCarsAvailableForPurchase() {
    const allCars = agencies.flatMap((agency) =>
      agency.cars.flatMap((car) =>
        car.models.filter((model) => !model.ownerId)
      )
    );
  
    return allCars;
  }
  // 14 

  function searchCars(criteria) {
    const { year, price, brand } = criteria;
  
    const filteredCars = agencies.flatMap((agency) =>
      agency.cars.flatMap((car) =>
        car.models.filter((model) => {
          if (year && model.year !== year) return false;
          if (price && model.price > price) return false;
          if (brand && model.brand.toLowerCase() !== brand.toLowerCase())
            return false;
          return !model.ownerId;
        })
      )
    );
  
    return filteredCars;
  }
  
  // 15 

  function getMostExpensiveCar() {
    const allCars = getAllCarsAvailableForPurchase();
  
    if (allCars.length === 0) return "No cars available for purchase.";
  
    const mostExpensiveCar = allCars.reduce((prevCar, currentCar) =>
      prevCar.price > currentCar.price ? prevCar : currentCar
    );
  
    return mostExpensiveCar;
  }
  
  // 16

  function getCheapestCar() {
    const allCars = getAllCarsAvailableForPurchase();
  
    if (allCars.length === 0) return "No cars available for purchase.";
  
    const cheapestCar = allCars.reduce((prevCar, currentCar) =>
      prevCar.price < currentCar.price ? prevCar : currentCar
    );
  
    return cheapestCar;
  }
  
  // Testing the car operations
  console.log(getAllCarsAvailableForPurchase()); // Retrieve all cars available for purchase
  
  console.log(
    searchCars({ year: 2020, price: 150000, brand: "Toyota" })
  ); // Search for cars based on criteria
  
  console.log(getMostExpensiveCar()); // Get the most expensive car available for sale
  console.log(getCheapestCar()); // Get the cheapest car available for sale
  



  





// 17 Car Purchase Operations
function sellCar(customerId, carNumber) {
    const customer = customers.find((customer) => customer.id === customerId);
    const carToSell = agencies.flatMap((agency) =>
      agency.cars.flatMap((car) =>
        car.models.find((model) => model.carNumber === carNumber && !model.ownerId)
      )
    );
  
    if (!customer) return "Customer not found.";
    if (carToSell.length === 0) return "Car not found or already sold.";
    if (customer.cash < carToSell[0].price) return "Customer does not have enough cash.";
  
    const agency = agencies.find((agency) => agency.agencyId === carToSell[0].ownerId);
    const carIndex = agency.cars
      .flatMap((car) => car.models)
      .findIndex((model) => model.carNumber === carNumber);
  
    if (carIndex === -1) return "Error in selling the car.";
  
    const soldCar = agency.cars
      .flatMap((car) => car.models)
      .splice(carIndex, 1)[0];
    soldCar.ownerId = customerId;
    customer.cash -= soldCar.price;
    agency.cash += soldCar.price;
  
    return "Car sold successfully.";
  }
  
  // 18 
  
  function getTotalMarketRevenue() {
    const totalMarketRevenue = agencies.reduce(
      (totalRevenue, agency) =>
        totalRevenue + getTotalAgencyRevenue(agency.agencyId),
      0
    );
  
    return totalMarketRevenue;
  }
  
  // Testing the car purchase operations
  console.log(sellCar("2RprZ1dbL", "WIh0U")); // Sell car to a specific customer
  console.log(sellCar("FQvNsEwLZ", "tlGRq")); // Sell another car to a different customer
  
  console.log(getTotalMarketRevenue()); // Calculate the total revenue of the entire market
  