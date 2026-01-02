import Swup from 'https://unpkg.com/swup@4?module';
import SwupHeadPlugin from '@swup/head-plugin';
import SwupScrollPlugin from '@swup/scroll-plugin';
import SwupProgressPlugin from '@swup/progress-plugin';
const swup = new Swup({
  containers: ["#swup"],
  plugins: [new SwupHeadPlugin(), new SwupScrollPlugin(), new SwupProgressPlugin()]
});
swup.hooks.on('visit:start', () => {
  console.log(window.location.href);
})