module.exports = {
  apps: [
    {
      name: 'eziktokbuild',
      script: 'next start --port 3002',
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
};