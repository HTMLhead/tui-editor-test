import { render, screen } from "@testing-library/react";
import App from "./App";
import Normal from "./Normal";

test("renders toast-editor", async () => {
  render(<App />);
  const { findByDisplayValue } = screen;
  await findByDisplayValue("hi");
});

test("renders normal content without editor", async () => {
  render(<Normal />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
