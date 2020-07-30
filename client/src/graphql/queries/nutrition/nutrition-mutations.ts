import gql from 'graphql-tag';
import { nutritionFragment } from 'graphql/fragments/nutrition/nutrition.fragment';

export const CREATE_NUTRITION = gql`
  mutation($newNutrition: NutritionInput!) {
    addNutrition(newNutrition: $newNutrition) {
      ...NutritionFragment
    }
  }
  ${nutritionFragment}
`;

export const DELETE_NUTRITION = gql`
  mutation($ids: [ID]!) {
    deleteNutrition(ids: $ids) {
      ...NutritionFragment
    }
  }
  ${nutritionFragment}
`;

export const RESET_NUTRITION = gql`
  mutation {
    reset {
      ...NutritionFragment
    }
  }
  ${nutritionFragment}
`;
