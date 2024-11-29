"use client"
import React, { useState } from 'react';

function YouTubePlayer() {
    const [isPlaying, setIsPlaying] = useState(false);

    const videoId = 'HTRQgFYCXHY'; // YouTube 영상 ID

    const handlePlayClick = () => {
        setIsPlaying(true);
    };

    return (
        <div className="relative w-full h-0" style={{ paddingTop: '56.25%' }}>
            {/* 썸네일 배경 */}
            <div
                className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
                style={{
                    backgroundImage: `url(https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg)`,
                }}
            >
                {!isPlaying && (
                    <button
                        onClick={handlePlayClick}
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-red-600 text-white p-4 rounded-full"
                        aria-label="Play"
                        title="Play"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 68 48" width="48" height="48">
                            <path
                                d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z"
                                fill="#f00"
                            ></path>
                            <path d="M 45,24 27,14 27,34" fill="#fff"></path>
                        </svg>
                    </button>
                )}
            </div>

            {/* 비디오 iframe */}
            {isPlaying && (
                <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=0`}
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                ></iframe>
            )}
        </div>
    );
}

export default YouTubePlayer;
