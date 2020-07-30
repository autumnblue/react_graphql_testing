import gql from 'graphql-tag';

export const nutritionFragment = gql`
  fragment NutritionFragment on Nutrition {
    id
    name
    info {
      calories
      carbs
      fat
      protein
    }
  }
`;
