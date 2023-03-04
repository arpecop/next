module.exports = {
  apps: [
    {
      name: 'eziktok',
      script: 'pnpm start --port 3002',
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
};