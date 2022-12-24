/* eslint-disable no-underscore-dangle */
/* eslint-disable no-plusplus */

export interface Article {
  joke: string;
  title: string;
  image: string;
  slug: string;
  _id: string;
  _rev?: string;
  doc?: object;
  item?: object;
}

export interface Doc {
  joke: string;
  cat: string;
  id?: string;
  _id: string;
  _rev?: string;
  doc?: object;
  item?: object;
}
export interface Data {
  id: string;
  key: string;
  value: object;
  doc: Doc;
}

export interface Paths {
  props: { id: string };
}
