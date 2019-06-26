import React from 'react';
import { withRouter } from 'react-router';

function AuthCallback(props) {
  props.auth.handleAuthentication().then(() => {
    props.history.push('/posts');
  });

  return (
    <div>
      Loading user profile...
    </div>
  );
}

export default withRouter(AuthCallback);
