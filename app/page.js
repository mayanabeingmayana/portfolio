"use client";

import React, { useState } from 'react';
import { LuArrowRight, LuArrowLeft } from "react-icons/lu";

export default function Home() {
  const [currentContent, setCurrentContent] = useState(1);

  const handlePrev = () => {
    setCurrentContent((prevContent) => (prevContent === 1 ? 17 : prevContent - 1));
  };

  const handleNext = () => {
    setCurrentContent((prevContent) => (prevContent === 17 ? 1 : prevContent + 1));
  };

  return (
<div className="bg-black bg-opacity-90 min-h-screen flex flex-col justify-center items-center relative">
  <div className="absolute inset-0 bg-gradient-to-br from-black opacity-98 z-10" style={{
    backgroundImage: 'radial-gradient(#6c6c6c 0.75px, #000000 0.75px)',
    backgroundSize: '15px 15px'
  }}></div>
      <div className="relative z-20 w-[1400px] h-[700px] mb-4 flex flex-col justify-center items-center">
        {currentContent === 1 && (
          <div className='text-center text-white'>
            <p className='text-[20px]'>hi, it’s nice to have you here... I’m</p>
            <h1 className='text-[#A6FDAF] font-bold text-[100px]'>mayana, the ux/ui designer.</h1>
            <div className="w-[840px] mx-auto">
              <p className='text-[20px]'>before, I studied web development and was totally in love with every new piece of knowledge. the app I’m about to introduce was initially thought of as a project to practice something on my own. while facing react though, I wanted more and more to be able to visualize it before trying to type any code. that thought brought us here</p>
            </div>
          </div>
        )}
        {currentContent === 2 && (
          <div className='text-white flex items-center w-[850px]'>
            <img className="w-56 h-120 object-contain" src="/mockup1.png" alt="Background" />
            <img className="w-56 h-120 object-contain ml-4" src="/line.png" alt="Background" />
            <p className="ml-4 text-[20px]">
              this is literally the first screen I drew on Figma. the concept is a social app to share words, and as someone who was a graphic designer and has worked with the Adobe Suite, it wasn't hard to understand how to use it
            </p>
          </div>
        )}
        {currentContent === 3 && (
          <div className='text-center text-white w-[800px] border border-[#A6FDAF] rounded-xl'>
            <p className='text-[20px] p-5'>
            from there, I put on the canvas everything that seemed like a good idea (you would laugh). we'll focus on my process of choosing the navigation for the app. in fact, the ux designer in me was born during this project. once I started wanting to make it easier, there was no way to let it go. but the more I tried, the harder it got. and that's why I fell in love with this topic; it was a sign that the road ahead of me was challenging—which means fun
            </p>
          </div>
        )}
        {currentContent === 4 &&
        <div className='text-white flex flex-col items-center justify-center'>
            <p className="text-[20px] p-5 text-center w-[800px]">
            take a look at these screens. they have 9 navigation buttons each. it was based on what other applications looked like. I didn't think much about it at the time, the only thing that mattered was that it looked nice enough
            </p>
            <div className='flex'>
          <img className="w-56 h-120 object-contain" src="/home1.png" alt="Background" />
          <img className="w-56 h-120 object-contain ml-4" src="/explore1.png" alt="Background" />
          <img className="w-56 h-120 object-contain ml-4" src="/profile1.png" alt="Background" />
          </div>
        </div>}


        {currentContent === 5 &&
          <div className='text-center text-white w-[750px] border border-[#A6FDAF] rounded-xl'>
          <p className='text-[20px] p-5'>
          clean design has my heart, and with that in mind, the buttons at the top started to annoy me. why have them there when the ones at the bottom lead to the same path? by removing them, I realized the users would not know where they were. so the text was needed. the trouble came from wanting the screen to be clean, right? instead of just icons, the text went into the buttons, and I also removed two buttons and added a menu
          </p>
        </div>}


        {currentContent === 6 &&
        <div className='text-white flex flex-col items-center justify-center'>
        <div className='flex'>
      <img className="w-56 h-120 object-contain" src="/home2.png" alt="Background" />
      <img className="w-56 h-120 object-contain ml-4" src="/home2.1.png" alt="Background" />
      </div>
    </div>}


        {currentContent === 7 &&
                <div className='text-white flex flex-col items-center justify-center'>
                <p className="text-[20px] p-5 text-center w-[750px]">
                it seemed like the perfect solution until I noticed it had four main buttons. it may not seem like much to most eyes, but from the perspective of someone who has been using her 300x300 grandma’s phone for quite some time, I disagree. here are some issues to consider:            </p>
                <div className='flex flex-col w-[600px]'>
                  <div className='flex'><li className="text-lg text-[#A6FDAF]"></li>
                  <span>her phone has three navigation buttons at the bottom, like every Android. the problem is they are way too close together, and we keep hitting the wrong one all the time</span></div>
                  <div className='flex'><li className="text-lg text-[#A6FDAF] mt-5"></li>
                  <span className='mt-5'>one of my favorite apps is Twitter. it has six navigation buttons at the bottom, and I also keep hitting the wrong one</span></div>
                  <div className='flex'><li className="text-lg text-[#A6FDAF] mt-5"></li>
                  <span className='mt-5'>my grandma doesn't use Twitter. she only uses WhatsApp, and she’s annoyed too. it’s all about tapping where she’s supposed to drag, pressing where she’s supposed to tap, and it never ends</span></div>
                  <div className='flex'><li className="text-lg text-[#A6FDAF] mt-5"></li>
                  <span className='mt-5'>my cousin lends me her iPhone 14 Pro Max, and it’s huge, which means it’s easy to tap on the button you want there if you use both hands. it’s just terrible to use with one hand, to not say impossible</span></div>
              </div>

            </div>}


        {currentContent === 8 &&
          <div className='text-center text-white w-[920px] border border-[#A6FDAF] rounded-xl'>
          <p className='text-[20px] p-5'>
          from that point on, the necessity to build something that felt good to use, no matter the size of the device, became evident. the designs had been created to have a starting point for coding. however, when words like "simple," "intuitive," "user-friendly," and so on joined the mix, I got lost. it was much easier to create a good-looking, clean app, but delivering a good user experience demanded much more from me. every time a new idea materialized, I would also realize it would bring more difficulty. I felt trapped. trying to make it easier only made it harder. the following screens are a good example
          </p>
        </div>}



        {currentContent === 9 &&
                 <div className='text-white flex flex-col items-center justify-center'>
                 <p className="text-[20px] p-5 text-center w-[800px]">
                 the user would enter the app on the "for you" screen. from there, tapping on the button would display two more options. if the user tapped the arrow on the left, the screen would display the main buttons. from there, the user could choose where to go, each button having its own set of paths
                 </p>
                 <div className='flex'>
               <img className="w-56 h-120 object-contain" src="/home3.png" alt="Background" />
               <img className="w-56 h-120 object-contain ml-4" src="/home3.1.png" alt="Background" />
               <img className="w-56 h-120 object-contain ml-4" src="/home3.2.png" alt="Background" />
               </div>
             </div>}


        {currentContent === 10 &&
                  <div className='text-center text-white w-[800px] border border-[#A6FDAF] rounded-xl'>
                  <p className='text-[20px] p-5'>
                  at the time it didn't seem too hard to understand. but building the app with only personal use in mind doesn't make any sense. of course having more steps to complete a simple task didn't bother me—it's my app, it could have 10! nevertheless, the goal is for others to use it as well, a better navigation system was necessary. then, I got a better solution. I built a prototype of the following screens and watched two friends and my grandma use it
                  </p>
                </div>}



        {currentContent === 11 &&
          <div className='text-white flex items-center w-[850px]'>
          <img className="w-72 h-130 object-contain" src="/home4.png" alt="Background" />
          <div className='h-96 mb-[160px]'>
          <div className='flex'>
          <img className="w-56 h-120 object-contain ml-4 mb-[220px]" src="/line.png" alt="Background" />
          <p className="ml-4 text-[20px]">
          the title of the screen is displayed at the top center to help the navigation
          </p>
          </div>
          <div className='flex mt-20'>
          <img className="w-56 h-120 object-contain ml-4 mt-32" src="/line.png" alt="Background" />
          <p className="ml-4 mt-32 text-[20px]">
          only three navigation buttons with a good distance between them
          </p>
          </div>
          </div>
        </div>
        }



        {currentContent === 12 &&
          <div className='text-white flex items-center w-[850px]'>
            <img className="w-72 h- h-130 object-contain" src="/home4.1.png" alt="Background" />
            <img className="w-56 h-120 object-contain ml-4 mb-40" src="/line.png" alt="Background" />
            <p className="ml-4 text-[20px] mb-40">
            touch the note to interact
            </p>
          </div>
        }



        {currentContent === 13 &&
          <div className='text-white flex items-center w-[850px]'>
            <img className="w-72 h- h-130 object-contain" src="/home4.2.png" alt="Background" />
            <img className="w-56 h-120 object-contain ml-4 mt-60" src="/line.png" alt="Background" />
            <p className="ml-4 text-[20px] mt-60">
            the menu is large to make it easy to tap the desired button in any device size
            </p>
          </div>
        }



        {currentContent === 14 &&
          <div className='text-white flex items-center w-[850px]'>
            <img className="w-72 h- h-130 object-contain" src="/search.png"  alt="Background" />
            <img className="w-56 h-120 object-contain ml-4 mt-96" src="/line.png" alt="Background" />
            <p className="ml-4 mt-96 text-[20px]">
            the search field is displayed at the bottom instead of the top to make it easier to complete the task
            </p>
          </div>
        }



        {currentContent === 15 &&
        <div className='text-center text-white w-[800px] border border-[#A6FDAF] rounded-xl'>
        <p className='text-[20px] p-5'>
        it was the most beautiful vision ever, I swear. after being asked to try the app, without any further explanations, they got the point of it and moved through the app very easily. even my grandma didn’t have any problems touching a target. to use with one hand though, it’s hard to hit a note if it’s small and at the top of the screen. but i’m working on it. in the upcoming weeks, I'll have a full case study and would love to have you here to watch it come to life        </p>
      </div>
        }



        {currentContent === 16 &&
          <div className='text-white flex items-center w-[950px]'>
            <img className="w-72 h- h-130 object-contain" src="/apple.png"  alt="Background" />
            <img className="w-56 h-120 object-contain ml-4 mt-20" src="/line.png" alt="Background" />
            <p className='text-left text-white w-[800px] border border-[#A6FDAF] rounded-xl p-5'>
            if you’re more experienced, you probably already know what I have just found out. both Android and IOS have functionalities designed to improve user experience on large devices. once enabled, they can pull down the top of the screen. however, on phones the size of an iPhone Pro Max, for example, this feature isn't sufficient. it’s still too arduous; the hand doesn’t reach the top buttons even when they’re not all the way at the top. for this reason, my quest continues. the best solution for now seems to be designing the app with very easy bottom navigation for any device
            </p>
          </div>

        }



        {currentContent === 17 &&
          <div className='text-center text-white w-[650px] border border-[#A6FDAF] rounded-xl'>
          <p className='text-[20px] p-5'>
          there is more to see and more to talk about, but I believe this sums up the process very well. if you would like to see more or talk to me about it, you can email me. I’ll be happy to answer. I promise i’m cool—if you’re weird you’ll like me!    </p>
        </div>}

      </div>

      <div className="flex flex-col justify-between z-20">
        <div>
        <button
          className="hover:bg-[#A6FDAF] hover:rounded-3xl hover:text-[#333333] text-white font-bold py-2 px-4"
          onClick={handlePrev}
        >
          <LuArrowLeft className="text-3xl" />
        </button>
        <button
          className="hover:bg-[#A6FDAF] hover:rounded-3xl hover:text-[#333333] text-white font-bold py-2 px-4"
          onClick={handleNext}
        >
          <LuArrowRight className="text-3xl" />
        </button>
        </div>
        <p className='text-white flex justify-center mt-3 text-sm'>{currentContent} / 17</p>
      </div>
    </div>
  );
}
