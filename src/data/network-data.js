const BASE_URL = 'https://forum-api.dicoding.dev/v1';

async function getThreads() {
    const response = await fetch(`${BASE_URL}/threads`);
    const responseJson = await response.json();
  
    if (responseJson.status !== 'success') {
      return  null;
    }
  
    return responseJson.data.threads;
  }

  export {
      getThreads
  }