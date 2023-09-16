import App from "./App";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

test("loads and displays greeting", async () => {
  // ARRANGE
  render(<App />);

  // ASSERT
  expect(screen.getByRole("heading")).toHaveTextContent("Vite + React");
});
