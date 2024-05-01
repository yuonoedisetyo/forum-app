const BASE_URL = 'https://forum-api.dicoding.dev/v1';

function getAccessToken() {
  return localStorage.getItem('accessToken');
}

function putAccessToken(accessToken) {
  return localStorage.setItem('accessToken', accessToken);
}

async function fetchWithToken(url, options = {}) {
  return fetch(url, {
    ...options,
    headers: {
      ...options.headers,
      Authorization: `Bearer ${getAccessToken()}`,
    },
  });
}

async function getThreads(ThreadId) {
    const response = await fetch(`${BASE_URL}/threads${ThreadId?"/"+ThreadId:""}`);
    const responseJson = await response.json();
  
    if (responseJson.status !== 'success') {
      return  null;
    }
    if(ThreadId){
      return responseJson?.data?.detailThread
    }
    return responseJson?.data?.threads;
  }

  const addThread=async({title,body,category})=> {
    const requestBody= JSON.stringify({
      title,
      body,
      category
    })
    const token =  getAccessToken()
    const response = await fetch(`${BASE_URL}/threads`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+token,
      },
      body: requestBody,
    });
    const responseJson = await response.json();
  
    if (responseJson.status !== 'success') {
      alert(responseJson.message);
      return { error: true};
    }
    
    return { error: false,thread:responseJson?.data?.thread };
  }

  async function register({name,email,password}) {

    const requestBody= JSON.stringify({
      name,
      email,
      password
    })

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
      return { error: true};
    }
    
    return { error: false,account:responseJson?.data?.user };
  }

  async function login({email,password}) {

    const requestBody= JSON.stringify({
      email,
      password
    })

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
      return { error: true};
    }

    putAccessToken(responseJson?.data?.token)
    
    return { error: false,token:responseJson?.data?.token };
  }

  async function myAccount() {

    console.log("fetch")

    const response = await fetchWithToken(`${BASE_URL}/users/me`);
    const responseJson = await response.json();
    console.log("response ",response)
  
    if (responseJson.status !== 'success') {
      alert(responseJson.message);
      return { error: true};
    }
    
    return { error: false,myAccount:responseJson?.data?.user };
  }

  async function getUsers(UserId) {
    const response = await fetch(`${BASE_URL}/users${UserId?"/"+UserId:""}`);
    const responseJson = await response.json();
  
    if (responseJson.status !== 'success') {
      return  null;
    }
    // if(UserId){
    //   return responseJson?.data?.detailThread
    // }
    console.log("responseJson?.data ",responseJson?.data)
    return responseJson?.data?.users;
  }

  export {
      getThreads,
      register,
      login,
      getUsers,
      myAccount,
      addThread
  }