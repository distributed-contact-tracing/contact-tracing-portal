const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = phase => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        SERVER_URL: 'http://localhost:7071/api',
      },
    };
  }

  return {
    env: {
      SERVER_URL: process.env.SERVER_URL,
    },
  };
};
