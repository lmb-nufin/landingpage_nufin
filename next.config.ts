import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'storage.googleapis.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'i.pravatar.cc',
        port: '',
        pathname: '/**',
      }
    ],
  },
  async redirects() {
    return [
      {
        source: '/modelos/modelos_nufin.pdf',
        destination: 'https://www.samsungknox.com/en/knox-platform/supported-devices',
        permanent: true,
      },
      {
        source: '/modelos/modelos_nufin',
        destination: 'https://www.samsungknox.com/en/knox-platform/supported-devices',
        permanent: true,
      },
      {
        source: '/modelos_nufin.pdf',
        destination: 'https://www.samsungknox.com/en/knox-platform/supported-devices',
        permanent: true,
      },
      {
        source: '/modelos_nufin',
        destination: 'https://www.samsungknox.com/en/knox-platform/supported-devices',
        permanent: true,
      },
      {
        source: '/modelos/:path*',
        destination: 'https://www.samsungknox.com/en/knox-platform/supported-devices',
        permanent: true,
      },
      {
        source: '/modelos.pdf',
        destination: 'https://www.samsungknox.com/en/knox-platform/supported-devices',
        permanent: true,
      },
      {
        source: '/pdf/derechosarco.pdf',
        destination: '/DerechosArco.html',
        permanent: true,
      },
      {
        source: '/pdf/derechosarco',
        destination: '/DerechosArco.html',
        permanent: true,
      },
      {
        source: '/pdf/DerechosArco.pdf',
        destination: '/DerechosArco.html',
        permanent: true,
      },
      {
        source: '/pdf/DerechosArco',
        destination: '/DerechosArco.html',
        permanent: true,
      },
      {
        source: '/servicio_cliente.html',
        destination: '/#servicio',
        permanent: true,
      },
      {
        source: '/servicio_cliente',
        destination: '/#servicio',
        permanent: true,
      },
      {
        source: '/como_funcion.html',
        destination: '/#como-funciona',
        permanent: true,
      },
      {
        source: '/como_funciona.html',
        destination: '/#como-funciona',
        permanent: true,
      },
      {
        source: '/como_funciona',
        destination: '/#como-funciona',
        permanent: true,
      },
      {
        source: '/sobre_nosotros.html',
        destination: '/#inicio',
        permanent: true,
      },
      {
        source: '/sobre_nosotros',
        destination: '/#inicio',
        permanent: true,
      },
      {
        source: '/index.html',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
