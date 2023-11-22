// /** @type {import('next').NextConfig} */
// const nextConfig = {}

// module.exports = nextConfig

const nextConfig = {
  webpack: (config, { isServer }) => {
    // Ajoute une règle pour les fichiers .rux
    config.module.rules.push({
      test: /\.rux$/,
      type: 'asset/source',
    });

    // Important : retourne la configuration modifiée
    return config;
  },
};

module.exports = nextConfig;