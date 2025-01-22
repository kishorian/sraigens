import React, { useEffect, useState } from 'react';
import client from './Client';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import './Blog.css'; // Import shared styles

const AITrends = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await client.getEntries({
          content_type: 'aiTrends' // Replace with your actual Content Type ID
        });
        setPosts(response.items);
        console.log('Fetched Posts:', response.items); // Log fetched posts
      } catch (error) {
        setError('Error fetching posts.');
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="container mt-4">
      <h2>AI Trends</h2>
      {error ? (
        <p>{error}</p>
      ) : (
        <div className="row">
          {posts.map((post) => {
            const { fields } = post || {};
            const { headingai, textai, dateai, imagesai } = fields || {};
            
            console.log('Post Fields:', fields); // Log fields for each post

            let imageUrl = null;
            if (imagesai && imagesai.fields && imagesai.fields.file && imagesai.fields.file.url) {
              imageUrl = imagesai.fields.file.url;
              console.log('Image URL:', imageUrl); // Debugging the image URL
            } else {
              console.log('Image field is missing or improperly formatted');
            }

            let formattedDate = 'Invalid Date';
            if (dateai) {
              const dateObj = new Date(dateai);
              formattedDate = isNaN(dateObj.getTime()) ? 'Invalid Date' : dateObj.toLocaleString();
              console.log('Formatted Date:', formattedDate); // Debugging the formatted date
            } else {
              console.log('Date field is missing or improperly formatted');
            }
            
            const headingContent = headingai && documentToReactComponents(headingai);

            return fields ? (
              <div className="col-md-4 mb-4" key={post.sys.id}>
                {imageUrl ? (
                  <img src={imageUrl} alt="Image for AI Trend" />
                ) : (
                  <p>No image available</p>
                )}
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">{headingContent}</h5>
                    <p className="card-text">{textai || 'No content available'}</p>
                    <p className="card-text">{formattedDate}</p>
                  </div>
                </div>
              </div>
            ) : null;
          })}
        </div>
      )}
    </div>
  );
};

export default AITrends;
