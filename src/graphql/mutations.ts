/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createAd = /* GraphQL */ `
  mutation CreateAd($input: CreateAdInput!, $condition: ModelAdConditionInput) {
    createAd(input: $input, condition: $condition) {
      id
      title
      type
      cat
      condition
      currency
      data
      date
      location
      description
      images
      parrent
      phone
      physical
      price
      query
      slug
      source
      createdAt
      uid
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateAd = /* GraphQL */ `
  mutation UpdateAd($input: UpdateAdInput!, $condition: ModelAdConditionInput) {
    updateAd(input: $input, condition: $condition) {
      id
      title
      type
      cat
      condition
      currency
      data
      date
      location
      description
      images
      parrent
      phone
      physical
      price
      query
      slug
      source
      createdAt
      uid
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteAd = /* GraphQL */ `
  mutation DeleteAd($input: DeleteAdInput!, $condition: ModelAdConditionInput) {
    deleteAd(input: $input, condition: $condition) {
      id
      title
      type
      cat
      condition
      currency
      data
      date
      location
      description
      images
      parrent
      phone
      physical
      price
      query
      slug
      source
      createdAt
      uid
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createJoke = /* GraphQL */ `
  mutation CreateJoke(
    $input: CreateJokeInput!
    $condition: ModelJokeConditionInput
  ) {
    createJoke(input: $input, condition: $condition) {
      id
      nid
      cat
      joke
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateJoke = /* GraphQL */ `
  mutation UpdateJoke(
    $input: UpdateJokeInput!
    $condition: ModelJokeConditionInput
  ) {
    updateJoke(input: $input, condition: $condition) {
      id
      nid
      cat
      joke
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteJoke = /* GraphQL */ `
  mutation DeleteJoke(
    $input: DeleteJokeInput!
    $condition: ModelJokeConditionInput
  ) {
    deleteJoke(input: $input, condition: $condition) {
      id
      nid
      cat
      joke
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createNews = /* GraphQL */ `
  mutation CreateNews(
    $input: CreateNewsInput!
    $condition: ModelNewsConditionInput
  ) {
    createNews(input: $input, condition: $condition) {
      id
      title
      content
      image
      link
      nid
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateNews = /* GraphQL */ `
  mutation UpdateNews(
    $input: UpdateNewsInput!
    $condition: ModelNewsConditionInput
  ) {
    updateNews(input: $input, condition: $condition) {
      id
      title
      content
      image
      link
      nid
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteNews = /* GraphQL */ `
  mutation DeleteNews(
    $input: DeleteNewsInput!
    $condition: ModelNewsConditionInput
  ) {
    deleteNews(input: $input, condition: $condition) {
      id
      title
      content
      image
      link
      nid
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createTwusers = /* GraphQL */ `
  mutation CreateTwusers(
    $input: CreateTwusersInput!
    $condition: ModelTwusersConditionInput
  ) {
    createTwusers(input: $input, condition: $condition) {
      id
      user
      letter
      nid
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateTwusers = /* GraphQL */ `
  mutation UpdateTwusers(
    $input: UpdateTwusersInput!
    $condition: ModelTwusersConditionInput
  ) {
    updateTwusers(input: $input, condition: $condition) {
      id
      user
      letter
      nid
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteTwusers = /* GraphQL */ `
  mutation DeleteTwusers(
    $input: DeleteTwusersInput!
    $condition: ModelTwusersConditionInput
  ) {
    deleteTwusers(input: $input, condition: $condition) {
      id
      user
      letter
      nid
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createMovies = /* GraphQL */ `
  mutation CreateMovies(
    $input: CreateMoviesInput!
    $condition: ModelMoviesConditionInput
  ) {
    createMovies(input: $input, condition: $condition) {
      id
      title
      slug
      year
      description
      image
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateMovies = /* GraphQL */ `
  mutation UpdateMovies(
    $input: UpdateMoviesInput!
    $condition: ModelMoviesConditionInput
  ) {
    updateMovies(input: $input, condition: $condition) {
      id
      title
      slug
      year
      description
      image
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteMovies = /* GraphQL */ `
  mutation DeleteMovies(
    $input: DeleteMoviesInput!
    $condition: ModelMoviesConditionInput
  ) {
    deleteMovies(input: $input, condition: $condition) {
      id
      title
      slug
      year
      description
      image
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createCompanies = /* GraphQL */ `
  mutation CreateCompanies(
    $input: CreateCompaniesInput!
    $condition: ModelCompaniesConditionInput
  ) {
    createCompanies(input: $input, condition: $condition) {
      id
      name
      location
      zip
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateCompanies = /* GraphQL */ `
  mutation UpdateCompanies(
    $input: UpdateCompaniesInput!
    $condition: ModelCompaniesConditionInput
  ) {
    updateCompanies(input: $input, condition: $condition) {
      id
      name
      location
      zip
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteCompanies = /* GraphQL */ `
  mutation DeleteCompanies(
    $input: DeleteCompaniesInput!
    $condition: ModelCompaniesConditionInput
  ) {
    deleteCompanies(input: $input, condition: $condition) {
      id
      name
      location
      zip
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
