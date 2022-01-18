import {Collection} from "../types";

export type UserId = string;

export type User = {
  id: UserId;
  name: string;
  surname: string;
}

export type UserCollection = Collection<User>;

export type UserCollections = UserCollection;
