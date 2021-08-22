import { render, screen, fireEvent } from "@testing-library/react";
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

  it('must contain an increment button', () =>{
    render(<Counter />);
    const btnIncrement = screen.getByRole('button', {name: '+'});
    expect(btnIncrement).toHaveClass('Button');
    expect(btnIncrement).toHaveClass('Button--success');
  });

  it('must contain an decrement button', () =>{
    render(<Counter />);
    const btnIncrement = screen.getByRole('button', {name: '-'});
    expect(btnIncrement).toHaveClass('Button');
    expect(btnIncrement).toHaveClass('Button--danger');
  });

  it('click increment', () =>{
    render(<Counter />);
    const btnIncrement = screen.getByRole('button', {name: '+'});
    expect(screen.queryByText('1')).toBeNull();
    fireEvent.click(btnIncrement);
    expect(screen.getByText('1')).toBeInTheDocument();
  });

  it('click decrement', () =>{
    render(<Counter />);
    const btnDecrement = screen.getByRole('button', {name: '-'});
    expect(screen.queryByText('-1')).toBeNull();
    fireEvent.click(btnDecrement);
    expect(screen.getByText('-1')).toBeInTheDocument();
  });

  it('click increment add class Counter--success', () =>{
    render(<Counter />);
    const btnIncrement = screen.getByRole('button', {name: '+'});
    expect(screen.getByText('0')).not.toHaveClass('Counter--success');
    fireEvent.click(btnIncrement);
    expect(screen.getByText('1')).toHaveClass('Counter--success');
  });

  it('click decrement add class Counter--danger', () =>{
    render(<Counter />);
    const btnIncrement = screen.getByRole('button', {name: '-'});
    expect(screen.getByText('0')).not.toHaveClass('Counter--danger');
    fireEvent.click(btnIncrement);
    expect(screen.getByText('-1')).toHaveClass('Counter--danger');
  });
})