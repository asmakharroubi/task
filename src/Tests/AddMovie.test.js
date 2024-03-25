import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import AddMovie from "../Components/AddMovie/AddMovie";
import { configureStore } from "../Redux/Store/store";
import { Provider } from "react-redux";
// import { configureStore } from '@reduxjs/toolkit';

const mockStore = configureStore([]);

describe("AddMovie Component", () => {
  it("renders the component properly", () => {
    const { getByText, getByLabelText } = render(
      <Provider store={mockStore}>
        <AddMovie />
      </Provider>
    );
    expect(getByText("Add Movie")).toBeInTheDocument();
    expect(getByLabelText("Movie Cover URL")).toBeInTheDocument();
    expect(getByLabelText("Movie Name")).toBeInTheDocument();
  });

  it("handles input change properly", () => {
    const { getByLabelText } = render(
      <Provider store={mockStore}>
        <AddMovie />
      </Provider>
    );
    const urlInput = getByLabelText("Movie Cover URL");
    const nameInput = getByLabelText("Movie Name");

    fireEvent.change(urlInput, { target: { value: "example.com/image.jpg" } });
    fireEvent.change(nameInput, { target: { value: "Test Movie" } });

    expect(urlInput).toHaveValue("example.com/image.jpg");
    expect(nameInput).toHaveValue("Test Movie");
  });
});
