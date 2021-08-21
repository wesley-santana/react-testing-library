import React from 'react';
import {render, screen, fireEvent } from '@testing-library/react';
import Todo from '../components/Todo';

describe('Tests for Todo component', () => {
  it('Should add new task when form has  been  submitted', () => {
      //renderizar o componente 
      // buscar input
      // digitar no input
      // buscar o botão
      // clicar no botão
      // buscar tabela
      // verificar se a tarefa foi adicionada na tabela
    
      const { container } = render(<Todo />);
      const input = container.querySelector('[data-testid="input-task"]');
      fireEvent.change(input, {target: {value: 'testing'}})
      expect(input.value).toEqual('testing');
      const btn = container.querySelector('[data-testid="add"]');
      fireEvent.click(btn);
      screen.getByText('testing')
  })

  it('Remove task in list', () => {
    const { container } = render(<Todo />);
    const input = container.querySelector('[data-testid="input-task"]');
    const btnAdd = container.querySelector('[data-testid="add"]');
    const btnClear = container.querySelector('[data-testid="clear"]')
    fireEvent.change(input, {target: {value: 'tomar água'}})
    fireEvent.click(btnAdd);
    fireEvent.change(input, {target: {value: 'ler um livro'}})
    fireEvent.click(btnAdd);
    fireEvent.click(btnClear);
    expect(screen.queryByText('tomar água')).toEqual(null);
    expect(screen.queryByText('ler um livro')).toEqual(null)
  })
})