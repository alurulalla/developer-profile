import TextBox from './component/TextBox';
import UserList from './component/UserList';

const { default: ContentHeading } = require('./component/ContentHeading');
const { default: Footer } = require('./component/Footer');
const { default: Hero } = require('./component/Hero');

function App() {
  return (
    <div className='relative w-auto h-screen font-body'>
      <Hero />
      <ContentHeading>Explore developer profiles</ContentHeading>
      <TextBox />
      <UserList />
      <Footer />
    </div>
  );
}

export default App;
