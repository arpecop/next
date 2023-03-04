module.exports = {
  apps: [
    {
      name: "build",
      script: "pnpm start --port 3001",
      env: {
        NODE_ENV: "production",
      },
    }
  ],
};
