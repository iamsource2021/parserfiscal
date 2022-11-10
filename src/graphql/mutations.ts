/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createScheduledCustom = /* GraphQL */ `
  mutation CreateScheduledCustom(
    $email: String!
    $mobile: String!
    $name: String!
    $start: String!
  ) {
    createScheduledCustom(
      email: $email
      mobile: $mobile
      name: $name
      start: $start
    ) {
      id
      email
      mobile
      name
      lifetime
      start
      end
    }
  }
`;
export const createScheduled = /* GraphQL */ `
  mutation CreateScheduled(
    $input: CreateScheduledInput!
    $condition: ModelScheduledConditionInput
  ) {
    createScheduled(input: $input, condition: $condition) {
      id
      email
      mobile
      name
      lifetime
      start
      end
      createdAt
      updatedAt
    }
  }
`;
export const updateScheduled = /* GraphQL */ `
  mutation UpdateScheduled(
    $input: UpdateScheduledInput!
    $condition: ModelScheduledConditionInput
  ) {
    updateScheduled(input: $input, condition: $condition) {
      id
      email
      mobile
      name
      lifetime
      start
      end
      createdAt
      updatedAt
    }
  }
`;
export const deleteScheduled = /* GraphQL */ `
  mutation DeleteScheduled(
    $input: DeleteScheduledInput!
    $condition: ModelScheduledConditionInput
  ) {
    deleteScheduled(input: $input, condition: $condition) {
      id
      email
      mobile
      name
      lifetime
      start
      end
      createdAt
      updatedAt
    }
  }
`;
