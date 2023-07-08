module.exports = {
  apps: [{
    name: "project-cv",
    script: "src/index.js",
    instances: 1,
    autorestart: true,
    watch: true,
    time: true,
    env: {
      NODE_ENV: "production"
    },
    node_args: '--max-old-space-size=1536',
    exec_mode: "cluster",
    env_production: {
      NODE_ENV: "production",
      NODE_OPTIONS: '--max-old-space-size=1536',
    }
  }],

  deploy: {
    production: {
      user: "root",
      host: "157.230.183.123",
      ref: "origin/master",
      repo: "git@github.com:wisdomcsharp/project-cv.git",
      path: "/home/www",
      key: "/Users/obinnaoparaocha/.ssh/hypewize_ai",
      'pre-deploy-local': '',
      'post-deploy': 'npm install && pm2 reload ecosystem.config.js --env production',
      'pre-setup': ''
    }
  }
};
