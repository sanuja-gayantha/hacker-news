import React from 'react'
import moment from 'moment'

import { useGlobalContext } from './context'

const Stories = () => {
  const {isLoading, hits, removeStory} = useGlobalContext();

  if(isLoading) {
    return <div className="loading"></div>
  }
  return (
    <section className='stories'>
      {hits.map((story) => {
        const {objectID, title, num_comments, url, points, author, created_at } = story;

        return (
          <article key={objectID} className="story">
            <h4 className="title">{title}</h4>
            <h5>{`posted on ${moment(created_at).format('MMMM Do, YYYY')}`}</h5>
            <p className='info'>
              {points} points by <span>{author} | </span>{num_comments}{' '} comments
            </p>
            <div>
              <a href={url} target='_blank' rel="noopener noreferrer" className="read-link">
                read more
              </a>
              <button className="remove-btn" onClick={() => removeStory(objectID)}>
                remove
              </button>
            </div>
          </article>
        );
      })}
    </section>
  );
}

export default Stories
