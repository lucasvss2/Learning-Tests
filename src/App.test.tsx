import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';
import { vi } from 'vitest';

describe('App Component', () => {
  it('should render the form', () => {
    render(<App />);
    expect(screen.getByPlaceholderText('Campo 1')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Campo 2')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Campo 3')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Campo 4')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /enviar/i })).toBeInTheDocument();
  });

  it('should submit form data', async () => {
    const mockConsoleLog = vi.spyOn(console, 'log');
    render(<App />);
  
    fireEvent.change(screen.getByPlaceholderText('Campo 1'), { target: { value: 'Teste 1' } });
    fireEvent.change(screen.getByPlaceholderText('Campo 2'), { target: { value: 'Teste 2' } });
    fireEvent.change(screen.getByPlaceholderText('Campo 3'), { target: { value: 'Teste 3' } });
    fireEvent.change(screen.getByPlaceholderText('Campo 4'), { target: { value: 'Teste 4' } });
    fireEvent.click(screen.getByRole('button', { name: /enviar/i }));
  
    await waitFor(() => {
      expect(mockConsoleLog).toHaveBeenCalledWith({
        field1: 'Teste 1',
        field2: 'Teste 2',
        field3: 'Teste 3',
        field4: 'Teste 4',
      });
    });
  
    mockConsoleLog.mockRestore();
  });
});
