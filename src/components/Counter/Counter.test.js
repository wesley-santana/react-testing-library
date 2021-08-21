import { render, screen } from "@testing-library/react";
import Counter from "./Counter";

describe( 'Counter  Component', () => {
  it('title initial value is zero', () => {
    render(<Counter/>);
    const counterTitle = screen.getByText('0');
    expect(counterTitle).toBeInTheDocument();
  });

  it('verify if existis Counter class in title', ()=> {
    render(<Counter/>);
    const counterTitle = screen.getByText('0');
    expect(counterTitle).toHaveClass('Counter');
  });

  it('Initial value diferent of increment and decrement', ()=> {
    render(<Counter/>);
    const counterTitle = screen.getByText('0');
    expect(counterTitle).not.toHaveClass('Counter--success');
    expect(counterTitle).not.toHaveClass('Counter--danger');
  });
})