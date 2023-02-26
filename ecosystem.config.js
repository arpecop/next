module.exports = {
  apps: [
    {
      name: 'build',
      script: 'yarn start --port 3001 && yarn start --port 4001',
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
};