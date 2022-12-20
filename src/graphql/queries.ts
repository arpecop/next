/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getJoke = /* GraphQL */ `
  query GetJoke($id: ID!) {
    getJoke(id: $id) {
      id
      joke
      cat
      createdAt
      updatedAt
    }
  }
`;
export const listJokes = /* GraphQL */ `
  query ListJokes(
    $filter: ModelJokeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listJokes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        joke
        cat
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getApp = /* GraphQL */ `
  query GetApp($id: ID!) {
    getApp(id: $id) {
      id
      cat
      subcat
      price
      location
      createdAt
      Jokes {
        nextToken
      }
      updatedAt
    }
  }
`;
export const listApps = /* GraphQL */ `
  query ListApps(
    $filter: ModelAppFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listApps(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        cat
        subcat
        price
        location
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const jokesByCat = /* GraphQL */ `
  query JokesByCat(
    $cat: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelJokeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    jokesByCat(
      cat: $cat
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        joke
        cat
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
