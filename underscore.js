var car1 = {
  brandName:'Audi',
  model:"A6",
  productionYear:2016
};
var car2 = {
  brandName:'Jeep',
  model:"Grand Cherokee",
  productionYear:2019
};
var car3 = {
  brandName:'Porsche',
  model:"Cayenne",
  productionYear:2019
};
var car4 = {
  brandName: 'Porsche',
  model:"Cayenne",
  productionYear:2017
};
var car5 = {
  brandName:'Audi',
  model:"Q8",
  productionYear:2014
};

var garage = [car1, car2, car3, car4, car5];

console.log('Grouped by brand');
var brands = _.groupBy(garage,function(obj){return obj.brandName});
_.each(brands,console.log);

console.log('Grouped by model');
var models = _.groupBy(garage,function(obj){return obj.model});
_.each(models,console.log);

console.log('Group by productionYear');
var years = _.groupBy(garage,function(obj){return obj.productionYear});
_.each(years,console.log);

console.log('Filtred by productionYear');
var yourYear = prompt('enter productionYear');
var filtredByYear = _.filter(garage,function(obj){return obj.productionYear == yourYear});
_.each(filtredByYear,console.log);

console.log('Max productionYear');
var maxYear = _.max(garage,function(obj){return obj.productionYear})
console.log(maxYear);

console.log('Min productionYear');
var minYear = _.min(garage,function(obj){return obj.productionYear})
console.log(minYear);
