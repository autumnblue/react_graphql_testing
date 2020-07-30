import gql from 'graphql-tag';
import { nutritionFragment } from 'graphql/fragments/nutrition/nutrition.fragment';

export const GET_NUTRITION = gql`
  query GetNutrition {
    nutrition {
      ...NutritionFragment
    }
  }
  ${nutritionFragment}
`;
