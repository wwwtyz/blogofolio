import React from 'react';

import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import { AppThemeProvider } from 'components/AppThemeProvider/AppThemeProvider';
import PostList from 'components/PostCard/PostList';

function App() {
  return (
    <AppThemeProvider>
      <Header />
      <PostList post={[]}></PostList>
      <Footer />
    </AppThemeProvider>
  );
}

export default App;
