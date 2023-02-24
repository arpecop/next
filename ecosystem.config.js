module.exports = {
  apps: [
    {
      name: 'kloun',
      script: 'next start --port 3001',
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
};