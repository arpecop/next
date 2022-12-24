/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getAd = /* GraphQL */ `
  query GetAd($id: ID!) {
    getAd(id: $id) {
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
export const listAds = /* GraphQL */ `
  query ListAds($filter: ModelAdFilterInput, $limit: Int, $nextToken: String) {
    listAds(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncAds = /* GraphQL */ `
  query SyncAds(
    $filter: ModelAdFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncAds(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getJoke = /* GraphQL */ `
  query GetJoke($id: ID!) {
    getJoke(id: $id) {
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
export const listJokes = /* GraphQL */ `
  query ListJokes(
    $filter: ModelJokeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listJokes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncJokes = /* GraphQL */ `
  query SyncJokes(
    $filter: ModelJokeFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncJokes(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getNews = /* GraphQL */ `
  query GetNews($id: ID!) {
    getNews(id: $id) {
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
export const listNews = /* GraphQL */ `
  query ListNews(
    $filter: ModelNewsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNews(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncNews = /* GraphQL */ `
  query SyncNews(
    $filter: ModelNewsFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncNews(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getTwusers = /* GraphQL */ `
  query GetTwusers($id: ID!) {
    getTwusers(id: $id) {
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
export const listTwusers = /* GraphQL */ `
  query ListTwusers(
    $filter: ModelTwusersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTwusers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncTwusers = /* GraphQL */ `
  query SyncTwusers(
    $filter: ModelTwusersFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTwusers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getMovies = /* GraphQL */ `
  query GetMovies($id: ID!) {
    getMovies(id: $id) {
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
export const listMovies = /* GraphQL */ `
  query ListMovies(
    $filter: ModelMoviesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMovies(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncMovies = /* GraphQL */ `
  query SyncMovies(
    $filter: ModelMoviesFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncMovies(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getCompanies = /* GraphQL */ `
  query GetCompanies($id: ID!) {
    getCompanies(id: $id) {
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
export const listCompanies = /* GraphQL */ `
  query ListCompanies(
    $filter: ModelCompaniesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCompanies(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncCompanies = /* GraphQL */ `
  query SyncCompanies(
    $filter: ModelCompaniesFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCompanies(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
