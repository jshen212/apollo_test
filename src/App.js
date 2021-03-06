import logo from './logo.svg';
import './App.css';
import { ApolloProvider, ApolloClient, InMemoryCache, gql, useQuery } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://aqueous-waters-77285.herokuapp.com',
  cache: new InMemoryCache()
});

client
  .query({
    query: gql`
      query GetTodoList {
        todoList {
          name
          completed
        }
      }
    `
  })
  .then(({ data }) => console.log(data));

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </ApolloProvider>
  );
}

export default App;
