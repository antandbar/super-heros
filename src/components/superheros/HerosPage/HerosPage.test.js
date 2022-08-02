import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import { Router } from "react-router-dom";
import HerosPage  from "./HerosPage";
import { createMemoryHistory } from "history";




test("renders HeroPage", () => {
  const history = createMemoryHistory();
  render(
    <Router location={history.location} navigator={history}>
      <HerosPage />
    </Router>
  );
    
  expect(screen.getByText("SUPER - HEROS")).toBeInTheDocument();



});