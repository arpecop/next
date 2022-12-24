/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateAdInput = {
  id?: string | null,
  title: string,
  type: string,
  cat: string,
  condition?: Condition | null,
  currency?: Curr | null,
  data?: string | null,
  date?: string | null,
  location?: string | null,
  description?: string | null,
  images?: Array< string | null > | null,
  parrent?: Array< string | null > | null,
  phone?: number | null,
  physical?: boolean | null,
  price?: number | null,
  query?: string | null,
  slug?: string | null,
  source?: string | null,
  createdAt?: string | null,
  uid?: string | null,
  _version?: number | null,
};

export enum Condition {
  NEW = "NEW",
  PARTS = "PARTS",
  USED = "USED",
}


export enum Curr {
  EUR = "EUR",
  LV = "LV",
}


export type ModelAdConditionInput = {
  title?: ModelStringInput | null,
  type?: ModelStringInput | null,
  cat?: ModelStringInput | null,
  condition?: ModelConditionInput | null,
  currency?: ModelCurrInput | null,
  data?: ModelStringInput | null,
  date?: ModelStringInput | null,
  location?: ModelStringInput | null,
  description?: ModelStringInput | null,
  images?: ModelStringInput | null,
  parrent?: ModelStringInput | null,
  phone?: ModelIntInput | null,
  physical?: ModelBooleanInput | null,
  price?: ModelIntInput | null,
  query?: ModelStringInput | null,
  slug?: ModelStringInput | null,
  source?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  uid?: ModelStringInput | null,
  and?: Array< ModelAdConditionInput | null > | null,
  or?: Array< ModelAdConditionInput | null > | null,
  not?: ModelAdConditionInput | null,
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

export type ModelConditionInput = {
  eq?: Condition | null,
  ne?: Condition | null,
};

export type ModelCurrInput = {
  eq?: Curr | null,
  ne?: Curr | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Ad = {
  __typename: "Ad",
  id: string,
  title: string,
  type: string,
  cat: string,
  condition?: Condition | null,
  currency?: Curr | null,
  data?: string | null,
  date?: string | null,
  location?: string | null,
  description?: string | null,
  images?: Array< string | null > | null,
  parrent?: Array< string | null > | null,
  phone?: number | null,
  physical?: boolean | null,
  price?: number | null,
  query?: string | null,
  slug?: string | null,
  source?: string | null,
  createdAt?: string | null,
  uid?: string | null,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateAdInput = {
  id: string,
  title?: string | null,
  type?: string | null,
  cat?: string | null,
  condition?: Condition | null,
  currency?: Curr | null,
  data?: string | null,
  date?: string | null,
  location?: string | null,
  description?: string | null,
  images?: Array< string | null > | null,
  parrent?: Array< string | null > | null,
  phone?: number | null,
  physical?: boolean | null,
  price?: number | null,
  query?: string | null,
  slug?: string | null,
  source?: string | null,
  createdAt?: string | null,
  uid?: string | null,
  _version?: number | null,
};

export type DeleteAdInput = {
  id: string,
  _version?: number | null,
};

export type CreateJokeInput = {
  id?: string | null,
  nid?: number | null,
  cat?: string | null,
  joke?: string | null,
  _version?: number | null,
};

export type ModelJokeConditionInput = {
  nid?: ModelIntInput | null,
  cat?: ModelStringInput | null,
  joke?: ModelStringInput | null,
  and?: Array< ModelJokeConditionInput | null > | null,
  or?: Array< ModelJokeConditionInput | null > | null,
  not?: ModelJokeConditionInput | null,
};

export type Joke = {
  __typename: "Joke",
  id: string,
  nid?: number | null,
  cat?: string | null,
  joke?: string | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateJokeInput = {
  id: string,
  nid?: number | null,
  cat?: string | null,
  joke?: string | null,
  _version?: number | null,
};

export type DeleteJokeInput = {
  id: string,
  _version?: number | null,
};

export type CreateNewsInput = {
  id?: string | null,
  title?: string | null,
  content?: string | null,
  image?: string | null,
  link?: string | null,
  nid?: number | null,
  _version?: number | null,
};

export type ModelNewsConditionInput = {
  title?: ModelStringInput | null,
  content?: ModelStringInput | null,
  image?: ModelStringInput | null,
  link?: ModelStringInput | null,
  nid?: ModelIntInput | null,
  and?: Array< ModelNewsConditionInput | null > | null,
  or?: Array< ModelNewsConditionInput | null > | null,
  not?: ModelNewsConditionInput | null,
};

export type News = {
  __typename: "News",
  id: string,
  title?: string | null,
  content?: string | null,
  image?: string | null,
  link?: string | null,
  nid?: number | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateNewsInput = {
  id: string,
  title?: string | null,
  content?: string | null,
  image?: string | null,
  link?: string | null,
  nid?: number | null,
  _version?: number | null,
};

export type DeleteNewsInput = {
  id: string,
  _version?: number | null,
};

export type CreateTwusersInput = {
  id?: string | null,
  user?: string | null,
  letter?: string | null,
  nid?: number | null,
  _version?: number | null,
};

export type ModelTwusersConditionInput = {
  user?: ModelStringInput | null,
  letter?: ModelStringInput | null,
  nid?: ModelIntInput | null,
  and?: Array< ModelTwusersConditionInput | null > | null,
  or?: Array< ModelTwusersConditionInput | null > | null,
  not?: ModelTwusersConditionInput | null,
};

export type Twusers = {
  __typename: "Twusers",
  id: string,
  user?: string | null,
  letter?: string | null,
  nid?: number | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateTwusersInput = {
  id: string,
  user?: string | null,
  letter?: string | null,
  nid?: number | null,
  _version?: number | null,
};

export type DeleteTwusersInput = {
  id: string,
  _version?: number | null,
};

export type CreateMoviesInput = {
  id?: string | null,
  title?: string | null,
  slug?: string | null,
  year?: number | null,
  description?: string | null,
  image?: string | null,
  _version?: number | null,
};

export type ModelMoviesConditionInput = {
  title?: ModelStringInput | null,
  slug?: ModelStringInput | null,
  year?: ModelIntInput | null,
  description?: ModelStringInput | null,
  image?: ModelStringInput | null,
  and?: Array< ModelMoviesConditionInput | null > | null,
  or?: Array< ModelMoviesConditionInput | null > | null,
  not?: ModelMoviesConditionInput | null,
};

export type Movies = {
  __typename: "Movies",
  id: string,
  title?: string | null,
  slug?: string | null,
  year?: number | null,
  description?: string | null,
  image?: string | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateMoviesInput = {
  id: string,
  title?: string | null,
  slug?: string | null,
  year?: number | null,
  description?: string | null,
  image?: string | null,
  _version?: number | null,
};

export type DeleteMoviesInput = {
  id: string,
  _version?: number | null,
};

export type CreateCompaniesInput = {
  id?: string | null,
  name?: string | null,
  location?: string | null,
  zip?: number | null,
  _version?: number | null,
};

export type ModelCompaniesConditionInput = {
  name?: ModelStringInput | null,
  location?: ModelStringInput | null,
  zip?: ModelIntInput | null,
  and?: Array< ModelCompaniesConditionInput | null > | null,
  or?: Array< ModelCompaniesConditionInput | null > | null,
  not?: ModelCompaniesConditionInput | null,
};

export type Companies = {
  __typename: "Companies",
  id: string,
  name?: string | null,
  location?: string | null,
  zip?: number | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateCompaniesInput = {
  id: string,
  name?: string | null,
  location?: string | null,
  zip?: number | null,
  _version?: number | null,
};

export type DeleteCompaniesInput = {
  id: string,
  _version?: number | null,
};

export type ModelAdFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  type?: ModelStringInput | null,
  cat?: ModelStringInput | null,
  condition?: ModelConditionInput | null,
  currency?: ModelCurrInput | null,
  data?: ModelStringInput | null,
  date?: ModelStringInput | null,
  location?: ModelStringInput | null,
  description?: ModelStringInput | null,
  images?: ModelStringInput | null,
  parrent?: ModelStringInput | null,
  phone?: ModelIntInput | null,
  physical?: ModelBooleanInput | null,
  price?: ModelIntInput | null,
  query?: ModelStringInput | null,
  slug?: ModelStringInput | null,
  source?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  uid?: ModelStringInput | null,
  and?: Array< ModelAdFilterInput | null > | null,
  or?: Array< ModelAdFilterInput | null > | null,
  not?: ModelAdFilterInput | null,
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

export type ModelAdConnection = {
  __typename: "ModelAdConnection",
  items:  Array<Ad | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelJokeFilterInput = {
  id?: ModelIDInput | null,
  nid?: ModelIntInput | null,
  cat?: ModelStringInput | null,
  joke?: ModelStringInput | null,
  and?: Array< ModelJokeFilterInput | null > | null,
  or?: Array< ModelJokeFilterInput | null > | null,
  not?: ModelJokeFilterInput | null,
};

export type ModelJokeConnection = {
  __typename: "ModelJokeConnection",
  items:  Array<Joke | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelNewsFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  content?: ModelStringInput | null,
  image?: ModelStringInput | null,
  link?: ModelStringInput | null,
  nid?: ModelIntInput | null,
  and?: Array< ModelNewsFilterInput | null > | null,
  or?: Array< ModelNewsFilterInput | null > | null,
  not?: ModelNewsFilterInput | null,
};

export type ModelNewsConnection = {
  __typename: "ModelNewsConnection",
  items:  Array<News | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelTwusersFilterInput = {
  id?: ModelIDInput | null,
  user?: ModelStringInput | null,
  letter?: ModelStringInput | null,
  nid?: ModelIntInput | null,
  and?: Array< ModelTwusersFilterInput | null > | null,
  or?: Array< ModelTwusersFilterInput | null > | null,
  not?: ModelTwusersFilterInput | null,
};

export type ModelTwusersConnection = {
  __typename: "ModelTwusersConnection",
  items:  Array<Twusers | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelMoviesFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  slug?: ModelStringInput | null,
  year?: ModelIntInput | null,
  description?: ModelStringInput | null,
  image?: ModelStringInput | null,
  and?: Array< ModelMoviesFilterInput | null > | null,
  or?: Array< ModelMoviesFilterInput | null > | null,
  not?: ModelMoviesFilterInput | null,
};

export type ModelMoviesConnection = {
  __typename: "ModelMoviesConnection",
  items:  Array<Movies | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelCompaniesFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  location?: ModelStringInput | null,
  zip?: ModelIntInput | null,
  and?: Array< ModelCompaniesFilterInput | null > | null,
  or?: Array< ModelCompaniesFilterInput | null > | null,
  not?: ModelCompaniesFilterInput | null,
};

export type ModelCompaniesConnection = {
  __typename: "ModelCompaniesConnection",
  items:  Array<Companies | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelSubscriptionAdFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  type?: ModelSubscriptionStringInput | null,
  cat?: ModelSubscriptionStringInput | null,
  condition?: ModelSubscriptionStringInput | null,
  currency?: ModelSubscriptionStringInput | null,
  data?: ModelSubscriptionStringInput | null,
  date?: ModelSubscriptionStringInput | null,
  location?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  images?: ModelSubscriptionStringInput | null,
  parrent?: ModelSubscriptionStringInput | null,
  phone?: ModelSubscriptionIntInput | null,
  physical?: ModelSubscriptionBooleanInput | null,
  price?: ModelSubscriptionIntInput | null,
  query?: ModelSubscriptionStringInput | null,
  slug?: ModelSubscriptionStringInput | null,
  source?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  uid?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionAdFilterInput | null > | null,
  or?: Array< ModelSubscriptionAdFilterInput | null > | null,
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

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type ModelSubscriptionJokeFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  nid?: ModelSubscriptionIntInput | null,
  cat?: ModelSubscriptionStringInput | null,
  joke?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionJokeFilterInput | null > | null,
  or?: Array< ModelSubscriptionJokeFilterInput | null > | null,
};

export type ModelSubscriptionNewsFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  content?: ModelSubscriptionStringInput | null,
  image?: ModelSubscriptionStringInput | null,
  link?: ModelSubscriptionStringInput | null,
  nid?: ModelSubscriptionIntInput | null,
  and?: Array< ModelSubscriptionNewsFilterInput | null > | null,
  or?: Array< ModelSubscriptionNewsFilterInput | null > | null,
};

export type ModelSubscriptionTwusersFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  user?: ModelSubscriptionStringInput | null,
  letter?: ModelSubscriptionStringInput | null,
  nid?: ModelSubscriptionIntInput | null,
  and?: Array< ModelSubscriptionTwusersFilterInput | null > | null,
  or?: Array< ModelSubscriptionTwusersFilterInput | null > | null,
};

export type ModelSubscriptionMoviesFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  slug?: ModelSubscriptionStringInput | null,
  year?: ModelSubscriptionIntInput | null,
  description?: ModelSubscriptionStringInput | null,
  image?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionMoviesFilterInput | null > | null,
  or?: Array< ModelSubscriptionMoviesFilterInput | null > | null,
};

export type ModelSubscriptionCompaniesFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  location?: ModelSubscriptionStringInput | null,
  zip?: ModelSubscriptionIntInput | null,
  and?: Array< ModelSubscriptionCompaniesFilterInput | null > | null,
  or?: Array< ModelSubscriptionCompaniesFilterInput | null > | null,
};

export type CreateAdMutationVariables = {
  input: CreateAdInput,
  condition?: ModelAdConditionInput | null,
};

export type CreateAdMutation = {
  createAd?:  {
    __typename: "Ad",
    id: string,
    title: string,
    type: string,
    cat: string,
    condition?: Condition | null,
    currency?: Curr | null,
    data?: string | null,
    date?: string | null,
    location?: string | null,
    description?: string | null,
    images?: Array< string | null > | null,
    parrent?: Array< string | null > | null,
    phone?: number | null,
    physical?: boolean | null,
    price?: number | null,
    query?: string | null,
    slug?: string | null,
    source?: string | null,
    createdAt?: string | null,
    uid?: string | null,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateAdMutationVariables = {
  input: UpdateAdInput,
  condition?: ModelAdConditionInput | null,
};

export type UpdateAdMutation = {
  updateAd?:  {
    __typename: "Ad",
    id: string,
    title: string,
    type: string,
    cat: string,
    condition?: Condition | null,
    currency?: Curr | null,
    data?: string | null,
    date?: string | null,
    location?: string | null,
    description?: string | null,
    images?: Array< string | null > | null,
    parrent?: Array< string | null > | null,
    phone?: number | null,
    physical?: boolean | null,
    price?: number | null,
    query?: string | null,
    slug?: string | null,
    source?: string | null,
    createdAt?: string | null,
    uid?: string | null,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteAdMutationVariables = {
  input: DeleteAdInput,
  condition?: ModelAdConditionInput | null,
};

export type DeleteAdMutation = {
  deleteAd?:  {
    __typename: "Ad",
    id: string,
    title: string,
    type: string,
    cat: string,
    condition?: Condition | null,
    currency?: Curr | null,
    data?: string | null,
    date?: string | null,
    location?: string | null,
    description?: string | null,
    images?: Array< string | null > | null,
    parrent?: Array< string | null > | null,
    phone?: number | null,
    physical?: boolean | null,
    price?: number | null,
    query?: string | null,
    slug?: string | null,
    source?: string | null,
    createdAt?: string | null,
    uid?: string | null,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateJokeMutationVariables = {
  input: CreateJokeInput,
  condition?: ModelJokeConditionInput | null,
};

export type CreateJokeMutation = {
  createJoke?:  {
    __typename: "Joke",
    id: string,
    nid?: number | null,
    cat?: string | null,
    joke?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
    nid?: number | null,
    cat?: string | null,
    joke?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
    nid?: number | null,
    cat?: string | null,
    joke?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateNewsMutationVariables = {
  input: CreateNewsInput,
  condition?: ModelNewsConditionInput | null,
};

export type CreateNewsMutation = {
  createNews?:  {
    __typename: "News",
    id: string,
    title?: string | null,
    content?: string | null,
    image?: string | null,
    link?: string | null,
    nid?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateNewsMutationVariables = {
  input: UpdateNewsInput,
  condition?: ModelNewsConditionInput | null,
};

export type UpdateNewsMutation = {
  updateNews?:  {
    __typename: "News",
    id: string,
    title?: string | null,
    content?: string | null,
    image?: string | null,
    link?: string | null,
    nid?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteNewsMutationVariables = {
  input: DeleteNewsInput,
  condition?: ModelNewsConditionInput | null,
};

export type DeleteNewsMutation = {
  deleteNews?:  {
    __typename: "News",
    id: string,
    title?: string | null,
    content?: string | null,
    image?: string | null,
    link?: string | null,
    nid?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateTwusersMutationVariables = {
  input: CreateTwusersInput,
  condition?: ModelTwusersConditionInput | null,
};

export type CreateTwusersMutation = {
  createTwusers?:  {
    __typename: "Twusers",
    id: string,
    user?: string | null,
    letter?: string | null,
    nid?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateTwusersMutationVariables = {
  input: UpdateTwusersInput,
  condition?: ModelTwusersConditionInput | null,
};

export type UpdateTwusersMutation = {
  updateTwusers?:  {
    __typename: "Twusers",
    id: string,
    user?: string | null,
    letter?: string | null,
    nid?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteTwusersMutationVariables = {
  input: DeleteTwusersInput,
  condition?: ModelTwusersConditionInput | null,
};

export type DeleteTwusersMutation = {
  deleteTwusers?:  {
    __typename: "Twusers",
    id: string,
    user?: string | null,
    letter?: string | null,
    nid?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateMoviesMutationVariables = {
  input: CreateMoviesInput,
  condition?: ModelMoviesConditionInput | null,
};

export type CreateMoviesMutation = {
  createMovies?:  {
    __typename: "Movies",
    id: string,
    title?: string | null,
    slug?: string | null,
    year?: number | null,
    description?: string | null,
    image?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateMoviesMutationVariables = {
  input: UpdateMoviesInput,
  condition?: ModelMoviesConditionInput | null,
};

export type UpdateMoviesMutation = {
  updateMovies?:  {
    __typename: "Movies",
    id: string,
    title?: string | null,
    slug?: string | null,
    year?: number | null,
    description?: string | null,
    image?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteMoviesMutationVariables = {
  input: DeleteMoviesInput,
  condition?: ModelMoviesConditionInput | null,
};

export type DeleteMoviesMutation = {
  deleteMovies?:  {
    __typename: "Movies",
    id: string,
    title?: string | null,
    slug?: string | null,
    year?: number | null,
    description?: string | null,
    image?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateCompaniesMutationVariables = {
  input: CreateCompaniesInput,
  condition?: ModelCompaniesConditionInput | null,
};

export type CreateCompaniesMutation = {
  createCompanies?:  {
    __typename: "Companies",
    id: string,
    name?: string | null,
    location?: string | null,
    zip?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateCompaniesMutationVariables = {
  input: UpdateCompaniesInput,
  condition?: ModelCompaniesConditionInput | null,
};

export type UpdateCompaniesMutation = {
  updateCompanies?:  {
    __typename: "Companies",
    id: string,
    name?: string | null,
    location?: string | null,
    zip?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteCompaniesMutationVariables = {
  input: DeleteCompaniesInput,
  condition?: ModelCompaniesConditionInput | null,
};

export type DeleteCompaniesMutation = {
  deleteCompanies?:  {
    __typename: "Companies",
    id: string,
    name?: string | null,
    location?: string | null,
    zip?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type GetAdQueryVariables = {
  id: string,
};

export type GetAdQuery = {
  getAd?:  {
    __typename: "Ad",
    id: string,
    title: string,
    type: string,
    cat: string,
    condition?: Condition | null,
    currency?: Curr | null,
    data?: string | null,
    date?: string | null,
    location?: string | null,
    description?: string | null,
    images?: Array< string | null > | null,
    parrent?: Array< string | null > | null,
    phone?: number | null,
    physical?: boolean | null,
    price?: number | null,
    query?: string | null,
    slug?: string | null,
    source?: string | null,
    createdAt?: string | null,
    uid?: string | null,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListAdsQueryVariables = {
  filter?: ModelAdFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAdsQuery = {
  listAds?:  {
    __typename: "ModelAdConnection",
    items:  Array< {
      __typename: "Ad",
      id: string,
      title: string,
      type: string,
      cat: string,
      condition?: Condition | null,
      currency?: Curr | null,
      data?: string | null,
      date?: string | null,
      location?: string | null,
      description?: string | null,
      images?: Array< string | null > | null,
      parrent?: Array< string | null > | null,
      phone?: number | null,
      physical?: boolean | null,
      price?: number | null,
      query?: string | null,
      slug?: string | null,
      source?: string | null,
      createdAt?: string | null,
      uid?: string | null,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncAdsQueryVariables = {
  filter?: ModelAdFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncAdsQuery = {
  syncAds?:  {
    __typename: "ModelAdConnection",
    items:  Array< {
      __typename: "Ad",
      id: string,
      title: string,
      type: string,
      cat: string,
      condition?: Condition | null,
      currency?: Curr | null,
      data?: string | null,
      date?: string | null,
      location?: string | null,
      description?: string | null,
      images?: Array< string | null > | null,
      parrent?: Array< string | null > | null,
      phone?: number | null,
      physical?: boolean | null,
      price?: number | null,
      query?: string | null,
      slug?: string | null,
      source?: string | null,
      createdAt?: string | null,
      uid?: string | null,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetJokeQueryVariables = {
  id: string,
};

export type GetJokeQuery = {
  getJoke?:  {
    __typename: "Joke",
    id: string,
    nid?: number | null,
    cat?: string | null,
    joke?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
      nid?: number | null,
      cat?: string | null,
      joke?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncJokesQueryVariables = {
  filter?: ModelJokeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncJokesQuery = {
  syncJokes?:  {
    __typename: "ModelJokeConnection",
    items:  Array< {
      __typename: "Joke",
      id: string,
      nid?: number | null,
      cat?: string | null,
      joke?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetNewsQueryVariables = {
  id: string,
};

export type GetNewsQuery = {
  getNews?:  {
    __typename: "News",
    id: string,
    title?: string | null,
    content?: string | null,
    image?: string | null,
    link?: string | null,
    nid?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListNewsQueryVariables = {
  filter?: ModelNewsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListNewsQuery = {
  listNews?:  {
    __typename: "ModelNewsConnection",
    items:  Array< {
      __typename: "News",
      id: string,
      title?: string | null,
      content?: string | null,
      image?: string | null,
      link?: string | null,
      nid?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncNewsQueryVariables = {
  filter?: ModelNewsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncNewsQuery = {
  syncNews?:  {
    __typename: "ModelNewsConnection",
    items:  Array< {
      __typename: "News",
      id: string,
      title?: string | null,
      content?: string | null,
      image?: string | null,
      link?: string | null,
      nid?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetTwusersQueryVariables = {
  id: string,
};

export type GetTwusersQuery = {
  getTwusers?:  {
    __typename: "Twusers",
    id: string,
    user?: string | null,
    letter?: string | null,
    nid?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListTwusersQueryVariables = {
  filter?: ModelTwusersFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTwusersQuery = {
  listTwusers?:  {
    __typename: "ModelTwusersConnection",
    items:  Array< {
      __typename: "Twusers",
      id: string,
      user?: string | null,
      letter?: string | null,
      nid?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncTwusersQueryVariables = {
  filter?: ModelTwusersFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncTwusersQuery = {
  syncTwusers?:  {
    __typename: "ModelTwusersConnection",
    items:  Array< {
      __typename: "Twusers",
      id: string,
      user?: string | null,
      letter?: string | null,
      nid?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetMoviesQueryVariables = {
  id: string,
};

export type GetMoviesQuery = {
  getMovies?:  {
    __typename: "Movies",
    id: string,
    title?: string | null,
    slug?: string | null,
    year?: number | null,
    description?: string | null,
    image?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListMoviesQueryVariables = {
  filter?: ModelMoviesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMoviesQuery = {
  listMovies?:  {
    __typename: "ModelMoviesConnection",
    items:  Array< {
      __typename: "Movies",
      id: string,
      title?: string | null,
      slug?: string | null,
      year?: number | null,
      description?: string | null,
      image?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncMoviesQueryVariables = {
  filter?: ModelMoviesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncMoviesQuery = {
  syncMovies?:  {
    __typename: "ModelMoviesConnection",
    items:  Array< {
      __typename: "Movies",
      id: string,
      title?: string | null,
      slug?: string | null,
      year?: number | null,
      description?: string | null,
      image?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetCompaniesQueryVariables = {
  id: string,
};

export type GetCompaniesQuery = {
  getCompanies?:  {
    __typename: "Companies",
    id: string,
    name?: string | null,
    location?: string | null,
    zip?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListCompaniesQueryVariables = {
  filter?: ModelCompaniesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCompaniesQuery = {
  listCompanies?:  {
    __typename: "ModelCompaniesConnection",
    items:  Array< {
      __typename: "Companies",
      id: string,
      name?: string | null,
      location?: string | null,
      zip?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncCompaniesQueryVariables = {
  filter?: ModelCompaniesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncCompaniesQuery = {
  syncCompanies?:  {
    __typename: "ModelCompaniesConnection",
    items:  Array< {
      __typename: "Companies",
      id: string,
      name?: string | null,
      location?: string | null,
      zip?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OnCreateAdSubscriptionVariables = {
  filter?: ModelSubscriptionAdFilterInput | null,
};

export type OnCreateAdSubscription = {
  onCreateAd?:  {
    __typename: "Ad",
    id: string,
    title: string,
    type: string,
    cat: string,
    condition?: Condition | null,
    currency?: Curr | null,
    data?: string | null,
    date?: string | null,
    location?: string | null,
    description?: string | null,
    images?: Array< string | null > | null,
    parrent?: Array< string | null > | null,
    phone?: number | null,
    physical?: boolean | null,
    price?: number | null,
    query?: string | null,
    slug?: string | null,
    source?: string | null,
    createdAt?: string | null,
    uid?: string | null,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateAdSubscriptionVariables = {
  filter?: ModelSubscriptionAdFilterInput | null,
};

export type OnUpdateAdSubscription = {
  onUpdateAd?:  {
    __typename: "Ad",
    id: string,
    title: string,
    type: string,
    cat: string,
    condition?: Condition | null,
    currency?: Curr | null,
    data?: string | null,
    date?: string | null,
    location?: string | null,
    description?: string | null,
    images?: Array< string | null > | null,
    parrent?: Array< string | null > | null,
    phone?: number | null,
    physical?: boolean | null,
    price?: number | null,
    query?: string | null,
    slug?: string | null,
    source?: string | null,
    createdAt?: string | null,
    uid?: string | null,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteAdSubscriptionVariables = {
  filter?: ModelSubscriptionAdFilterInput | null,
};

export type OnDeleteAdSubscription = {
  onDeleteAd?:  {
    __typename: "Ad",
    id: string,
    title: string,
    type: string,
    cat: string,
    condition?: Condition | null,
    currency?: Curr | null,
    data?: string | null,
    date?: string | null,
    location?: string | null,
    description?: string | null,
    images?: Array< string | null > | null,
    parrent?: Array< string | null > | null,
    phone?: number | null,
    physical?: boolean | null,
    price?: number | null,
    query?: string | null,
    slug?: string | null,
    source?: string | null,
    createdAt?: string | null,
    uid?: string | null,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateJokeSubscriptionVariables = {
  filter?: ModelSubscriptionJokeFilterInput | null,
};

export type OnCreateJokeSubscription = {
  onCreateJoke?:  {
    __typename: "Joke",
    id: string,
    nid?: number | null,
    cat?: string | null,
    joke?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateJokeSubscriptionVariables = {
  filter?: ModelSubscriptionJokeFilterInput | null,
};

export type OnUpdateJokeSubscription = {
  onUpdateJoke?:  {
    __typename: "Joke",
    id: string,
    nid?: number | null,
    cat?: string | null,
    joke?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteJokeSubscriptionVariables = {
  filter?: ModelSubscriptionJokeFilterInput | null,
};

export type OnDeleteJokeSubscription = {
  onDeleteJoke?:  {
    __typename: "Joke",
    id: string,
    nid?: number | null,
    cat?: string | null,
    joke?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateNewsSubscriptionVariables = {
  filter?: ModelSubscriptionNewsFilterInput | null,
};

export type OnCreateNewsSubscription = {
  onCreateNews?:  {
    __typename: "News",
    id: string,
    title?: string | null,
    content?: string | null,
    image?: string | null,
    link?: string | null,
    nid?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateNewsSubscriptionVariables = {
  filter?: ModelSubscriptionNewsFilterInput | null,
};

export type OnUpdateNewsSubscription = {
  onUpdateNews?:  {
    __typename: "News",
    id: string,
    title?: string | null,
    content?: string | null,
    image?: string | null,
    link?: string | null,
    nid?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteNewsSubscriptionVariables = {
  filter?: ModelSubscriptionNewsFilterInput | null,
};

export type OnDeleteNewsSubscription = {
  onDeleteNews?:  {
    __typename: "News",
    id: string,
    title?: string | null,
    content?: string | null,
    image?: string | null,
    link?: string | null,
    nid?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateTwusersSubscriptionVariables = {
  filter?: ModelSubscriptionTwusersFilterInput | null,
};

export type OnCreateTwusersSubscription = {
  onCreateTwusers?:  {
    __typename: "Twusers",
    id: string,
    user?: string | null,
    letter?: string | null,
    nid?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateTwusersSubscriptionVariables = {
  filter?: ModelSubscriptionTwusersFilterInput | null,
};

export type OnUpdateTwusersSubscription = {
  onUpdateTwusers?:  {
    __typename: "Twusers",
    id: string,
    user?: string | null,
    letter?: string | null,
    nid?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteTwusersSubscriptionVariables = {
  filter?: ModelSubscriptionTwusersFilterInput | null,
};

export type OnDeleteTwusersSubscription = {
  onDeleteTwusers?:  {
    __typename: "Twusers",
    id: string,
    user?: string | null,
    letter?: string | null,
    nid?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateMoviesSubscriptionVariables = {
  filter?: ModelSubscriptionMoviesFilterInput | null,
};

export type OnCreateMoviesSubscription = {
  onCreateMovies?:  {
    __typename: "Movies",
    id: string,
    title?: string | null,
    slug?: string | null,
    year?: number | null,
    description?: string | null,
    image?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateMoviesSubscriptionVariables = {
  filter?: ModelSubscriptionMoviesFilterInput | null,
};

export type OnUpdateMoviesSubscription = {
  onUpdateMovies?:  {
    __typename: "Movies",
    id: string,
    title?: string | null,
    slug?: string | null,
    year?: number | null,
    description?: string | null,
    image?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteMoviesSubscriptionVariables = {
  filter?: ModelSubscriptionMoviesFilterInput | null,
};

export type OnDeleteMoviesSubscription = {
  onDeleteMovies?:  {
    __typename: "Movies",
    id: string,
    title?: string | null,
    slug?: string | null,
    year?: number | null,
    description?: string | null,
    image?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateCompaniesSubscriptionVariables = {
  filter?: ModelSubscriptionCompaniesFilterInput | null,
};

export type OnCreateCompaniesSubscription = {
  onCreateCompanies?:  {
    __typename: "Companies",
    id: string,
    name?: string | null,
    location?: string | null,
    zip?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateCompaniesSubscriptionVariables = {
  filter?: ModelSubscriptionCompaniesFilterInput | null,
};

export type OnUpdateCompaniesSubscription = {
  onUpdateCompanies?:  {
    __typename: "Companies",
    id: string,
    name?: string | null,
    location?: string | null,
    zip?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteCompaniesSubscriptionVariables = {
  filter?: ModelSubscriptionCompaniesFilterInput | null,
};

export type OnDeleteCompaniesSubscription = {
  onDeleteCompanies?:  {
    __typename: "Companies",
    id: string,
    name?: string | null,
    location?: string | null,
    zip?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};
