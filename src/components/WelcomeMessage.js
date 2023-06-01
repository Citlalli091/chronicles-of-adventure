import React from 'react';
function WelcomeMessage() {
  const messageStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: 'calc(100vh - 60px)',
    textAlign: 'center',
    background: '#E1F5FE',
  };
  return (
    <div style={messageStyle}>
      <h1>Welcome!</h1>
      <p>Please sign up or log in to continue.</p>
    </div>
  );
}
export default WelcomeMessage;