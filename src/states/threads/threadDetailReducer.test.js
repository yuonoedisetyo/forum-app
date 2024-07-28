/**
 * test scenario for threadDetailReducer
 *
 * - threadDetailReducer function
 * - should return the initial state when given by unknown action
 * - should return the threads when given by RECEIVE_THREAD_DETAIL action
 *
 * - should return the thread with toggled up vote  thread when given by THREAD_UPVOTE action
 * - should return the thread with toggled down vote thread when given by THREAD_DOWNVOTE action
 *
 * - should return the thread with comment up vote thread when given by COMMENT_UPVOTE action
 * - should return the thread with comment down vote thread when given by COMMENT_DOWNVOTE action
 * - should return the thread with comment thread when given by ADD_COMMENT action
 */

import { describe, it, expect } from 'vitest';
import { threadDetailReducer } from './reducer';

describe('threadDetailReducer function', () => {
  it('should return the initial state when given by unknown action', () => {
    // arrange
    const initialState = [];
    const action = { type: 'UNKNOWN' };

    // action
    const nextState = threadDetailReducer(initialState, action);

    // assert
    expect(nextState).toEqual(initialState);
  });

  it('should return the thread when given by RECEIVE_THREAD_DETAIL action', () => {
    // arrange
    const initialState = [];
    const action = {
      type: 'RECEIVE_THREAD_DETAIL',
      payload: {
        threadDetail: {
          id: 'thread-1',
          title: 'Thread Pertama',
          body: 'Ini adalah thread pertama',
          category: 'General',
          createdAt: '2021-06-21T07:00:00.000Z',
          owner: {
            id: 'users-1',
            name: 'John Doe',
            avatar: 'https://generated-image-url.jpg',
          },
          upVotesBy: [],
          downVotesBy: [],
          comments: [
            {
              id: 'comment-1',
              content: 'Ini adalah komentar pertama',
              createdAt: '2021-06-21T07:00:00.000Z',
              owner: {
                id: 'users-1',
                name: 'John Doe',
                avatar: 'https://generated-image-url.jpg',
              },
              upVotesBy: [],
              downVotesBy: [],
            },
          ],
        },
      },
    };

    // action
    const nextState = threadDetailReducer(initialState, action);

    // assert
    expect(nextState).toEqual(action.payload.threadDetail);
  });

  it('should return the thread with toggled like thread when given by THREAD_UPVOTE action', () => {
    // arrange
    const initialState = {
      id: 'thread-1',
      title: 'Thread Pertama',
      body: 'Ini adalah thread pertama',
      category: 'General',
      createdAt: '2021-06-21T07:00:00.000Z',
      ownerId: 'users-1',
      upVotesBy: [],
      downVotesBy: ['users-1'],
      totalComments: 0,
    };

    const action = {
      type: 'THREAD_UPVOTE',
      payload: {
        id: 'vote-1',
        userId: 'users-1',
        threadId: 'thread-1',
        voteType: 1,
      },
    };

    // action: like thread
    const nextState = threadDetailReducer(initialState, action);

    // assert
    expect(nextState).toEqual(
      {
        ...initialState,
        upVotesBy: [action.payload.userId],
        downVotesBy: [],
      },
    );

    // action: like thread with same userid
    const nextState2 = threadDetailReducer(nextState, action);
    expect(nextState2).toEqual(nextState);
  });

  it('should return the thread with toggled unlike thread when given by THREAD_DOWNVOTE action', () => {
    // arrange
    const initialState = {
      id: 'thread-1',
      title: 'Thread Pertama',
      body: 'Ini adalah thread pertama',
      category: 'General',
      createdAt: '2021-06-21T07:00:00.000Z',
      ownerId: 'users-1',
      upVotesBy: ['users-1'],
      downVotesBy: [],
      totalComments: 0,
    };

    const action = {
      type: 'THREAD_DOWNVOTE',
      payload: {
        id: 'vote-1',
        userId: 'users-1',
        threadId: 'thread-1',
        voteType: 1,
      },
    };

    // action: unlike thread
    const nextState = threadDetailReducer(initialState, action);

    // assert
    expect(nextState).toEqual(
      {
        ...initialState,
        upVotesBy: [],
        downVotesBy: [action.payload.userId],
      },
    );

    // action: unlike thread with same userid
    const nextState2 = threadDetailReducer(nextState, action);
    expect(nextState2).toEqual(nextState);
  });

  it('should return the thread with comment up vote thread when given by COMMENT_UPVOTE action', () => {
    // arrange
    const initialState = {
      id: 'thread-1',
      title: 'Thread Pertama',
      body: 'Ini adalah thread pertama',
      category: 'General',
      createdAt: '2021-06-21T07:00:00.000Z',
      owner: {
        id: 'users-1',
        name: 'John Doe',
        avatar: 'https://generated-image-url.jpg',
      },
      upVotesBy: [],
      downVotesBy: [],
      comments: [
        {
          id: 'comment-1',
          content: 'Ini adalah komentar pertama',
          createdAt: '2021-06-21T07:00:00.000Z',
          owner: {
            id: 'users-1',
            name: 'John Doe',
            avatar: 'https://generated-image-url.jpg',
          },
          upVotesBy: [],
          downVotesBy: ['users-1'],
        },
      ],
    };

    const action = {
      type: 'COMMENT_UPVOTE',
      payload: {
        id: 'vote-1',
        userId: 'users-1',
        commentId: 'comment-1',
        voteType: 1,
      },
    };

    // action: up vote comment thread
    const nextState = threadDetailReducer(initialState, action);

    // assert
    expect(nextState).toEqual(
      {
        ...initialState,
        comments: [
          {
            id: 'comment-1',
            content: 'Ini adalah komentar pertama',
            createdAt: '2021-06-21T07:00:00.000Z',
            owner: {
              id: 'users-1',
              name: 'John Doe',
              avatar: 'https://generated-image-url.jpg',
            },
            upVotesBy: ['users-1'],
            downVotesBy: [],
          },
        ],
      },
    );

    // action: down vote comment thread with same userid
    const nextState2 = threadDetailReducer(nextState, action);
    expect(nextState2).toEqual(nextState);
  });
  it('should return the thread with comment down vote thread when given by COMMENT_DOWNVOTE action', () => {
    // arrange
    const initialState = {
      id: 'thread-1',
      title: 'Thread Pertama',
      body: 'Ini adalah thread pertama',
      category: 'General',
      createdAt: '2021-06-21T07:00:00.000Z',
      owner: {
        id: 'users-1',
        name: 'John Doe',
        avatar: 'https://generated-image-url.jpg',
      },
      upVotesBy: [],
      downVotesBy: [],
      comments: [
        {
          id: 'comment-1',
          content: 'Ini adalah komentar pertama',
          createdAt: '2021-06-21T07:00:00.000Z',
          owner: {
            id: 'users-1',
            name: 'John Doe',
            avatar: 'https://generated-image-url.jpg',
          },
          upVotesBy: ['users-1'],
          downVotesBy: [],
        },
      ],
    };

    const action = {
      type: 'COMMENT_DOWNVOTE',
      payload: {
        id: 'vote-1',
        userId: 'users-1',
        commentId: 'comment-1',
        voteType: 1,
      },
    };

    // action: up vote comment thread
    const nextState = threadDetailReducer(initialState, action);

    // assert
    expect(nextState).toEqual(
      {
        ...initialState,
        comments: [
          {
            id: 'comment-1',
            content: 'Ini adalah komentar pertama',
            createdAt: '2021-06-21T07:00:00.000Z',
            owner: {
              id: 'users-1',
              name: 'John Doe',
              avatar: 'https://generated-image-url.jpg',
            },
            upVotesBy: [],
            downVotesBy: ['users-1'],
          },
        ],
      },
    );

    // action: down vote comment thread with same userid
    const nextState2 = threadDetailReducer(nextState, action);
    expect(nextState2).toEqual(nextState);
  });
  it('should return the thread with comment thread when given by ADD_COMMENT action', () => {
    // arrange
    const initialState = {
      id: 'thread-1',
      title: 'Thread Pertama',
      body: 'Ini adalah thread pertama',
      category: 'General',
      createdAt: '2021-06-21T07:00:00.000Z',
      owner: {
        id: 'users-1',
        name: 'John Doe',
        avatar: 'https://generated-image-url.jpg',
      },
      upVotesBy: [],
      downVotesBy: [],
      comments: [
        {
          id: 'comment-1',
          content: 'Ini adalah komentar pertama',
          createdAt: '2021-06-21T07:00:00.000Z',
          owner: {
            id: 'users-1',
            name: 'John Doe',
            avatar: 'https://generated-image-url.jpg',
          },
          upVotesBy: ['users-1'],
          downVotesBy: [],
        },
      ],
    };

    const action = {
      type: 'ADD_COMMENT',
      payload: {
        id: 'comment-2',
        content: 'Ini adalah komentar kedua',
        createdAt: '2021-06-21T07:00:00.000Z',
        upVotesBy: [],
        downVotesBy: [],
        owner: {
          id: 'users-2',
          name: 'John Doe',
          email: 'john@example.com',
        },
      },
    };

    // action: add comment thread
    const nextState = threadDetailReducer(initialState, action);

    // assert
    expect(nextState).toEqual(
      {
        ...initialState,
        comments: [
          {
            id: 'comment-2',
            content: 'Ini adalah komentar kedua',
            createdAt: '2021-06-21T07:00:00.000Z',
            upVotesBy: [],
            downVotesBy: [],
            owner: {
              id: 'users-2',
              name: 'John Doe',
              email: 'john@example.com',
            },
          },
          {
            id: 'comment-1',
            content: 'Ini adalah komentar pertama',
            createdAt: '2021-06-21T07:00:00.000Z',
            owner: {
              id: 'users-1',
              name: 'John Doe',
              avatar: 'https://generated-image-url.jpg',
            },
            upVotesBy: ['users-1'],
            downVotesBy: [],
          },
        ],
      },
    );
  });
});
