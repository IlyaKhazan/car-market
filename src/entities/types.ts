export type Entity = {id: string};

export type Collection<T extends Entity> = {[key: string]: T};

export type Collections = {[key: string]: Collection<Entity>};
