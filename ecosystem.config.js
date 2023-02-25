module.exports = {
  apps: [
    {
      name: 'eziktokbuild',
      script: 'yarn start --port 3002',
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
};