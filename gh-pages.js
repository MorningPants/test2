import { publish } from 'gh-pages';

publish(
 'build', // path to public directory
 {
  branch: 'gh-pages',
  repo: 'https://github.com/MorningPants/test2', // Update to point to your repository
  user: {
   name: 'Andy Hopkins', // update to use your name
   email: 'andyghopkins@gmail.com' // Update to use your email
  },
  dotfiles: true
  },
  () => {
   console.log('Deploy Complete!');
  }
);
