/**
 * test scenario for talksReducer
 *
 * - talkReducers function
 *  - should return the initial state when given by unknown action
 *  - should return the users when given by RECEIVE_USERS action
 *  - should return the account when given by RECEIVE_MY_ACCOUNT action
 *  - should return the account when given by LOGIN action
 *  - should return the users with the new account when given by ADD_ACCOUNT action
 */

import { describe, it, expect } from 'vitest';
import { accountReducer, tokenReducer } from './reducer';

describe('talkReducers function', () => {
  it('should return the initial state when given by unknown action', () => {
    // arrange
    const initialState = [];
    const action = { type: 'UNKNOWN' };

    // action
    const nextState = accountReducer(initialState, action);

    // assert
    expect(nextState).toEqual(initialState);
  });

  it('should return the users when given by RECEIVE_USERS action', () => {
    // arrange
    const initialState = [];
    const action = {
      type: 'RECEIVE_USERS',
      payload: {
        users: [
          {
            id: 'john_doe',
            name: 'John Doe',
            email: 'john@example.com',
            avatar: 'https://generated-image-url.jpg',
          },
        ],
      },
    };

    // action
    const nextState = accountReducer(initialState, action);

    // assert
    expect(nextState).toEqual(action.payload.users);
  });

  it('should return the account when given by RECEIVE_MY_ACCOUNT action', () => {
    // arrange
    const initialState = [];
    const action = {
      type: 'RECEIVE_MY_ACCOUNT',
      payload: {
        users: {
          id: 'john_doe',
          name: 'John Doe',
          email: 'john@example.com',
          avatar: 'https://generated-image-url.jpg',
        },
      },
    };

    // action
    const nextState = accountReducer(initialState, action);

    // assert
    expect(nextState).toEqual(action.payload);
  });

  it('should return the account when given by LOGIN action', () => {
    // arrange
    const initialState = [];
    const action = {
      type: 'LOGIN',
      payload: {
        token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImRpbWFzMiIsIm5hbWUiOiJEaW1hcyBTYXB1dHJhIiwicGhvdG8iOiJodHRwczovL3VpLWF2YXRhcnMuY29tL2FwaS8_bmFtZT1EaW1hcyBTYXB1dHJhJmJhY2tncm91bmQ9cmFuZG9tIiwiaXNfcGVybWFuZW50IjpmYWxzZSwiaWF0IjoxNjYzODQwNzY0fQ._HrzpinFYX_m9WfvM-lGCdVrnhnaGHhzt1e6eATE1Iw',
      },
    };

    // action
    const nextState = tokenReducer(initialState, action);

    // assert
    expect(nextState).toEqual(action.payload.token);
  });

  it('should return the users with the new account when given by ADD_ACCOUNT action', () => {
    // arrange
    const initialState = {};

    const action = {
      type: 'ADD_ACCOUNT',
      payload: {
        user: {
          id: 'user-1234',
          name: 'John Doe2',
          email: 'john2@example.com',
          avatar: 'https://generated-image-url.jpg',
        },
      },
    };

    // action
    const nextState = accountReducer(initialState, action);

    // assert
    expect(nextState).toEqual(action.payload);
  });
});
