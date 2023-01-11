import React, { FC } from 'react';


interface CallToActionComponentProps { }

const CallToActionComponent: FC<CallToActionComponentProps> = () => (
  // CTA SECTION
  <section id="cta" className='bg-brightRed'>
    {/* Flex Container */}
    <div className="container flex flex-col items-center justify-between px-6 py-24 mx-auto space-y-12 md:flex-row md:space-y-0">
      {/* Heading */}
      <h2 className="text-5xl font-bold leading-tight text-center text-white md:text-4xl md:max-w-xl md:text-left">
        Simplify how your team works today
      </h2>
      <div>
        <a href="#" className="transition ease-in-out delay-50 duration-300 p-3 px-6 pt-2 text-white bg-white rounded-full align-baseline shadow-2xl text-brightRed hover:bg-gray-300 hover:-translate-y-1 hover:scale-110">
          Get Started
        </a>
      </div>
    </div>
  </section>
);

export default CallToActionComponent;
