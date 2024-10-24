import { describe, expect, test } from '@jest/globals';
import { add } from './add.ts';

describe("Utils: add tests", () => {
  test("adds 1 + 3 to equal 4", () => {
    const result = add(1, 3);

    expect(result).toBe(4);
  })
})
