import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import {describe, expect, test} from '@jest/globals'
import Example from '../client/components/Example'

describe("example", () => {
  it("should have the text example", () => {
    render(
        <div data-testid='testid'>
        <Example />
        </div>
    );
      expect(screen.getByTestId('testid')).toHaveTextContent('example');  
  });
});

describe('sum', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(1 + 2).toBe(3);
  });
});