/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

// List of projects/orgs using your project for the users page.
const users = [];

const baseUrl =  '/test-site/';

const siteConfig = {
  title: 'ManTorch', // Title for your website.
  tagline: 'Optimization on Manifolds and Constrained Optimization in Pytorch',
  url: 'https://mantorch.github.io', // Your website URL
  baseUrl: baseUrl, // Base URL for your project */
  // For github.io type URLs, you would set the url and baseUrl like:
  //   url: 'https://facebook.github.io',
  //   baseUrl: '/test-site/',

  // Used for publishing and more
  projectName: 'ManTorch',
  organizationName: 'mariolezcano',
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    {doc: 'introduction', label: 'Introduction'},
    {href: `${baseUrl}api/`, label: 'Docs'},
    {href: 'https://github.com/pytorch/botorch', label: 'GitHub'},
  ],

  // If you have users set above, you add it here:
  users,

  /* path to images for header/footer */
  headerIcon: 'img/favicon.ico',
  footerIcon: 'img/favicon.ico',
  favicon: 'img/favicon.ico',

  /* Colors for website */
  colors: {
    primaryColor: '#fc4a1a',
    secondaryColor: '#f7b733',
    //primaryColor: '#8c9a1f',
    //secondaryColor: '#626b15',
  },

  highlight: {
    theme: 'default',
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: [
    // Github buttons
    'https://buttons.github.io/buttons.js',
    // Copy-to-clipboard button for code blocks
    '${baseUrl}js/code_block_buttons.js',
    'https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.0/clipboard.min.js',
    // Mathjax for rendering math content
    '${baseUrl}js/mathjax.js',
    'https://polyfill.io/v3/polyfill.min.js?features=es6',
    {
        src: 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js',
        async: true,
        id: "MathJax-script",
    }
  ],

  // CSS sources to load
  stylesheets: [`${baseUrl}css/code_block_buttons.css`],

  // On page navigation for the current documentation page.
  onPageNav: 'separate',

  // enable scroll to top button a the bottom of the site
  scrollToTop: true,

  // No .html extensions for paths.
  cleanUrl: true,

  // Open Graph and Twitter card images.
  ogImage: 'img/undraw_online.svg',
  twitterImage: 'img/undraw_tweetstorm.svg',

  docsSideNavCollapsible: false,

  // show html docs generated by sphinx
  wrapPagesHTML: true,
};

module.exports = siteConfig;