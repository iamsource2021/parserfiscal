/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getScheduled = /* GraphQL */ `
  query GetScheduled($id: ID!) {
    getScheduled(id: $id) {
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
export const listScheduleds = /* GraphQL */ `
  query ListScheduleds(
    $id: ID
    $filter: ModelScheduledFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listScheduleds(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
      nextToken
    }
  }
`;
