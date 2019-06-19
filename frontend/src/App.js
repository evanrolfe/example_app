import React from 'react';
import './App.css';
import PostsTable from './components/posts-table';
import SecretsTable from './components/secrets-table';
import AppRouter from './components/app-router';

class App extends React.Component {
  render() {
    return (
      <AppRouter/>
    );
  }
}
export default App;
