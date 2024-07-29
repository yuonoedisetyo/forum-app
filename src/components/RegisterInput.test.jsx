/**
 * skenario testing
 *
 * - RegisterInput component
 *   - should handle username typing correctly
 *   - should handle password typing correctly
 *   - should call Register function when Register button is clicked
 */

import React from 'react';
import {
  describe, it, expect, afterEach, vi,
} from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import matchers from '@testing-library/jest-dom/matchers';
import RegisterInput from './RegisterInput';

expect.extend(matchers);

describe('RegisterInput component', () => {
  afterEach(() => {
    cleanup();
  });

  it('should handle username typing correctly', async () => {
    // Arrange
    render(<RegisterInput register={() => { }} />);
    const usernameInput = await screen.getByPlaceholderText('Email');

    // Action
    await userEvent.type(usernameInput, 'yedisetyo@gmail.com');

    // Assert
    expect(usernameInput).toHaveValue('yedisetyo@gmail.com');
  });

  it('should handle password typing correctly', async () => {
    // Arrange
    render(<RegisterInput register={() => {}} />);
    const passwordInput = await screen.getByPlaceholderText('Password');

    // Action
    await userEvent.type(passwordInput, '123456');

    // Assert
    expect(passwordInput).toHaveValue('123456');
  });
  it('should handle name typing correctly', async () => {
    // Arrange
    render(<RegisterInput register={() => {}} />);
    const passwordInput = await screen.getByPlaceholderText('Nama');

    // Action
    await userEvent.type(passwordInput, 'Yuono');

    // Assert
    expect(passwordInput).toHaveValue('Yuono');
  });

  // ... skenario pengujian lainnya

  it('should call register function when register button is clicked', async () => {
    // Arrange
    const mockRegister = vi.fn();
    render(<RegisterInput register={mockRegister} />);
    const usernameInput = await screen.getByPlaceholderText('Email');
    await userEvent.type(usernameInput, 'yedisetyo@gmail.com');
    const passwordInput = await screen.getByPlaceholderText('Password');
    await userEvent.type(passwordInput, '123456');
    const NamaInput = await screen.getByPlaceholderText('Nama');
    await userEvent.type(NamaInput, 'Yuono');
    const registerButton = await screen.getByRole('button', { name: 'Simpan' });

    // Action
    await userEvent.click(registerButton);

    // Assert
    expect(mockRegister).toHaveBeenCalledWith({
      email: 'yedisetyo@gmail.com',
      password: '123456',
      name: 'Yuono',
    });
  });
});