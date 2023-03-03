module.exports = {
  apps: [
    {
      name: "build",
      script: "yarn start --port 3001",
      env: {
        NODE_ENV: "production",
      },
    },
    {
      name: "buildscaled",
      script: "yarn start --port 4001",
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
