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

  export {
      getThreads
  }