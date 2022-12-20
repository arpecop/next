/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateJoke = /* GraphQL */ `
  subscription OnCreateJoke($filter: ModelSubscriptionJokeFilterInput) {
    onCreateJoke(filter: $filter) {
      id
      joke
      cat
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateJoke = /* GraphQL */ `
  subscription OnUpdateJoke($filter: ModelSubscriptionJokeFilterInput) {
    onUpdateJoke(filter: $filter) {
      id
      joke
      cat
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteJoke = /* GraphQL */ `
  subscription OnDeleteJoke($filter: ModelSubscriptionJokeFilterInput) {
    onDeleteJoke(filter: $filter) {
      id
      joke
      cat
      createdAt
      updatedAt
    }
  }
`;
export const onCreateApp = /* GraphQL */ `
  subscription OnCreateApp($filter: ModelSubscriptionAppFilterInput) {
    onCreateApp(filter: $filter) {
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
export const onUpdateApp = /* GraphQL */ `
  subscription OnUpdateApp($filter: ModelSubscriptionAppFilterInput) {
    onUpdateApp(filter: $filter) {
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
export const onDeleteApp = /* GraphQL */ `
  subscription OnDeleteApp($filter: ModelSubscriptionAppFilterInput) {
    onDeleteApp(filter: $filter) {
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
