module.exports = {
  apps: [
    {
      name: "kloun",
      script: "pnpm start --port 3001",
      env: {
        NODE_ENV: "production",
      },
    }
  ],
};
