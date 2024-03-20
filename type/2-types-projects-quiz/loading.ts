{
  /**
   * Print Loading State
   */
  type LoadingState = {
    state: 'loading';
  };

  type SuccessState = {
    state: 'success';
    response: {
      body: string;
    };
  };

  type FailState = {
    state: 'fail';
    reason: string;
  };

  type ResourceLoadState = LoadingState | SuccessState | FailState;

  function printLoginState(loginData: ResourceLoadState) {
    if (loginData.state === 'loading') {
      console.log('👀 loading...');
    } else if (loginData.state === 'success') {
      console.log('😃 loaded');
    } else if ((loginData.state = 'fail')) {
      console.log('😱 no network');
    } else {
      throw new Error('알수없는 에러 발생');
    }
  }

  printLoginState({ state: 'loading' }); // 👀 loading...
  printLoginState({ state: 'success', response: { body: 'loaded' } }); // 😃 loaded
  printLoginState({ state: 'fail', reason: 'no network' }); // 😱 no network
}
