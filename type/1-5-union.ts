{
  // union Types: OR

  type Direction = 'left' | 'right' | 'up' | 'down';

  type SuccessState = {
    response: {
      body: string;
    };
  };

  type FailState = {
    reason: string;
  };

  type LoginState = SuccessState | FailState;

  function login(id: string, password: string): LoginState {
    return {
      response: {
        body: 'logged in!',
      },
    };
  }

  // in 키워드로 추론 - 근데 좋은 방법은 아님
  function printLoginState(state: LoginState) {
    if ('response' in state) {
      console.log(state.response.body);
    } else {
      console.log(state.reason);
    }
  }
}
