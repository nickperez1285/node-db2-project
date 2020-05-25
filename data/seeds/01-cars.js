
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
    {
      
        "VIN": "12312321",
        "make": "honda",
        "model": "civic",
        "mileage": 123123,
        "transmission": null,
        "status": null
    },   
     {
      
        "VIN": "12312321",
        "make": "jeep",
        "model": "kneebee",
        "mileage": 123123,
        "transmission": null,
        "status": null
    },
    {
    
        "VIN": "123124wa321",
        "make": "acura",
        "model": "integra",
        "mileage": 3423,
        "transmission": null,
        "status": null
    }
]);
    });
};
