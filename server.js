const express = require('express');
const cors = require('cors');
const port = 3333;

const server = express();
server.use(express.json());
server.use(cors());

const sendUserError = (msg, res) => {
  res.status(422);
  res.json({ Error: msg });
  return;
};

let countries = [
  {
    name: 'United States',
    population: 37000000,
    land_area: 45000,
    id: 0
  }
];

server.get('/countries', (req, res) => {
  res.json(countries);
});
let countryId = countries.length;

server.post('/countries', (req, res) => {
  const { name, population, land_area } = req.body;
  const newCountry = { name, population, land_area, id: countryId };
  if (!name || !population || !land_area) {
    return sendUserError(
      'Name/Population/land_area are all required to create a country in the country DB.',
      res
    );
  }
  const findCountryByName = country => {
    return country.name === name;
  };
  if (countries.find(findCountryByName)) {
    return sendUserError(
      `${name} already exists in the country DB.`,
      res
    );
  }

  countries.push(newCountry);
  countryId++;
  res.json(countries);
});

server.put('/countries/:id', (req, res) => {
  const { id } = req.params;
  const { name, population, land_area } = req.body;
  const findCountryById = country => {
    return country.id == id;
  };
  const foundCountry = countries.find(findCountryById);
  if (!foundCountry) {
    return sendUserError('No Country found by that ID', res);
  } else {
    if (name) foundCountry.name = name;
    if (population) foundCountry.population = population;
    if (land_area) foundCountry.land_area = land_area;
    res.json(countries);
  }
});

server.delete('/countries/:id', (req, res) => {
  const { id } = req.params;
  const foundCountry = countries.find(country => country.id == id);

  if (foundCountry) {
    const CountryRemoved = { ...foundCountry };
    countries = countries.filter(country => country.id != id);
    res.status(200).json(countries);
  } else {
    sendUserError('No country by that ID exists in the country DB', res);
  }
});

server.listen(port, err => {
  if (err) console.log(err);
  console.log(`server is listening on port ${port}`);
});
