/** @type {import('next').NextConfig} */
const withVideos = require('next-videos')


const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['i.ytimg.com'],
  },
  withVideos
}

module.exports = nextConfig
