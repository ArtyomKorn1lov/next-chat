import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Home from '@app/admin/app/page';

describe('Web.Page', () => {
  it('показывает кнопку на стартовой странице', () => {
    render(<Home />);
    expect(screen.getByRole('button', { name: 'Отправить' })).toBeInTheDocument();
  });
});
