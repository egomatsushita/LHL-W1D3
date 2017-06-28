/*
- return an object with the name property of each location and a nested object with sales and taxes properties
*/

var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [100, 200, 400]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [80, 20, 10, 100, 90, 500]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [500, 100]
  },
];

function calculateSalesTax(salesData, taxRates) {
  var companies = {};

  for(var location of companySalesData) {
    var province = location.province;
    var name = location.name;
    var salesArray = location.sales;
    var tax = salesTaxRates[province];

    if(!companies[name]) {
      companies[name] = {totalSales: 0, totalTaxes: 0};
    }

    for(var sale of salesArray) {
      Object.keys(companies).forEach(function(s) {
        if(s === name) {
          companies[name]['totalSales'] += sale;
          companies[name]['totalTaxes'] += sale * tax;
          }
      });
    }
  }

  return companies;
}

var results = calculateSalesTax(companySalesData, salesTaxRates);
console.log(results);