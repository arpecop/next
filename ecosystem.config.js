module.exports = {
  apps: [
    {
      name: 'klounbuild',
      script: 'next start --port 3001',
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
};