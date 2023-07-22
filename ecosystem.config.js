module.exports = {
  apps: [{
    name: "project-cv server",
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
  },
  {
    name: "project-cv frontend",
    cwd: "frontend", // Set the current working directory to the frontend directory
    script: "npm",
    args: "run start", //production: run build && npm run start
    instances: 1,
    autorestart: true,
    watch: true,
    time: true,
    env: {
      NODE_ENV: "production"
    },
    exec_mode: "cluster",
    env_production: {
      NODE_ENV: "production",
    }
  }],

  deploy: {
    production: {
      user: "root",
      host: "157.230.183.123",
      ref: "origin/master",
      repo: "git@github.com:wisdomcsharp/project-cv.git",
      path: "/home/www/project-cv",
      key: "/Users/obinnaoparaocha/.ssh/hypewize_ai",
      'pre-deploy-local': '',
      'post-deploy': 'npm install && cd frontend && npm install && cd .. && pm2 reload ecosystem.config.js --env production',
      'pre-setup': ''
    }
  }
};
