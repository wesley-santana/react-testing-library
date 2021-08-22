import { render, screen } from "@testing-library/react";
import Counter from "./Counter";

describe( 'Counter  Component', () => {
  it('title initial value is zero', () => {
    render(<Counter/>);
    const counterTitle = screen.getByText('0');
    expect(counterTitle).toBeInTheDocument();
  })
})