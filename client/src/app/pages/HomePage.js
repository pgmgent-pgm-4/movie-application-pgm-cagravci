import { BaseLayout } from '../layouts';
import PopularMovies from '../components/movies/PopularMovies'
import TrendingMovies from '../components/movies/TrendingMovies'
import LatestMovies from '../components/movies/LatestMovies';

import Lists from '../components/lists/Lists';

const HomePage = () => {
  return (
    <BaseLayout>
      <h1>HOME</h1>
      <Lists type='movies' />
    </BaseLayout>
  );
};

export default HomePage;
