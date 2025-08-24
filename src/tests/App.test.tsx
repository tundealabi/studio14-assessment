import App from '@/App';
import { getResourcesData } from '@/helpers';
import { Provider } from '@/providers';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

const Component = () => (
  <Provider>
    <App />
  </Provider>
);

describe('App', () => {
  it('shows all items initially', () => {
    render(<Component />);
    const resources = screen.getAllByRole('article');
    expect(resources).toHaveLength(getResourcesData().length);
  });

  it('filters items based on search input', () => {
    render(<Component />);
    expect(screen.getAllByRole('article')).toHaveLength(
      getResourcesData().length
    );
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'remote work' } });
    const resources = screen.getAllByRole('article');
    expect(resources).toHaveLength(1);
  });

  it('shows no items when the search term does not match', () => {
    render(<Component />);
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'non-existent term' } });
    const resources = screen.queryByRole('article');
    expect(resources).not.toBeInTheDocument();
  });

  it('filters items based on principles', () => {
    render(<Component />);
    fireEvent.click(screen.getByLabelText(/mission and vision/i));
    const resources = screen.getAllByRole('article');
    expect(resources).toHaveLength(3);
  });

  it('filters items based on document types', () => {
    render(<Component />);
    fireEvent.click(screen.getByLabelText(/link/i));
    fireEvent.click(screen.getByLabelText(/pdf/i));
    const resources = screen.getAllByRole('article');
    expect(resources).toHaveLength(5);
  });

  it('filters items based on categories', () => {
    render(<Component />);
    fireEvent.click(screen.getByLabelText(/category 1/i));
    fireEvent.click(screen.getByLabelText(/category 2/i));
    const resources = screen.getAllByRole('article');
    expect(resources).toHaveLength(4);
  });

  it('filters items based on multiple selections', () => {
    render(<Component />);
    fireEvent.click(screen.getByLabelText(/secure base/i));
    fireEvent.click(screen.getByLabelText(/category 4/i));
    fireEvent.click(screen.getByLabelText(/pdf/i));
    const resources = screen.getAllByRole('article');
    expect(resources).toHaveLength(1);
  });
});
