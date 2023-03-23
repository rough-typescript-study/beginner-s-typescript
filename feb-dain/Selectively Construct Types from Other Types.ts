// problem
import { Equal, Expect } from "./helpers/type-utils";

interface User {
  id: string;
  firstName: string;
  lastName: string;
}

/**
 * How do we create a new object type with _only_ the
 * firstName and lastName properties of User?
 */

type MyType = unknown;

type tests = [Expect<Equal<MyType, { firstName: string; lastName: string }>>];

// solution
import { Equal, Expect } from './helpers/type-utils';

interface User {
  id: string;
  firstName: string;
  lastName: string;
}

/**
 * How do we create a new object type with _only_ the
 * firstName and lastName properties of User?
 */

type MyType = Omit<User, 'id'>;
// you could use this: type Type = Pick<User, 'firstName' | "lastName">;

type tests = [Expect<Equal<MyType, { firstName: string; lastName: string }>>];
