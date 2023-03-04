module.exports = {
  apps: [
    {
      name: 'eziktok',
      script: 'npm start --port 3002',
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
};