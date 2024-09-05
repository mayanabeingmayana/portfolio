"use client"

import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';

const Arrow = ({ horizontal }) => (
  <div className="flex justify-center">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={horizontal ? "100" : "48"}
      height={horizontal ? "48" : "100"}
      viewBox={horizontal ? "0 0 48 24" : "0 0 24 48"}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`feather ${horizontal ? 'feather-arrow-right' : 'feather-arrow-down'}`}
    >
      {horizontal ? (
        <line x1="1" y1="12" x2="45" y2="12"></line>
      ) : (
        <line x1="12" y1="1" x2="12" y2="45"></line>
      )}
    </svg>
  </div>
);



const Home = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handlePlayPause = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="p-8 bg-gray-50 flex flex-col items-center">
      {/* Project Overview Section */}

      <h1 className="text-[104px] w-[1000px] text-center font-bold mb-2 mt-48" style={{ lineHeight: '0.8' }}>I'm Mayana, the product designer.</h1>
      <section className="w-full max-w-3xl text-center mb-4">
        <p className="bg-[#A6FDAF] p-4 rounded-lg shadow">
        At the age of 26, living in Brazil, I'm a creative soul who's eager to make solid contributions to the boring world I live in. To help me in this journey, I invite you to scroll down and take a look at some of my latest creations. It's not more than a 5m read.</p>
      </section>

      <Arrow />
      <div className='-mt-3'>
      <Arrow />
      </div>
      <div className='-mt-3'>
      <Arrow />
      </div>
      <div className='-mt-3'>
      <Arrow />
      </div>
      <div className='-mt-3'>
      <Arrow />
      </div>

      {/* The Problem Section */}
      <section className="w-full max-w-1xl text-center mb-4">
        <h2 className="text-4xl font-bold mb-2">Developing a Feature for<br/> Movie Tracking Apps</h2>
      </section>


      <Arrow />


      {/* The Problem Section */}
      <section className="w-full max-w-3xl text-center mb-4">
        <h2 className="text-2xl font-bold mb-2">The problem</h2>
        <p className="bg-[#A6FDAF] p-4 rounded-lg shadow">
        Reviewing and rating movies or TV shows is pretty common for enthusiasts of these art forms. There are many platforms that allow them to keep track of what they're watching and tell everyone else what they liked or didn't like and why. But users go to other platforms, like Twitter, to find specific comments. They search for words, hoping to get fresh, relevant results. But because the platform isn't built for that specific purpose, it's always a long shot. Movie tracking apps today are full of features, but I believe they are missing this one.</p>
      </section>

      <Arrow />

      {/* The Goal Section */}
      <section className="w-full max-w-3xl text-center mb-4">
        <h2 className="text-2xl font-bold mb-2">The goal</h2>
        <p className="bg-[#A6FDAF] p-4 rounded-lg shadow">
        There is currently no direct way for users to interact by commenting on specific scenes. Adding a commenting feature could increase user engagement and foster a sense of community. The goal is to validate the need and effectiveness of this feature.</p>
      </section>

      <Arrow />

<section className="w-full max-w-3xl text-center mb-4">
  <h2 className="text-2xl font-bold mb-2">Research</h2>
  <p className="bg-[#A6FDAF] p-4 rounded-lg shadow">
  Conducted interviews with 5 active movie tracking app users to understand their needs and expectations regarding user interaction on the platforms.</p>
</section>

      {/* User Research Pain Points Section */}
      <section className="w-full max-w-3xl text-center mb-4">
        <h2 className="text-base mb-2">Key insights:</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 text-left">
          <div className="bg-[#A6FDAF] p-4 rounded-lg shadow">
            <h3 className="mb-2">Users find it difficult and time-consuming to find specific comments online.</h3>
          </div>
          <div className="bg-[#A6FDAF] p-4 rounded-lg shadow">
            <h3 className="mb-2">Users try to get their friends and family to watch the same content so they have someone to talk to.</h3>
          </div>
          <div className="bg-[#A6FDAF] p-4 rounded-lg shadow">
            <h3 className="mb-2">Existing platforms do not meet all their needs.</h3>
          </div>
          <div className="bg-[#A6FDAF] p-4 rounded-lg shadow">
            <h3 className="mb-2">Users are tired of wading through unrelated content.</h3>
          </div>
        </div>
      </section>

<Arrow />

<section className="w-full max-w-3xl text-center mb-4">
  <h2 className="text-2xl font-bold mb-2">Brainstorming</h2>
  <p className="bg-[#A6FDAF] p-4 rounded-lg shadow">
  Brainstorming sessions helped generate ideas for the commenting feature.
  </p>
</section>
      <section className="w-full max-w-3xl text-center mb-4">
        <h2 className="text-base mb-2">Key considerations:</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 text-left">
          <div className="bg-[#A6FDAF] p-4 rounded-lg shadow">
            <h3 className="mb-2">A live mode where users can live comment movies with friends.</h3>
          </div>
          <div className="bg-[#A6FDAF] p-4 rounded-lg shadow">
            <h3 className="mb-2">The timestamp and comments must be in the same box view.</h3>
          </div>
          <div className="bg-[#A6FDAF] p-4 rounded-lg shadow">
            <h3 className="mb-2">Users must have access to an easy to use and powerful search tool.</h3>
          </div>
          <div className="bg-[#A6FDAF] p-4 rounded-lg shadow">
            <h3 className="mb-2">Screens must have only the information needed for the current context.</h3>
          </div>
        </div>
      </section>

      <Arrow />

{/* The Goal Section */}
<section className="w-full max-w-3xl text-center mb-4">
  <h2 className="text-2xl font-bold mb-2">Prototyping</h2>
  <p className="bg-[#A6FDAF] p-4 rounded-lg shadow">
  This interactive prototype, created using Figma, serves as a preliminary model to test and refine the user experience. It includes key functionality such as navigating to the comments section and reading specific comments from specific scenes. By simulating real user interactions, this prototype allowed me to gather valuable feedback and make necessary adjustments.
</p>
</section>

      <div className='flex gap-5'>
      <button onClick={handlePlayPause} className="playPauseButton border-4 border-[#A6FDAF] p-2 rounded-lg">
          {isPlaying ? 'Click here to pause the prototype' : 'Click here to watch the prototype'}
        </button>

      </div>

<div className="videoContainer -mb-9 -mt-9">
        {isMounted && (
          <video
            ref={videoRef}
            className="videoPlayer"
          >
            <source src="/commentingtv.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
      </div>

<Arrow />

      <section className="w-full max-w-3xl text-center mb-4">
        <h2 className="text-2xl font-bold mb-2">Usability Testing</h2>
        <p className="bg-[#A6FDAF] p-4 rounded-lg shadow">
        Conducted usability tests with 5 users. A mix of regular movie tracking app users and cinephiles, ages 15-54, with varying levels of technical proficiency. Main tasks:
        </p>
      </section>
      <div className='flex justify-center gap-6 mt-3 mb-5 max-w-3xl'>
          <span  className="bg-[#A6FDAF] h-13 p-3 rounded-lg shadow">        Discoverability: Verify if users can easily find and recognize the purpose of the feature.
          </span>
          <span className="bg-[#A6FDAF] h-13 p-3 rounded-lg shadow">Understandability: Verify if users can intuitively understand how to use the tools without prior guidance.</span>
        </div>

      <section className="w-full max-w-3xl text-center mb-4">
        <h2 className="text-xl font-bold mb-2">Feedback</h2>
        <p className="bg-[#A6FDAF] text-left p-4 rounded-lg shadow" style={{ lineHeight: '1.8' }}>
        1. Participants discovered the purpose of the feature within the first 10 seconds. <br />
2. Users showed excitement after discovery.<br />
3. The search tool was highly praised.<br />
4. Some users suggested adding quick emoji reactions.<br />
5. Positive feedback was given on the UI.<br />
6. Users wanted the filter to be more detailed.<br />
7. Live mode was celebrated, but they were frustrated by not actually seeing it.<br />
</p>
      </section>

      <Arrow />

      <section className="w-full max-w-3xl text-center mb-4">
        <h2 className="text-2xl font-bold mb-2">Conclusion</h2>
        <p className="bg-[#A6FDAF] p-4 rounded-lg shadow">
        The validation of the commenting feature was successful, with participants responding positively and indicating a high likelihood of regular use. Moving forward, I will refine navigation, enhance visual feedback, and build a more robust prototype to conduct additional tests. Continuous iterative testing and user feedback incorporation will be crucial to ensure a seamless user experience. These steps will ensure the comment feature exceeds user expectations and enhances overall engagement on any platform.</p>
      </section>











      <Arrow />
      <div className='-mt-3'>
      <Arrow />
      </div>
      <div className='-mt-3'>
      <Arrow />
      </div>
      <div className='-mt-3'>
      <Arrow />
      </div>
      <div className='-mt-3'>
      <Arrow />
      <h2 className="text-xl font-bold mb-2 text-center">Other projects</h2>
      <div className='flex justify-center gap-6 mt-3 mb-5 max-w-3xl'>
          <span  className="bg-[#A6FDAF] h-13 p-3 rounded-lg shadow"> A lists sharing app. Why? Because I'm that kind of person. From the grocery list to 11 reasons to never pee outside my house. I'd love to read other people lists. So I'm building an app to do just that.
          </span>
          <span className="bg-[#A6FDAF] h-13 p-3 rounded-lg shadow">An app to dedicate a song to someone, invite others to listen to an album, playlist, meet a new artist, go to a concert and much more. Because music is much more than just listening. Music is everything.</span>
        </div>

      </div>

      <div className='flex gap-16 mb-7'>
            <Image
            src="/listsapp.png"
            alt="home screen"
            width={224}
            height={120}
            />
            <Image
            src="/dedication.png"
            alt="explore screen"
            width={224}
            height={120}
            className='ml-4'
            />
          </div>
      <div className='-mt-3 mb-3'>
      <Arrow />
      </div>

        <section className="w-full max-w-3xl text-center mb-3">
        <p className="bg-[#A6FDAF] p-4 rounded-lg shadow">
         If you'd like to help bring any of these apps to life, contact me at the email below. If you have any critiques to help me get better, I would happily read your thoughts. I'm going to be a great professional; it's just a matter of time. Bookmark me and stay around. See you in the next update.
        </p>

      </section>

      <div className='mt-4'>
  <a href='mailto:mayanathedesigner@gmail.com' className='border-4 border-[#A6FDAF] p-2 rounded-lg mb-3 cursor-pointer'>
    mayanathedesigner@gmail.com
  </a>
</div>

    </div>
  );
};

export default Home;

