import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';

function PhotoPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [photo, setPhoto] = useState(null);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/photos/${id}`)
      .then(response => setPhoto(response.data))
      .catch(error => console.log(error));
  }, [id]);

  function handleBackClick() {
    navigate(-1);
  }

  return (
    <div>
      {photo ? (
        <div className='PhotoPage'>
          <button onClick={handleBackClick}>Back</button>
          <h1>{photo.title}</h1>
          <img src={photo.url} alt={photo.title} />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export  {PhotoPage};
