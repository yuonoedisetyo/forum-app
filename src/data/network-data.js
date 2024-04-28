const BASE_URL = 'https://forum-api.dicoding.dev/v1';

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

  export {
      getThreads,
      register
  }