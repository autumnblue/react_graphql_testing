const express = require('express');
const cors = require('cors');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');
const PORT = 4000;

const { nutrition } = require('./mock');
let nutritionList = [...nutrition];

const schema = buildSchema(`  
  type Query {
    nutrition: [Nutrition]
  }

  type Mutation {
    addNutrition(newNutrition: NutritionInput): [Nutrition]
    deleteNutrition(ids: [ID]!): [Nutrition]
    reset: [Nutrition]
  }

  type Nutrition {
    id: ID
    name: String
    info: NutritionInfo
  }

  type NutritionInfo {
    calories: Int
    fat: Int
    carbs: Int
    protein: Int
  }

  input NutritionInput {    
    id: ID!
    name: String
    info: NutritionInfoInput
  }

  input NutritionInfoInput {
    calories: Int
    fat: Int
    carbs: Int
    protein: Int
  }
`);

const root = {
  nutrition: () => nutritionList,

  reset: () => {
    nutritionList = [...nutrition];
    return nutritionList;
  },

  addNutrition: ({ newNutrition }) => {
    nutritionList.push(newNutrition);
    return nutritionList;
  },

  deleteNutrition: ({ ids }) => {
    nutritionList = nutritionList.filter(({ id }) => !ids.includes(id));
    return nutritionList;
  },
};

const app = express();

app.use(cors());
app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);

app.listen(PORT, () => console.log(`Running an API server at http://localhost:${PORT}/graphql`));
