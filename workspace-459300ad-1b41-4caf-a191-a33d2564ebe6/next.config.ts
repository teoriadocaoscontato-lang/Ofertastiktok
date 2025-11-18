import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        // Rota principal do checkout
        source: "/checkout",
        destination:
          "https://www.ggcheckout.com/checkout/v2/1hLhyzGAa17BNRqvrldd",
      },
      {
        // Permite caminhos adicionais como /checkout/xyz
        source: "/checkout/:path*",
        destination:
          "https://www.ggcheckout.com/checkout/v2/1hLhyzGAa17BNRqvrldd/:path*",
      },
    ];
  },
};

export default nextConfig;
