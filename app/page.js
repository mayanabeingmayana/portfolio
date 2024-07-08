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

      <h1 className="text-[104px] w-[900px] text-center font-bold mb-2 mt-48" style={{ lineHeight: '0.8' }}>I'm Mayana, the ux designer.</h1>
      <section className="w-full max-w-3xl text-center mb-4">
        <p className="bg-[#A6FDAF] p-4 rounded-lg shadow">
        At the age of 26, living in Brazil, I'm a creative soul who loves discussing the creative world. Instead of a formal and boring introduction, let my projects showcase who I am as a professional.</p>
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
      <h2 className="text-base mb-5 mt-5 text-center">You're about to read the first of two case studies.<br /> Scroll down and do nothing if you hate it. If you like it, then you'll have to become my friend.</h2>
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
        <h2 className="text-4xl font-bold mb-2">Validating a Feature for Movie Tracking Apps</h2>
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
        There is currently no direct way for users to interact by commenting on specific scenes. Adding a commenting feature could increase user engagement and foster a sense of community. The goal is to validate the need and effectiveness of this feature through research, design, and testing.</p>
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
  This interactive prototype, created using Figma, serves as a preliminary model to test and refine the user experience. It includes key functionality such as navigating to the comments section and reading specific comments from specific scenes. By simulating real user interactions, this prototype allows me to gather valuable feedback and make necessary adjustments.
</p>
</section>

      <div className='flex gap-5'>
      <button onClick={handlePlayPause} className="playPauseButton border-4 border-[#A6FDAF] p-2 rounded-lg">
          {isPlaying ? 'Click here to pause the prototype' : 'Click here to watch the prototype'}
        </button>

        <button className="border-4 border-[#A6FDAF] p-2 rounded-lg">
  <a href="https://www.figma.com/proto/4lCUsxhnJLciIbpW1BmTEy/Comments.tv?node-id=0-1&t=oGipUblutTMuh3ww-1" target="_blank" rel="noopener noreferrer">
    Click here to interact with the prototype
  </a>
</button>
      </div>

<div className="videoContainer -mb-6 -mt-4">
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
        The validation of the commenting feature was successful, with participants responding positively and indicating a high likelihood of regular use. The feature meets user needs and would add a valuable layer of interactivity and community engagement to any movie tracking application. The next steps will be to build a better experience, test the feedback received, and make sure the final product is the best version possible.</p>
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
      <h2 className="text-base mb-5 mt-5 text-center">If you read the first one, you'll have to read the next too. Just do it.</h2>
      <div className='mb-2'>
      <Image
        src="/nike.png"
        alt="first screen on Figma"
        width={100}
        height={90}
      />
    </div>
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
        <h2 className="text-4xl font-bold mb-2">Building an Easy Navigation for a Simple Lists Sharing App</h2>
      </section>


      <Arrow />


      {/* The Problem Section */}
      <section className="w-full max-w-3xl text-center mb-4">
        <h2 className="text-2xl font-bold mb-2">The first thought</h2>
        <p className="bg-[#A6FDAF] p-4 rounded-lg shadow">
        I'm a Gen-Z who has been online for quite too many years. Lately, social media has evolved from simple platforms into complex ecosystems. Applications like Instagram, which initially served as straightforward photo-sharing tools, have become cluttered with excessive and intrusive features. This has left my virtual and real bubble dissatisfied, making us struggle to navigate a cluttered interface and yearn for a better experience. With that in mind, when I was choosing a project to practice my coding skills, I thought: why not build a simple social media platform where users could once again enjoy their time, consuming content <i>they</i> create and select?        </p>
      </section>

      <Arrow />

      {/* User Research Pain Points Section */}
      <section className="w-full max-w-3xl text-center mb-4">
        <h2 className="text-2xl font-bold mb-2">The hypothesis</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 text-left">
          <div className="bg-[#A6FDAF] p-4 rounded-lg shadow">
            <h3 className="text-xl font-bold mb-2">1. Overwhelming Features</h3>
            <p>
              Users find the app interface cluttered and difficult to navigate due to the addition of numerous features over time.
            </p>
          </div>
          <div className="bg-[#A6FDAF] p-4 rounded-lg shadow">
            <h3 className="text-xl font-bold mb-2">2. Unwanted Content</h3>
            <p>
              Users are frustrated with the constant stream of unsolicited content and recommendations.
            </p>
          </div>
          <div className="bg-[#A6FDAF] p-4 rounded-lg shadow">
            <h3 className="text-xl font-bold mb-2">3. Fake Accounts</h3>
            <p>
              The increasing presence of bots and fake accounts diminishes the authenticity of interactions on the platform.
            </p>
          </div>
          <div className="bg-[#A6FDAF] p-4 rounded-lg shadow">
            <h3 className="text-xl font-bold mb-2">4. Lack of Control</h3>
            <p>
              Users feel they have little control over the content that appears in their feed.
            </p>
          </div>
        </div>
      </section>

      <Arrow />

      <section className="w-full max-w-3xl text-center mb-4">
        <h2 className="text-2xl font-bold mb-2">The design process</h2>
        <p className="bg-[#A6FDAF] p-4 rounded-lg shadow">
        The next screen displays the first screen I drew on Figma, ever. As someone who has worked with the Adobe Suite, it was easy to learn. To be fully honest, when I chose to solve this problem, UX design was something I only dedicated a third of my time to, because people often said it would be beneficial if I knew it. I was focused on learning how to code and fascinated by the possibility of bringing some of my ideas to life. However, after laying the foundation, I oscillated between the blank screen and the code, unsure of how to create the concept I had in mind. The more I tried, the more I doubted my ability to proceed. That's when I decided to sketch before coding. This approach led me to where I am now. As I started drawing, I wanted to learn more and couldn’t stop striving to make it easier, simpler, more intuitive, and enjoyable to use… That's when the UX designer in me was born.
        </p>
      </section>
      <div className='border-2 rounded-lg'>
      <Image
        src="/mockup1.png"
        alt="first screen on Figma"
        width={224}
        height={120}
      />
    </div>

{/* The Goal Section */}
<section className="w-full max-w-3xl text-center mb-4 mt-5">
  <p className="bg-[#A6FDAF] p-4 rounded-lg shadow">
  Then, I started creating lo-fi wireframes to visualize the initial concept of the app, focused on:
  </p>
  <section className="w-full max-w-3xl text-center mb-1">
  <div className="flex justify-center gap-7 mt-5">
    <div className="bg-[#A6FDAF] w-80 h-10 p-4 rounded-lg shadow flex items-center justify-center md:justify-start">
      <h3 className="text-xl font-bold mb-2 text-center mt-3">Layout and structure</h3>
    </div>
    <div className="bg-[#A6FDAF] w-80 h-10 p-4 rounded-lg shadow flex items-center justify-center md:justify-start">
      <h3 className="text-xl font-bold mb-2 text-center mt-3">Navigation flow</h3>
    </div>
  </div>
</section>

</section>

<section className="w-full max-w-3xl text-center mb-4">
        <p className="bg-[#A6FDAF] p-4 rounded-lg shadow">
          The layout and structure had to be easy to understand at a first glance and the navigation flow couldn't make users think before finding what they're looking for, it had to be intuitive. These two factors were non-negotiable. The following screens were built based on the familiarity principle in design. That's how most apps look like.
        </p>
      </section>

<div className='flex gap-8'>
            <Image
            src="/home1.png"
            alt="home screen"
            width={224}
            height={120}
            className='border-2 rounded-lg'
            />
            <Image
            src="/explore1.png"
            alt="explore screen"
            width={224}
            height={120}
            className='ml-4 border-2 rounded-lg'
            />
            <Image
            src="/profile1.png"
            alt="profile screen"
            width={224}
            height={120}
            className='ml-4 border-2 rounded-lg'
            />
          </div>

<section className="w-full max-w-[790px] text-center mb-4 mt-5">
        <p className="bg-[#A6FDAF] p-4 rounded-lg shadow">
          But it didn't take long for me to realize it didn't make sense. As I worked on it, I was also deep diving again into UX design, design principles, and all the laws that could help me bring up the best experience for the users. Even though it looked like other apps, I realized what a mistake I was making. My phone is broken, so I have been sharing a very small one with my grandma—I'm serious. Do you know what else has six buttons at the bottom? Twitter. And I am always, all the time, hitting the wrong one, no matter how careful I am. It would frustrate users with small phones, so I decreased the number of buttons.
        </p>
      </section>

      <button className="border-4 border-[#A6FDAF] p-2 rounded-lg mt-2 mb-3">
  <a href="https://www.figma.com/proto/LQx1SfTYGDnDtqeLdrcV9S/Grandma's-phone?node-id=0-1&t=oGipUblutTMuh3ww-1" target="_blank" rel="noopener noreferrer">
    Click here to see my grandma's phone
  </a>
</button>

      <div className='flex gap-8'>
          <Image
            src="/home2.png"
            alt="home screen"
            width={224}
            height={120}
          />
          <Image
            src="/home2.1.png"
            alt="home screen with the menu"
            width={224}
            height={120}
            className='ml-4'
          />
      </div>

      <section className="w-full max-w-3xl text-center mb-4 mt-3">
        <p className="bg-[#A6FDAF] p-4 rounded-lg shadow">
        The top buttons didn't have issues with accidentally touching the wrong target, but they still needed to be changed, and I'll explain why. My grandma's phone is the one closest to me, but I've also been using my cousin's iPhone 14 Pro Max. It's a huge phone, which makes it easy to tap the right button... if they're at the bottom. After using her phone from a more UX-oriented perspective, I noticed it's not easy to use if you don't use both hands. It's basically impossible to touch a button at the top of the screen with one hand without risking dropping the phone. Maybe if the user has big hands, it won't be as difficult. Yet, the experience should be the best possible for everyone, not just for people with large hands.        </p>
      </section>
      <button onClick={handlePlayPause} className="border-4 border-[#A6FDAF] p-2 rounded-lg">
          Click here to see how Twitter looks in my cousin's phone
        </button>

      <section className="w-full max-w-3xl text-center mb-4 mt-3">
        <p className="bg-[#A6FDAF] p-4 rounded-lg shadow">
        From here, the 'navigation flow' became more complex. It had to be easy and simple to use for everyone, regardless of the device size, whether it was for one-hand use, or the size of the user's hand. However, every time a new idea materialized, I realized it would introduce more difficulties. I felt trapped, as trying to simplify it only seemed to complicate matters further. The following screens are a good example.

        </p>
      </section>

      <div className='flex gap-8'>
                 <Image
                 src="/home3.png"
                 alt="home for you"
                 width={224}
                 height={120}
                 />
                 <Image
                 src="/home3.1.png"
                 alt="home screen with the menu"
                 width={224}
                 height={120}
                 className='ml-4'
                 />
                 <Image
                 src="/home3.2.png"
                 alt="home screen"
                 width={224}
                 height={120}
                 className='ml-4'
                 />
               </div>


               <section className="w-full max-w-3xl text-center mb-4 mt-3">
        <p className="bg-[#A6FDAF] p-4 rounded-lg shadow">
        I could try to make sure you understand what I was thinking, but I won't because I am not sure... I remember it was very challenging to build a lo-fi prototype because my mind was a mess, I would stop a hundred times to think where the next tap should take. The only thing that seemed to make some sense was that it's easier to tap the right button if there's only three instead of six or four. Then, gladly that baby ux designer in me whispered: if you're having trouble understanding it, imagine the users! What a smart little girl! After that, I started thinking how a simple bottom centered navigation would look like. Then, I built it.
        </p>
      </section>

      <Arrow />

      <section className="w-full max-w-3xl text-center mb-3">
        <h2 className="text-2xl font-bold mb-2">The usability test</h2>
        <p className="bg-[#A6FDAF] p-4 rounded-lg shadow">
          As I'm being honest, I'll continue... At first, every time I heard about "UX research" or "testing", a part of me simply wanted to sleep. I didn't see the value in it. Later, after finishing a course led by a professor clearly in love with research, I was weak and fell in love with it too. But when this app was been built, my baby was still learning what's really important. I didn't ran a research or any testings. The good news though, is that I built a prototype and you can test it yourself.
        </p>
      </section>

      <button className="border-4 border-[#A6FDAF] p-2 rounded-lg mt-2 mb-3">
  <a href="https://www.figma.com/proto/OQhhUxGOouEwaLCPncerbs/Lists?t=oGipUblutTMuh3ww-1" target="_blank" rel="noopener noreferrer">
    Click here to interact with the prototype
  </a>
</button>


        <Arrow />

        <section className="w-full max-w-3xl text-center mb-3">
        <h2 className="text-2xl font-bold mb-2">Conclusions</h2>
        <p className="bg-[#A6FDAF] p-4 rounded-lg shadow">
        After the continuous frustration of building these screens and noticing how annoying it is to use both a small phone and a big phone, I've decided to dive into mobile navigation. How can I build better navigation without breaking design principles and not straying too far from what the user already knows? That's what I'm going to find out. If you would like to help bring any of these apps to life, you can contact me at the email below. If you have any critiques to help me get better, I would happily read your thoughts. I'm going to be a great professional; it's just a matter of time. Bookmark me and stay around. See you in the next update.
        </p>

      </section>

      <div className='mt-4'>
        <span className='border-4 border-[#A6FDAF] p-2 rounded-lg mb-3 cursor-pointer'>mayanathedesigner@gmail.com</span>
      </div>
    </div>
  );
};

export default Home;
