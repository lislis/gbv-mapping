module.exports = ({ env }) => ({
  'users-permissions': {
    config: {
      jwtManagement: 'refresh',
      sessions: {
        accessTokenLifespan: 3000, // 50 minutes
        maxRefreshTokenLifespan: 2592000, // 30 days (default)
        idleRefreshTokenLifespan: 1209600, // 14 days (default)
        maxSessionLifespan: 432000, // 5 days 
        idleSessionLifespan:  36000, // 10 hours
        httpOnly: false, // Set to true for HTTP-only cookies
        cookie: {
          name: 'strapi_up_refresh',
          sameSite: 'strict',
          path: '/',
          secure: false, // true in production
        },
      },
    },
  },
  upload: {
    config: {
      provider: 'local',
      providerOptions: {
          sizeLimit: 1000000,
	  path: env("PUBLIC_PATH")
      },
    },
  },

});
