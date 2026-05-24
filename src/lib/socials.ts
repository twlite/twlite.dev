export interface SocialLink {
  key: string;
  name: string;
  source: string;
  destination: string;
}

export const socialLinks: SocialLink[] = [
  {
    key: 'github',
    name: 'GitHub',
    source: '/github',
    destination: 'https://github.com/twlite',
  },
  {
    key: 'linkedin',
    name: 'LinkedIn',
    source: '/linkedin',
    destination: 'https://www.linkedin.com/in/twlite',
  },
  {
    key: 'discord',
    name: 'Discord',
    source: '/discord',
    destination: 'https://discord.com/users/916316955772862475',
  },
  {
    key: 'instagram',
    name: 'Instagram',
    source: '/instagram',
    destination: 'https://www.instagram.com/twilight.dev',
  },
  {
    key: 'tiktok',
    name: 'TikTok',
    source: '/tiktok',
    destination: 'https://www.tiktok.com/@twilightdev',
  },
  {
    key: 'patreon',
    name: 'Patreon',
    source: '/patreon',
    destination: 'https://www.patreon.com/twlite',
  },
  {
    key: 'email',
    name: 'Email',
    source: '/email',
    destination: 'mailto:hello@twlite.dev',
  },
  {
    key: 'twitter',
    name: 'Twitter',
    source: '/twitter',
    destination: 'https://twitter.com/hellotwlite',
  },
];

export const redirectsConfig = socialLinks.map((link) => ({
  source: link.source,
  destination: link.destination,
  permanent: false,
}));
