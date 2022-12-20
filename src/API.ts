/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateJokeInput = {
  id?: string | null,
  joke?: string | null,
  cat: string,
};

export type ModelJokeConditionInput = {
  joke?: ModelStringInput | null,
  cat?: ModelIDInput | null,
  and?: Array< ModelJokeConditionInput | null > | null,
  or?: Array< ModelJokeConditionInput | null > | null,
  not?: ModelJokeConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type Joke = {
  __typename: "Joke",
  id: string,
  joke?: string | null,
  cat: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateJokeInput = {
  id: string,
  joke?: string | null,
  cat?: string | null,
};

export type DeleteJokeInput = {
  id: string,
};

export type CreateAppInput = {
  id?: string | null,
  cat: string,
  subcat?: string | null,
  price?: string | null,
  location?: string | null,
  createdAt?: string | null,
};

export type ModelAppConditionInput = {
  cat?: ModelIDInput | null,
  subcat?: ModelIDInput | null,
  price?: ModelIDInput | null,
  location?: ModelIDInput | null,
  createdAt?: ModelIDInput | null,
  and?: Array< ModelAppConditionInput | null > | null,
  or?: Array< ModelAppConditionInput | null > | null,
  not?: ModelAppConditionInput | null,
};

export type App = {
  __typename: "App",
  id: string,
  cat: string,
  subcat?: string | null,
  price?: string | null,
  location?: string | null,
  createdAt?: string | null,
  Jokes?: ModelJokeConnection | null,
  updatedAt: string,
};

export type ModelJokeConnection = {
  __typename: "ModelJokeConnection",
  items:  Array<Joke | null >,
  nextToken?: string | null,
};

export type UpdateAppInput = {
  id: string,
  cat?: string | null,
  subcat?: string | null,
  price?: string | null,
  location?: string | null,
  createdAt?: string | null,
};

export type DeleteAppInput = {
  id: string,
};

export type ModelJokeFilterInput = {
  id?: ModelIDInput | null,
  joke?: ModelStringInput | null,
  cat?: ModelIDInput | null,
  and?: Array< ModelJokeFilterInput | null > | null,
  or?: Array< ModelJokeFilterInput | null > | null,
  not?: ModelJokeFilterInput | null,
};

export type ModelAppFilterInput = {
  id?: ModelIDInput | null,
  cat?: ModelIDInput | null,
  subcat?: ModelIDInput | null,
  price?: ModelIDInput | null,
  location?: ModelIDInput | null,
  createdAt?: ModelIDInput | null,
  and?: Array< ModelAppFilterInput | null > | null,
  or?: Array< ModelAppFilterInput | null > | null,
  not?: ModelAppFilterInput | null,
};

export type ModelAppConnection = {
  __typename: "ModelAppConnection",
  items:  Array<App | null >,
  nextToken?: string | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelSubscriptionJokeFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  joke?: ModelSubscriptionStringInput | null,
  cat?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionJokeFilterInput | null > | null,
  or?: Array< ModelSubscriptionJokeFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionAppFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  cat?: ModelSubscriptionIDInput | null,
  subcat?: ModelSubscriptionIDInput | null,
  price?: ModelSubscriptionIDInput | null,
  location?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionAppFilterInput | null > | null,
  or?: Array< ModelSubscriptionAppFilterInput | null > | null,
};

export type CreateJokeMutationVariables = {
  input: CreateJokeInput,
  condition?: ModelJokeConditionInput | null,
};

export type CreateJokeMutation = {
  createJoke?:  {
    __typename: "Joke",
    id: string,
    joke?: string | null,
    cat: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateJokeMutationVariables = {
  input: UpdateJokeInput,
  condition?: ModelJokeConditionInput | null,
};

export type UpdateJokeMutation = {
  updateJoke?:  {
    __typename: "Joke",
    id: string,
    joke?: string | null,
    cat: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteJokeMutationVariables = {
  input: DeleteJokeInput,
  condition?: ModelJokeConditionInput | null,
};

export type DeleteJokeMutation = {
  deleteJoke?:  {
    __typename: "Joke",
    id: string,
    joke?: string | null,
    cat: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateAppMutationVariables = {
  input: CreateAppInput,
  condition?: ModelAppConditionInput | null,
};

export type CreateAppMutation = {
  createApp?:  {
    __typename: "App",
    id: string,
    cat: string,
    subcat?: string | null,
    price?: string | null,
    location?: string | null,
    createdAt?: string | null,
    Jokes?:  {
      __typename: "ModelJokeConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type UpdateAppMutationVariables = {
  input: UpdateAppInput,
  condition?: ModelAppConditionInput | null,
};

export type UpdateAppMutation = {
  updateApp?:  {
    __typename: "App",
    id: string,
    cat: string,
    subcat?: string | null,
    price?: string | null,
    location?: string | null,
    createdAt?: string | null,
    Jokes?:  {
      __typename: "ModelJokeConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type DeleteAppMutationVariables = {
  input: DeleteAppInput,
  condition?: ModelAppConditionInput | null,
};

export type DeleteAppMutation = {
  deleteApp?:  {
    __typename: "App",
    id: string,
    cat: string,
    subcat?: string | null,
    price?: string | null,
    location?: string | null,
    createdAt?: string | null,
    Jokes?:  {
      __typename: "ModelJokeConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type GetJokeQueryVariables = {
  id: string,
};

export type GetJokeQuery = {
  getJoke?:  {
    __typename: "Joke",
    id: string,
    joke?: string | null,
    cat: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListJokesQueryVariables = {
  filter?: ModelJokeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListJokesQuery = {
  listJokes?:  {
    __typename: "ModelJokeConnection",
    items:  Array< {
      __typename: "Joke",
      id: string,
      joke?: string | null,
      cat: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetAppQueryVariables = {
  id: string,
};

export type GetAppQuery = {
  getApp?:  {
    __typename: "App",
    id: string,
    cat: string,
    subcat?: string | null,
    price?: string | null,
    location?: string | null,
    createdAt?: string | null,
    Jokes?:  {
      __typename: "ModelJokeConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type ListAppsQueryVariables = {
  filter?: ModelAppFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAppsQuery = {
  listApps?:  {
    __typename: "ModelAppConnection",
    items:  Array< {
      __typename: "App",
      id: string,
      cat: string,
      subcat?: string | null,
      price?: string | null,
      location?: string | null,
      createdAt?: string | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type JokesByCatQueryVariables = {
  cat: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelJokeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type JokesByCatQuery = {
  jokesByCat?:  {
    __typename: "ModelJokeConnection",
    items:  Array< {
      __typename: "Joke",
      id: string,
      joke?: string | null,
      cat: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateJokeSubscriptionVariables = {
  filter?: ModelSubscriptionJokeFilterInput | null,
};

export type OnCreateJokeSubscription = {
  onCreateJoke?:  {
    __typename: "Joke",
    id: string,
    joke?: string | null,
    cat: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateJokeSubscriptionVariables = {
  filter?: ModelSubscriptionJokeFilterInput | null,
};

export type OnUpdateJokeSubscription = {
  onUpdateJoke?:  {
    __typename: "Joke",
    id: string,
    joke?: string | null,
    cat: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteJokeSubscriptionVariables = {
  filter?: ModelSubscriptionJokeFilterInput | null,
};

export type OnDeleteJokeSubscription = {
  onDeleteJoke?:  {
    __typename: "Joke",
    id: string,
    joke?: string | null,
    cat: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateAppSubscriptionVariables = {
  filter?: ModelSubscriptionAppFilterInput | null,
};

export type OnCreateAppSubscription = {
  onCreateApp?:  {
    __typename: "App",
    id: string,
    cat: string,
    subcat?: string | null,
    price?: string | null,
    location?: string | null,
    createdAt?: string | null,
    Jokes?:  {
      __typename: "ModelJokeConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type OnUpdateAppSubscriptionVariables = {
  filter?: ModelSubscriptionAppFilterInput | null,
};

export type OnUpdateAppSubscription = {
  onUpdateApp?:  {
    __typename: "App",
    id: string,
    cat: string,
    subcat?: string | null,
    price?: string | null,
    location?: string | null,
    createdAt?: string | null,
    Jokes?:  {
      __typename: "ModelJokeConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type OnDeleteAppSubscriptionVariables = {
  filter?: ModelSubscriptionAppFilterInput | null,
};

export type OnDeleteAppSubscription = {
  onDeleteApp?:  {
    __typename: "App",
    id: string,
    cat: string,
    subcat?: string | null,
    price?: string | null,
    location?: string | null,
    createdAt?: string | null,
    Jokes?:  {
      __typename: "ModelJokeConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};
