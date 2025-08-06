import HomePage from "../pages/HomePage";
import { PostContext } from "../contexts/PostContexts";

import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";

const mockPosts = [
  { userId: 1, id: 1, title: "Test Title 1", body: "Test Body 1" },
  { userId: 1, id: 2, title: "Test Title 2", body: "Test Body 2" },
  { userId: 1, id: 3, title: "Test Title 3", body: "Test Body 3" },
  { userId: 1, id: 4, title: "Test Title 4", body: "Test Body 4" },
];

describe("HomePage navigation buttons", () => {
  test("renders navigation buttons", () => {
    render(
      <PostContext.Provider value={mockPosts}>
        <MemoryRouter initialEntries={["/?pageNo=1"]}>
          <HomePage />
        </MemoryRouter>
      </PostContext.Provider>
    );

    const leftBtn = screen.getByTestId("leftBtn");
    const rightBtn = screen.getByTestId("rightBtn");

    expect(leftBtn).toBeInTheDocument();
    expect(rightBtn).toBeInTheDocument();
  });
});
