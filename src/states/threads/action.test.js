/**
 * skenario test
 *
 * - asyncReceiveThreads thunk
 *  - should dispatch action correctly when data fetching success
 *  - should dispatch action and call alert correctly when data fetching failed
 *
 * - asyncReceiveThreadDetail thunk
 *  - should dispatch action correctly when data fetching success
 *  - should dispatch action and call alert correctly when data fetching failed
 *
 * - asyncAddThread thunk
 *  - should dispatch action correctly when data fetching success
 *  - should dispatch action and call alert correctly when data fetching failed
 *
 * - asyncAddComment
 * - asyncThreadUpVote
 * - asyncCommentUpVote
 * - asyncCommentDownVote
 * - asyncCommentNeutralVote
 * - asyncThreadDownVote
 * - asyncThreadNeutralVote
 */

import {
  describe, beforeEach, afterEach, it, vi, expect,
} from 'vitest';
// eslint-disable-next-line import/no-extraneous-dependencies
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import {
//   asyncAddThread,
  asyncReceiveThreadDetail, asyncReceiveThreads, receiveThreadDetailActionCreator,
  receiveThreadsActionCreator,
} from './action';
import API from '../../data/network-data';
// import { hideLoading, showLoading } from '../loading/action';

const fakeThreadsResponse = [
  {
    id: 'thread-Np47p4jhUXYhrhRn',
    title: 'Bagaimana pengalamanmu belajar Redux?',
    body: 'Coba ceritakan dong, gimana pengalaman kalian belajar Redux di Dicoding?',
    category: 'redux',
    createdAt: '2023-05-29T07:55:52.266Z',
    ownerId: 'user-mQhLzINW_w5TxxYf',
    totalComments: 0,
    upVotesBy: [],
    downVotesBy: [],
  },
  {
    id: 'thread-91KocEqYPRz68MhD',
    title: 'Halo! Selamat datang dan silakan perkenalkan diri kamu',
    body: '<div>Bagaimana kabarmu? Semoga baik-baik saja ya. Sekali lagi saya ucapkan selamat datang semuanya!</div><div><br></div><div>Seperti yang sudah disampaikan sebelumnya, pada diskusi ini kamu bisa memperkenalkan diri kamu dan juga berkenalan dengan teman sekelas lainnya.</div><div><br></div><div>Berhubungan baik dengan teman sekelas dan instruktur merupakan bagian penting dari pembelajaran di kelas ini, karena mereka dapat membantu jika kamu mengalami kendala dalam mempelajari dan memahami materi.&nbsp;&nbsp;</div><div><br></div><div>Oleh karena itu, luangkanlah waktumu untuk saling mengenal dan mencairkan suasana. Membangun interaksi dengan siswa lain akan membuat pengalaman belajar kamu jauh lebih menyenangkan dan menarik.&nbsp;</div><div><br></div><div>Beberapa hal yang dapat kamu tulis pada perkenalan diri:</div><div><br></div><div>- Siapa kamu dan dari mana kamu berasal?</div><div>- Apa pekerjaan atau pendidikan kamu saat ini?</div><div>- Kenapa kamu mengambil pelatihan ini? Apakah mungkin karena kamu sedang mengejar perubahan dalam karir, atau lainnya?</div>',
    category: 'perkenalan',
    createdAt: '2023-05-29T07:54:35.746Z',
    ownerId: 'user-aROWej8yYA1sOfHN',
    totalComments: 1,
    upVotesBy: [
      'user-mQhLzINW_w5TxxYf',
    ],
    downVotesBy: [],
  },
];

const fakeThreadDetailResponse = {
  id: 'thread-Np47p4jhUXYhrhRn',
  title: 'Bagaimana pengalamanmu belajar Redux?',
  body: 'Coba ceritakan dong, gimana pengalaman kalian belajar Redux di Dicoding?',
  createdAt: '2023-05-29T07:55:52.266Z',
  owner: {
    id: 'user-mQhLzINW_w5TxxYf',
    name: 'Dimas Saputra',
    avatar: 'https://ui-avatars.com/api/?name=Dimas Saputra&background=random',
  },
  category: 'redux',
  comments: [],
  upVotesBy: [],
  downVotesBy: [],
};

const idthread = 'thread-Np47p4jhUXYhrhRn';

const fakeErrorResponse = new Error('Ups, something went wrong');

// ... kode fake data

describe('asyncReceiveThreads thunk', () => {
  beforeEach(() => {
    API._getThreads = API.getThreads;
  });

  afterEach(() => {
    API._getThreads = API.getThreads;
    delete API._getThreads;
  });

  // ... backup and restore

  it('should dispatch action correctly when data fetching success', async () => {
    // arrange
    // stub implementation
    API._getThreads = () => Promise.resolve(fakeThreadsResponse);
    // mock dispatch
    const dispatch = vi.fn();

    // action
    await asyncReceiveThreads()(dispatch);

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(receiveThreadsActionCreator(fakeThreadsResponse));
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });

  it('should dispatch action and call alert correctly when data fetching failed', async () => {
    // arrange
    // stub implementation
    API._getThreads = () => Promise.reject(fakeErrorResponse);
    // mock dispatch
    const dispatch = vi.fn();
    // mock alert
    window.alert = vi.fn();

    // action
    await asyncReceiveThreads()(dispatch);

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
    // expect(window.alert).toHaveBeenCalledWith(fakeErrorResponse.message);
  });
});

describe('asyncReceiveThreadDetail thunk', () => {
  beforeEach(() => {
    API._getThreadDetail = API.getThreadsDetail;
  });

  afterEach(() => {
    API._getThreadDetail = API.getThreadsDetail;

    // delete backup data
    delete API._getThreadDetail;
  });

  // ... backup and restore

  it('should dispatch action correctly when data fetching success', async () => {
    // arrange
    // stub implementation
    API._getThreadDetail = () => Promise.resolve(fakeThreadDetailResponse);
    // mock dispatch
    const dispatch = vi.fn();

    // action
    await asyncReceiveThreadDetail(idthread)(dispatch);

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(
      receiveThreadDetailActionCreator(fakeThreadDetailResponse),
    );
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });

  it('should dispatch action and call alert correctly when data fetching failed', async () => {
    // arrange
    // stub implementation
    API._getThreads = () => Promise.reject(fakeErrorResponse);
    // mock dispatch
    const dispatch = vi.fn();
    // mock alert
    window.alert = vi.fn();

    // action
    await asyncReceiveThreadDetail(idthread)(dispatch);

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
    // expect(window.alert).toHaveBeenCalledWith(fakeErrorResponse.message);
  });
});

// const addThreadData = {
//   title: 'tes',
//   body: 'tes',
//   category: 'tes',
// };

// const fakeAddThreadResponse = {
//   id: 'thread-1',
//   title: 'tes',
//   body: 'tes',
//   category: 'tes',
//   createdAt: '2021-06-21T07:00:00.000Z',
//   ownerId: 'users-1',
//   upVotesBy: [],
//   downVotesBy: [],
//   totalComments: 0,
// };

// describe('asyncAddThread thunk', () => {
//   beforeEach(() => {
//     API._addThread = API.addThread;
//     API.putAccessToken('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InVzZXItQl9FZDRiVExNLUt5cVQtbCIsImlhdCI6MTcxODU0MTM4M30.5dQB1kwn6zt_dceB9zfgDkZ411uKzb7AJnr025YX-0Y')
//   });

//   afterEach(() => {
//     API._addThread = API.addThread;

//     // delete backup data
//     delete API._addThread;
//   });

//   // ... backup and restore

//   it('should dispatch action correctly when data fetching success', async () => {
//     // arrange
//     // stub implementation
//     API._addThread = () => Promise.resolve(fakeAddThreadResponse);
//     // mock dispatch
//     const dispatch = vi.fn();

//     // action
//     await asyncAddThread(addThreadData)(dispatch);

//     // assert
//     expect(dispatch).toHaveBeenCalledWith(showLoading());
//     expect(dispatch).toHaveBeenCalledWith(
//       receiveThreadDetailActionCreator(fakeAddThreadResponse),
//     );
//     expect(dispatch).toHaveBeenCalledWith(hideLoading());
//   });

//   it('should dispatch action and call alert correctly when data fetching failed', async () => {
//     // arrange
//     // stub implementation
//     API._addThread = () => Promise.reject(fakeErrorResponse);
//     // mock dispatch
//     const dispatch = vi.fn();
//     // mock alert
//     window.alert = vi.fn();

//     // action
//     await asyncAddThread(addThreadData)(dispatch);

//     // assert
//     expect(dispatch).toHaveBeenCalledWith(showLoading());
//     expect(dispatch).toHaveBeenCalledWith(hideLoading());
//     expect(window.alert).toHaveBeenCalledWith(fakeErrorResponse.message);
//   });
// });
