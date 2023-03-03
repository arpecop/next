module.exports = {
  apps: [
    {
      name: "build",
      script: "npm start --port 3001",
      env: {
        NODE_ENV: "production",
      },
    }
  ],
};
