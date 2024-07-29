const BASE_URL = 'https://forum-api.dicoding.dev/v1';

function getAccessToken() {
  // return null
  return localStorage.getItem('accessToken');
}

function putAccessToken(accessToken) {
  return localStorage.setItem('accessToken', accessToken);
}

function getUsersFromStorage() {
  // return null
  return JSON.parse(localStorage.getItem('users'));
}

function putUsersFromStorage(users) {
  return localStorage.setItem('users', JSON.stringify(users));
}

async function fetchWithToken(url, options = {}) {
  const token = getAccessToken();
  if (!token) {
    window.location.href = '/login';
    return { error: true, errorCode: '2', errorMessage: 'Harus Login terlebih dahulu' };
  }
  return fetch(url, {
    ...options,
    headers: {
      ...options.headers,
      Authorization: `Bearer ${token}`,
    },
  });
}

const API = (() => {
  async function getThreads() {
    const response = await fetch(`${BASE_URL}/threads`);
    const responseJson = await response.json();

    const { status, message } = responseJson;

    if (status !== 'success') {
      // window.alert('Ups, something went wrong');
      throw new Error(message);
    }

    if (responseJson.status !== 'success') {
      return null;
    }
    return responseJson?.data?.threads;
  }

  // async function getAllUsers() {
  //   const response = await fetch(`${BASE_URL}/users`);

  //   const responseJson = await response.json();

  //   const { status, message } = responseJson;

  //   if (status !== 'success') {
  //     throw new Error(message);
  //   }

  //   const { data: { users } } = responseJson;

  //   return users;
  // }

  async function getThreadsDetail(ThreadId) {
    const response = await fetch(`${BASE_URL}/threads${ThreadId ? `/${ThreadId}` : ''}`);
    const responseJson = await response.json();

    const { status, message } = responseJson;

    if (status !== 'success') {
      throw new Error(message);
    }

    if (responseJson.status !== 'success') {
      return null;
    }
    return responseJson?.data?.detailThread;
  }

  const addThread = async ({ title, body, category }) => {
    const requestBody = JSON.stringify({
      title,
      body,
      category,
    });
    const token = getAccessToken();
    if (!token) {
      window.location.href = '/login';
      return { error: true, errorCode: '2', errorMessage: 'Harus Login terlebih dahulu' };
    }
    const response = await fetch(`${BASE_URL}/threads`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: requestBody,
    });
    const responseJson = await response.json();

    if (responseJson.status !== 'success') {
      alert(responseJson.message);
      return { error: true };
    }

    return { error: false, thread: responseJson?.data?.thread };
  };

  const addComment = async ({ content, ThreadId }) => {
    const requestBody = JSON.stringify({
      content,
    });
    const token = getAccessToken();
    if (!token) {
      window.location.href = '/login';
      return { error: true, errorCode: '2', errorMessage: 'Harus Login terlebih dahulu' };
    }
    const response = await fetch(`${BASE_URL}/threads/${ThreadId}/comments`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: requestBody,
    });
    const responseJson = await response.json();

    if (responseJson.status !== 'success') {
      alert(responseJson.message);
      return { error: true };
    }

    return { error: false, comment: responseJson?.data?.comment };
  };

  const threadVoteUp = async (ThreadId) => {
  // const requestBody= JSON.stringify({
  //   content
  // })
    const token = getAccessToken();
    if (!token) {
      window.location.href = '/login';
      return { error: true, errorCode: '2', errorMessage: 'Harus Login terlebih dahulu' };
    }
    const response = await fetch(`${BASE_URL}/threads/${ThreadId}/up-vote`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    // body: requestBody,
    });
    const responseJson = await response.json();

    if (responseJson.status !== 'success') {
      alert(responseJson.message);
      return { error: true };
    }

    return { error: false, upVotes: responseJson?.data?.vote };
  };
  const commentVoteUp = async ({ ThreadId, CommentId }) => {
  // const requestBody= JSON.stringify({
  //   content
  // })
    const token = getAccessToken();
    if (!token) {
      window.location.href = '/login';
      return { error: true, errorCode: '2', errorMessage: 'Harus Login terlebih dahulu' };
    }
    const response = await fetch(`${BASE_URL}/threads/${ThreadId}/comments/${CommentId}/up-vote`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    // body: requestBody,
    });
    const responseJson = await response.json();

    if (responseJson.status !== 'success') {
      alert(responseJson.message);
      return { error: true };
    }

    return { error: false, upVotes: responseJson?.data?.vote };
  };
  const commentDownVote = async ({ ThreadId, CommentId }) => {
  // const requestBody= JSON.stringify({
  //   content
  // })
    const token = getAccessToken();
    if (!token) {
      window.location.href = '/login';
      return { error: true, errorCode: '2', errorMessage: 'Harus Login terlebih dahulu' };
    }
    const response = await fetch(`${BASE_URL}/threads/${ThreadId}/comments/${CommentId}/down-vote`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    // body: requestBody,
    });
    const responseJson = await response.json();

    if (responseJson.status !== 'success') {
      alert(responseJson.message);
      return { error: true };
    }

    return { error: false, downVotes: responseJson?.data?.vote };
  };
  const commentNeutralVote = async ({ ThreadId, CommentId }) => {
  // const requestBody= JSON.stringify({
  //   content
  // })
    const token = getAccessToken();
    if (!token) {
      window.location.href = '/login';
      return { error: true, errorCode: '2', errorMessage: 'Harus Login terlebih dahulu' };
    }
    const response = await fetch(`${BASE_URL}/threads/${ThreadId}/comments/${CommentId}/neutral-vote`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    // body: requestBody,
    });
    const responseJson = await response.json();

    if (responseJson.status !== 'success') {
      alert(responseJson.message);
      return { error: true };
    }

    return { error: false, neutralVotes: responseJson?.data?.vote };
  };

  // const navigation = useNavigation()

  const threadDownVote = async (ThreadId) => {
  // const requestBody= JSON.stringify({
  //   content
  // })
    const token = getAccessToken();
    if (!token) {
    // navigation.navigate("/")
      window.location.href = '/login';
      return { error: true, errorCode: '2', errorMessage: 'Harus Login terlebih dahulu' };
    }
    const response = await fetch(`${BASE_URL}/threads/${ThreadId}/down-vote`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    // body: requestBody,
    });
    const responseJson = await response.json();

    if (responseJson.status !== 'success') {
      alert(responseJson.message);
      return { error: true };
    }

    return { error: false, downVotes: responseJson?.data?.vote };
  };
  const threadNeutralVote = async (ThreadId) => {
  // const requestBody= JSON.stringify({
  //   content
  // })
    const token = getAccessToken();
    if (!token) {
      window.location.href = '/login';
      return { error: true, errorCode: '2', errorMessage: 'Harus Login terlebih dahulu' };
    }
    const response = await fetch(`${BASE_URL}/threads/${ThreadId}/neutral-vote`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    // body: requestBody,
    });
    const responseJson = await response.json();

    if (responseJson.status !== 'success') {
      alert(responseJson.message);
      return { error: true };
    }

    return { error: false, neutralVotes: responseJson?.data?.neutralVotesBy };
  };

  async function register({ name, email, password }) {
    const requestBody = JSON.stringify({
      name,
      email,
      password,
    });

    const response = await fetch(`${BASE_URL}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: requestBody,
    });
    const responseJson = await response.json();

    if (responseJson.status !== 'success') {
      alert(responseJson.message);
      return { error: true };
    }

    return { error: false, account: responseJson?.data?.user };
  }

  async function login({ email, password }) {
    const requestBody = JSON.stringify({
      email,
      password,
    });

    const response = await fetch(`${BASE_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: requestBody,
    });
    const responseJson = await response.json();

    if (responseJson.status !== 'success') {
      alert(responseJson.message);
      return { error: true };
    }

    putAccessToken(responseJson?.data?.token);

    return { error: false, token: responseJson?.data?.token };
  }

  async function myAccount() {
    const response = await fetchWithToken(`${BASE_URL}/users/me`);
    if (response?.errorCode === '2') {
      return response;
    }
    const responseJson = await response.json();

    if (responseJson.status !== 'success') {
      alert(responseJson.message);
      return { error: true };
    }

    return { error: false, myAccount: responseJson?.data?.user };
  }

  async function getLeaderBoards() {
    const response = await fetch(`${BASE_URL}/leaderboards`);
    const responseJson = await response.json();

    if (responseJson.status !== 'success') {
      return null;
    }
    // if(UserId){
    //   return responseJson?.data?.detailThread
    // }
    return responseJson?.data?.leaderboards;
  }
  async function getUsers(UserId) {
    const response = await fetch(`${BASE_URL}/users${UserId ? `/${UserId}` : ''}`);
    const responseJson = await response.json();

    if (responseJson.status !== 'success') {
      return null;
    }
    // if(UserId){
    //   return responseJson?.data?.detailThread
    // }
    putUsersFromStorage(responseJson?.data?.users);
    return responseJson?.data?.users;
  }

  return {
    getThreads,
    getThreadsDetail,
    register,
    login,
    getUsers,
    myAccount,
    addThread,
    addComment,
    threadVoteUp,
    threadDownVote,
    threadNeutralVote,
    commentVoteUp,
    commentDownVote,
    commentNeutralVote,
    getLeaderBoards,
    getUsersFromStorage,
    putUsersFromStorage,
    getAccessToken,
    putAccessToken,
  };
})();

export default API;

export {
  getAccessToken
}
