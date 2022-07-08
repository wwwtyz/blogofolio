import React from 'react';

import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import { PostCard } from 'components/PostCard/PostCard';
import { AppThemeProvider } from 'components/AppThemeProvider/AppThemeProvider';

const PostTemp = {
  id: 10,
  image: 'https://tms-studapi-dev.s3.amazonaws.com/media/Niira.jpg',
  text: 'my sisters cat',
  date: '2021-10-08',
  lesson_num: 49,
  title: 'Cat Niira',
  author: 123
};
function App() {
  return (
    <AppThemeProvider>
      <Header />
      <PostCard post={PostTemp} />
      <Footer />
    </AppThemeProvider>
  );
}

export default App;
