const { Nutrition, NutritionInfo } = require('./models');
const uuid = require('uuid');

const oreo = new Nutrition(uuid.v4(), 'Oreo', new NutritionInfo(437, 18, 63, 4));
const nougat = new Nutrition(uuid.v4(), 'Nougat', new NutritionInfo(360, 19, 9, 37));

const nutrition = [oreo, nougat];

module.exports = { nutrition };
