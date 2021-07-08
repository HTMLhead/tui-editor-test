// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";

import "@testing-library/jest-dom/extend-expect";
import { cleanup } from "@testing-library/react";

// test를 위한 global타입 정의
const globalAny = global;

afterEach(cleanup);

const fnMock = () => {};

globalAny.document.createRange = () => ({
  setStart: fnMock,
  setEnd: fnMock,
  commonAncestorContainer: {
    nodeName: "BODY",
    ownerDocument: document,
  },
});

Object.defineProperty(window, "scrollTo", { value: fnMock, writable: true });

// intersection Observer메서드 정의
