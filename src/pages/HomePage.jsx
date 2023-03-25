import { Link } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';


function HomePage() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/photos')
      .then(response => setPhotos(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className='HomePage'>
      <h1>Home</h1>
      <ul>
        {photos.map(photo => (
          <li key={photo.id}>
            <Link to={`/photo/${photo.id}`}>{photo.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export  {HomePage};
