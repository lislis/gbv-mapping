// config/plugins.js (or config/server.js depending on your project/template)
module.exports = {
  upload: {
    config: {
      provider: 'local',
      providerOptions: {
        // Files are written here (mount path)
        root: env("PUBLIC_PATH"),
      },
    },
  },
};
