import { expect, it } from "vitest";
import { Equal, Expect } from "./helpers/type-utils";

const guitarists = new Set<string>(); // set의 type을 결정해 줌. Set의 상위 문서에서 오는 Generic을 잘 보면 답을 알 수 있다. 

guitarists.add("Jimi Hendrix");
guitarists.add("Eric Clapton");

it("Should contain Jimi and Eric", () => {
  expect(guitarists.has("Jimi Hendrix")).toEqual(true);
  expect(guitarists.has("Eric Clapton")).toEqual(true);
});

it("Should give a type error when you try to pass a non-string", () => {
  // @ts-expect-error
  guitarists.add(2);
});

it("Should be typed as an array of strings", () => {
  const guitaristsAsArray = Array.from(guitarists);

  type tests = [Expect<Equal<typeof guitaristsAsArray, string[]>>];
});
