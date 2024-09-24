"use client";

import { useState } from 'react';

export default function Home() {
  const allMessages = [
    { sender: 'user', text: "hi artificial intelligence, I'm getting ready to apply for product design roles, so I need you to help me practice presenting my project. pretend you're a hiring manager from a big company, get the necessary info, then tell me how to structure it all and make me do my best work. but not only that, you're also my mum"},
    { sender: 'ai', text: "All right, dear. But first things first, did you eat properly today? Please tell me you have not had any junk food this week!"},
    { sender: 'user', text: "this is not the time for that, get straight to the point"},
    { sender: 'ai', text: "Mayana, answer me!"},
    { sender: 'user', text: "YES, I HAVE EATEN PROPERLY, CAN WE PLEASE START????"},
    { sender: 'ai', text: "Good, good. I will call your grandmother, she will be happy to know! And yes, now we can. Tell me, how are you going to start your presentation?"},
    { sender: 'user', text: "I guess I should tell them a little bit about me, like my name is Mayana, I'm a 26-year-old creative soul from Brazil, who loves reading thrillers, listening to old people and the touch of the sun on my skin for the first time in the day. I'm also always thinking of something new and the only thing that makes me sad about having so little time on earth is the fact that I'll never be able to get all my ideas out of my head"},
    { sender: 'ai', text: "This seems great. But you should consider telling them that your mum is the best ever because, despite the difficulties, she has given you the time and space to find your own world. She watched you go from graphic design to digital marketing, from front-end to product design. How many mothers would do that? Not many, I assure you. When was the last time you told her you loved her?"},
    { sender: 'user', text: "FOCUS, C'MON! I'll let them know, ok? now I should introduce the app. the point is that earlier this year I was learning how to code. I decided it was time to build something I had thought of and couldn't find tutorials for online, so I chose my list sharing app, because I list everything from 10 reasons why you should never pee outside your home to 19 ways to know if your sister has entered your room, and I think it will be really fun to connect people like me, as well as inspire weird people who don't do that"},
    { sender: 'ai', text: "You got that from me. My favorite list is “237 reasons to give your mother a grandchild”!"},
    { sender: 'user', text: " STOP IT!"},
    { sender: 'ai', text: "Anyway, who is the target audience of your app?"},
    { sender: 'user', text: "have you ever heard of Pinterest? they describe themselves as an app for 'discovering recipes, home ideas, style inspiration and other ideas to try' and they use pictures. the audience that would love my lists sharing app are the same people that love getting inspired on Pinterest"},
    { sender: 'ai', text: "It makes sense. Then you need to start talking about your first steps, how you came up with it."},
    { sender: 'user', text: "I'd like to add something first. while I was learning how to code, I also studied a bit of ux. I did it because it was on my roadmap, nothing more. it was only when I sat down to code the feed that my mind went blank. the other projects I had done before had been built many times, so I had a pretty good idea of how they should look. this one, however, I had nothing. I knew that if I started coding and then decided it wasn't how I wanted it, it would be a huge hassle to recode it all. this thought made me want to draw first. and I did draw on paper. but I didn't like the constraints. I went to figma. and that's when I drew my first frame. after that, coding stayed in the back of my mind, because I didn't want to just know what I was going to do, I started wanting to design the best experience possible. the ux designer in me was born, I couldn't help but welcome it"},
    { sender: 'user', image: "screen1.png"},
    { sender: 'user', image: "screen1.1.png"},
    { sender: 'user', image: "screen1.2.png"},
    { sender: 'user', image: "screen1.3.png"},
    { sender: 'ai', text: "This is beautiful, the process of finding something to work with love. Please continue."},
    { sender: 'user', text: "the app itself is very simple and I have no intention of adding more than is necessary. I've found that I'm a minimalist, the apps that make me happiest are the ones that focus on the content, so that's something I'll bring to my creations. the following screens is the first flow I built, ever. six buttons at the bottom and three at the top—these are more like indicators. at the time it seemed pretty good. I hadn't done any research beforehand, I used the previous knowledge I had on UX, which wasn't much, not at all"},
    { sender: 'user', image: "screen2.png"},
    { sender: 'user', image: "screen2.1.png"},
    { sender: 'user', image: "screen2.2.png"},
    { sender: 'user', image: "screen2.3.png"},
    { sender: 'user', text: "but then I had a problem. my phone had been broken for a while, so I was using my grandma's. the phone is an old TCL, very small if you ask me. six buttons on the bottom of a small screen can make life very difficult for the user. infuriating, actually. I kept hitting the wrong one, so I started digging deeper"},
    { sender: 'user', text: "instead of finding solutions, I found more worries. besides my grandma's phone, I also have access to my cousin's phone, which is an iPhone 14 pro max. it's huge, like a brick. what I found? it's horrible to tap on anything from the middle to the top of the screen. If I'm using one hand, I only try it when I'm sure it won't break if I drop it—when I'm in bed or on the sofa. but if I'm using both hands, it's also very exhausting because I hold the phone from the bottom and have to climb up the phone to hit the top"},
    { sender: 'user', text: "so how could I reduce the number of buttons without taking away the main actions? how could I build a navigation that was concentrated at the bottom of the screen? I learned about information architecture, studied established applications to understand how they organized their content, and the more time I spent with it, the more I realized that, as a user, I didn't like much of it"},
    { sender: 'user', text: "most apps have 6 or 5 buttons at the bottom, but remember how awful that is on small phones? and their menu is always at the top, which is bad for the bricks. yeah, big companies doing things one way doesn't mean it's the right way. so... I did that, I did... I wanted to reinvent the wheel. I thought I could do it better, of course I could! so I came up with the following screens"},
    { sender: 'user', image: "screen3.png"},
    { sender: 'user', image: "screen3.1.png"},
    { sender: 'user', image: "screen3.2.png"},
    { sender: 'user', image: "screen3.3.png"},
    { sender: 'user', text: "it was definitely the most irritating moment so far. I removed the indicator buttons at the top and three at the bottom. the text indicator would appear when the user tapped on the desired screen. if they wanted to go to another screen, tapping on the arrow would bring the navigator back. building the prototype was the first time, if I remember well, that I wanted to sit down and cry. happily, I continued to study and soon understood that there were far too many taps for a simple action"},
    { sender: 'user', text: "I took what I'd learned under my arm and built another flow. still no buttons at the top to make it easy for users with big phones. only three buttons at the bottom to make it better for users with small phones. more options are displayed when the buttons are pressed and it's easier to reach"},
    { sender: 'user', image: "screen4.png"},
    { sender: 'user', image: "screen4.1.png"},
    { sender: 'user', image: "screen4.2.png"},
    { sender: 'user', image: "screen4.3.png"},
    { sender: 'ai', text: "This is what the app looks like now?"},
    { sender: 'user', text: "yeah, pretty much"},
    { sender: 'ai', text: "What have you learned so far?"},
    { sender: 'user', text: "oh, I'm going to make a list of What I've Learned So Far Building My First Product"},
    {sender: 'user', text: "1. reinventing the wheel may be cool for the designer, but if it doesn't address the user's needs, it's like dressing up as a clown and telling jokes to an audience that never laughs and soon leaves"},
    {sender: 'user', text: "2. when the internet first appeared, it had its weirdness because of the limitations of the moment. so the internet as we know it still has a lot of what it was like before, even though those limitations have been partially or completely removed. the fact is that we as users are very attached to what we already know, and designers have to find a way to make something great while respecting that"},
    {sender: 'user', text: "3. I'm better at creating something new or updating old stuff than making animations or prototyping"},
    {sender: 'user', text: "4. separating my own opinions (based on who I am and what I like or dislike) from my product designer's opinions (based on design principles, information architecture, etc.) is very important to deliver the best possible work"},
    {sender: 'ai', text: "What are your next steps?"},
    {sender: 'user', text: "this lists app in an ongoing project. I'm building all the flows and the backend. I understand 0 + 0 of the second item, so it's been challenging but fun. once I have the flows done, I'll move on to the front-end. to perfect myself, I've been building features for known apps. so far I've built a feature for Spotify, Netflix and I'm working on a few more for Whatsapp, and of course I have a list full of apps I'd like to add to"},
    {sender: 'ai', text: "That is fantastic! How will they be able to see your work for themselves?"},
    {sender: 'user', text: "I'll leave a link to each project, like these:"},
    {sender: 'user', text: "the current lists app", link: "https://www.figma.com/proto/OQhhUxGOouEwaLCPncerbs/Lists?page-id=0%3A1&node-id=56-1118&node-type=frame&viewport=3213%2C1890%2C0.67&t=NMEh4FVbCegC6XH3-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=56%3A1118"},
    {sender: 'user', text: "the dedication/invitation/recommendation feature for Spotify", link: "https://www.figma.com/proto/nszbc7qbp6VebbIi7eOxGX/Spotify?node-id=0-1&node-type=canvas&viewport=1018%2C341%2C0.14&t=B2D5cBmAO98BvlfR-0&scaling=scale-down&content-scaling=fixed&starting-point-node-id=20%3A687"},
    {sender: 'user', text: "the make your own lists and stats feature for Netflix", link: "https://www.figma.com/proto/oSpa3RaUQi5YiHPk25n1Ex/Netflix?page-id=0%3A1&node-id=1-952&node-type=frame&viewport=942%2C728%2C0.47&t=uzSvjsiS9jQXiB15-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A952"},
    {sender: 'user', text: "do you think they'll like it?"},
    {sender: 'ai', text: "Should I answer as your mother or as a recruiter?"},
    {sender: 'user', text: "give me both"},
    {sender: 'ai', text: "As your mother, of course they will like it! They would be crazy not to. Any company that hired you would be lucky to have a mind like yours creating for them! As your recruiter, I have a list of 569 changes to make. Shall we get started?"},
    {sender: 'user', text: "THAT MUCH? later, now I'm gonna treat myself to some junk food"},
    {sender: 'ai', text: "MAYANA!!!!!!!!!!!!!!!!!!!!!!!!!!!"},
  ];
  // Set initial messages to allMessages
  const [messages, setMessages] = useState(allMessages);

  return (
    <div className="h-screen flex flex-col bg-white">
      {/* Chat header */}
      <div className="flex items-center justify-center p-4 border-b border-gray-300">
        <div className='flex-col'>
        <img
          src="/3.png"
          alt="User Avatar"
          className="w-10 h-10 rounded-full mr-4"
        />
        <div>
          <h2 className="text-lg font-semibold ml-3">AI</h2>
        </div>
        </div>
      </div>

     {/* Messages container */}
      <div className="messages-container flex-1 p-4 overflow-y-auto space-y-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`rounded-div p-3 max-w-xs sm:max-w-lg ${
                message.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'
              }`}
            >
              {message.link ? (
                <a
                  href={message.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block underline"
                >
                  <span>{message.text}</span> {/* Display text as a clickable link */}
                </a>
              ) : (
                <span>{message.text}</span> // Display text normally if no link
              )}

              {/* Check if there's an image to display below the text */}
              {message.image && (
                <img
                  src={message.image}
                  alt="User sent content"
                  className="w-full rounded-lg mt-2" // Add margin to separate from text
                />
              )}
            </div>
          </div>
        ))}
      </div>


{/* Input area as a simple div */}
<div className="p-4 border-t border-gray-300 flex items-center bg-gray-100">
        <div className="flex-1 rounded-full border border-gray-300 p-2 px-4">
        <a href="mailto:mayanathedesigner@gmail.com" className="text-gray-500">email me at mayanathedesigner@gmail.com</a>
        {/* Placeholder text */}
        </div>
        <a href="mailto:mayanathedesigner@gmail.com" className="ml-4 text-blue-500">Send</a> {/* Button can be disabled since no input is available */}
      </div>
    </div>
  );
}