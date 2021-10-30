import React from "react";
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";
import Like from "../like";

let container;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
  act(() => {
    ReactDOM.render(
      <Like />,
      container
    );
  });
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

describe("Testing Like component", () => {
  it("Defaults to 0 Likes", () => {
    const p = container.querySelector("p");
    expect(p.textContent).toBe("Likes: 0");
  });
  it("Like adds 1 when clicked Like Button", () => {
    const increment = container.querySelector("#increment"); 
    const p = container.querySelector("p");
    
    act(() => {
        increment.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });
    expect(p.textContent).toBe("Likes: 1");
  });
  it("Like decrement 1 when clicked Dislike Button", () => {
    const decrement = container.querySelector("#decrement"); 
    const p = container.querySelector("p");
    
    act(() => {
        decrement.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });
    expect(p.textContent).toBe("Likes: -1");
  });
});
