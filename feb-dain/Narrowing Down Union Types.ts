// problem 
import { expect, it } from "vitest";

const coerceAmount = (amount: number | { amount: number }) => {};

it("Should return the amount when passed an object", () => {
  expect(coerceAmount({ amount: 20 })).toEqual(20);
});

it("Should return the amount when passed a number", () => {
  expect(coerceAmount(20)).toEqual(20);
});

// solution
import { expect, it } from 'vitest';

const coerceAmount = (amount: number | { amount: number }) => {
  if (typeof amount === 'object') return amount.amount;
// if (typeof amount === 'number') return amount;

  return amount.amount;
};

it('Should return the amount when passed an object', () => {
  expect(coerceAmount({ amount: 20 })).toEqual(20);
});

it('Should return the amount when passed a number', () => {
  expect(coerceAmount(20)).toEqual(20);
});

// my solution
import { expect, it } from 'vitest';

const coerceAmount = (amount: number | { amount: number }) => {
  if (amount instanceof Object) return amount.amount;

  return amount;
};

it('Should return the amount when passed an object', () => {
  expect(coerceAmount({ amount: 20 })).toEqual(20);
});

it('Should return the amount when passed a number', () => {
  expect(coerceAmount(20)).toEqual(20);
});
