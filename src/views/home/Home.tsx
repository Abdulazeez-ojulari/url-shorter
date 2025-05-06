import Header from '../../common/layout/Header';
import UrlForm from '../../common/component/UrlForm';
import UrlList from '../../common/component/UrlList';

const Home = () => {
  document.title="Home | URL SHORTER"
  
  return (
    <div className="dark bg-[#0F1117] text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <Header />
        <UrlForm />
        <UrlList />
      </div>
    </div>
  );
};

export default Home;
