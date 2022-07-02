/** @type {import('next').NextConfig} */
const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on'
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block'
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN'
  },
  {
    key: 'Referrer-Policy',
    value: 'origin-when-cross-origin'
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  }
];

const nextConfig = {
  swcMinify: true,
  reactStrictMode: true,
  // async redirects() {
  //   return [
  //     {
  //       source: '/',
  //       destination: '/home',
  //       permanent: false,
  //     },
  //   ]
  // },
  experimental: {
    output: 'standalone',
    runtime: 'experimental-edge',
    swcPlugins: [
      // ['plugin', {
      //   [require.resolve('css-variable/swc'), {
      //     displayName: true,
      //     basePath: __dirname
      //   }]
      // }]
    ]
  },
  compiler: {
    removeConsole: true
  },
  images: {
    domains: ['firebasestorage.googleapis.com']
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      'react/jsx-runtime.js': require.resolve('react/jsx-runtime')
    }

    config.resolve = {
      ...config.resolve,

      fallback: {
        ...config.resolve.fallback,
        child_process: false,
        fs: false
      }
    }

    return config
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: securityHeaders
      }
    ]
  }
}

module.exports = nextConfig
