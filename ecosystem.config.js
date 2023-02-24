module.exports = {
  apps: [
    {
      name: 'build',
      script: 'next start --port 3001',
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
};