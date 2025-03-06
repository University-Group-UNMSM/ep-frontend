import React, { useState } from 'react';

const RatingComponent = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <div className="flex flex-col">
      <div className="mb-2 flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill={(hover || rating) >= star ? '#FBBF24' : '#D1D5DB'}
            className="h-6 w-6 cursor-pointer transition-colors"
            onClick={() => setRating(star)}
            onMouseEnter={() => setHover(star)}
            onMouseLeave={() => setHover(0)}
          >
            <path d="M12 .587l3.668 7.431L24 9.748l-6 5.847 1.417 8.268L12 18.896l-7.417 4.967L6 15.595 0 9.748l8.332-1.73L12 .587z" />
          </svg>
        ))}
      </div>
    </div>
  );
};

export default RatingComponent;
