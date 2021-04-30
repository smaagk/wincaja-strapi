module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
url: 'https://strapi.wincaja.shop',
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'c5dae4994dbcafbab621d2e39e6e7cd1'),
    },
  },
});
