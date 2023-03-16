// Problem
import { expect, it } from "vitest";

const createCache = () => {
  const cache = {};

  const add = (id: string, value: string) => {
    cache[id] = value;
  };

  const remove = (id: string) => {
    delete cache[id];
  };

  return {
    cache,
    add,
    remove,
  };
};

it("Should add values to the cache", () => {
  const cache = createCache();

  cache.add("123", "Matt");

  expect(cache.cache["123"]).toEqual("Matt");
});

it("Should remove values from the cache", () => {
  const cache = createCache();

  cache.add("123", "Matt");
  cache.remove("123");

  expect(cache.cache["123"]).toEqual(undefined);
});

//solution
import { expect, it } from 'vitest';

// 3rd solution
type ID = {
 [id:string] : string
}

const createCache = () => {
  const cache: { [id: string]: string } = {};
  // 2nd soltion
  const cache: Record<string, string> = {};
  // 3rd solution  
  const cache: ID = {};

  const add = (id: string, value: string) => {
    cache[id] = value;
  };

  const remove = (id: string) => {
    delete cache[id];
  };

  return {
    cache,
    add,
    remove,
  };
};

it('Should add values to the cache', () => {
  const cache = createCache();

  cache.add('123', 'Matt');

  expect(cache.cache['123']).toEqual('Matt');
});

it('Should remove values from the cache', () => {
  const cache = createCache();

  cache.add('123', 'Matt');
  cache.remove('123');

  expect(cache.cache['123']).toEqual(undefined);
});

Record 
