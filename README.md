# Wise starter for Gatsby on Netlify
[![Build Status](https://travis-ci.org/TomPichaud/wise-starter.svg?branch=master)](https://travis-ci.org/TomPichaud/wise-starter)

- [x] Netlify : Form component
- [x] Emotion + Tailwind CSS
- [x] Offline + Manifest + MSApplication
- [x] SEO : OpenGraph (FB, Twitter) + Icons + Sitemap + i18n
- [x] Markdown : Template + Link headers + i18n
- [x] Internationalization ['i18n-react'](https://github.com/alexdrel/i18n-react) + Link & Lang components
- [x] Legal: Informations, Terms, Privacy, GDPR

- [ ] Netlify CMS
- [ ] Search Engine
- [ ] Fathom Analytics

Demo: https://wise-starter.netlify.com

# Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/TomPichaud/wise-starter)

# Thinking Lab

- [ ] Page Transitions
- [ ] SmoothScroll

# To Fix

- [ ] Anchor Link not scrolling : [issue 5314](https://github.com/gatsbyjs/gatsby/issues/5314)

# Subfont

`yarn add subfont`

package.json
`"build": "gatsby build && subfont public -i"`

# Lighthouse Audit

`Hosted on Netlify`

| Categories     | Results |
| -------------- |:-------:|
| Performance    | 100%    |
| PWA            | 100%    |
| Accessibility  | 100%    |
| Best Practices | 100%    |
| SEO            | 100%    |
