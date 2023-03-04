module.exports = {
  apps: [
    {
      name: 'eziktokbuild',
      script: 'npm start --port 3002',
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
};