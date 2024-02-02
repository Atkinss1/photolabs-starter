import React from 'react';
import photos from 'mocks/photos';
import topics from 'mocks/topics';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import './App.scss';
import { useApplicationData } from 'hooks/useApplicationData';


// Note: Rendering a single component to build components in isolation
const App = () => {

  const { toggleFavorites,
          toggleModal,
          state
        } = useApplicationData();

  return (
    <div className="App">
        <HomeRoute photos={photos} 
                   topics={topics}
                   toggleModal={toggleModal}
                   favorites={state.favorites}
                   toggleFavorites={toggleFavorites} />
        {state.displayModal &&
        <PhotoDetailsModal closeDisplayModal={toggleModal}
                           selectedPhoto={state.selectedPhoto}
                           toggleFavorites={toggleFavorites}
                           favorites={state.favorites}
                           toggleModal={toggleModal} />}
    </div>
  );
};

export default App;
 