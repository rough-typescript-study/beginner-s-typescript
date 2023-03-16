import { expect, it } from 'vitest';

const createCache = () => {
  const cache: {
    [key: string]: string;
  } = {}; // 이렇게 [key:T]:V와 같은 형식으로 적용할 수 있고, Record<K,V>의 형태로 값을 지저할 수 있다. (Record가 뭔가)

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
