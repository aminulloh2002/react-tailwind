import React, { FC } from 'react';


interface TestimonialsComponentProps { }

const TestimonialsComponent: FC<TestimonialsComponentProps> = () => (
  // Testimonials
  <section className="testimonials">
    {/* Container to heading and testm blocks*/}
    <div className="max-w-6xl px-5 mx-auto mt-32 text-center">
      {/* Heading */}
      <h2 className="text-4xl font-bold text-center">
        What's Different About Manage?
      </h2>
      {/* Testimonials Container */}
      <div className="flex flex-col mt-24 md:flex-row md:space-x-6">
        {/* Testimonial 1 */}
        <div className="flex-col items-center p-6 my-6 rounded-lg bg-veryLightGray md:w-1/3 not-first:hidden md:!flex first:flex">
          <img src="assets/avatar-anisha.png" alt="" className="w-16 -mt-14" />
          <h5 className="text-lg font-bold">
            Anisha Li
          </h5>
          <p className="text-sm text-darkGreyishBlue">
            “Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”
          </p>
        </div>
        {/* Testimonial 2 */}
        <div className="flex-col items-center p-6 my-6 rounded-lg bg-veryLightGray md:w-1/3 not-first:hidden md:!flex first:flex">
          <img src="assets/avatar-ali.png" alt="" className="w-16 -mt-14" />
          <h5 className="text-lg font-bold">
            Ali Bravo
          </h5>
          <p className="text-sm text-darkGreyishBlue">
            “We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.”
          </p>
        </div>
        {/* Testimonial 3 */}
        <div className="flex-col items-center p-6 my-6 rounded-lg bg-veryLightGray md:w-1/3 not-first:hidden md:!flex first:flex">
          <img src="assets/avatar-richard.png" alt="" className="w-16 -mt-14" />
          <h5 className="text-lg font-bold">
            Richard Watts
          </h5>
          <p className="text-sm text-darkGreyishBlue">
            “Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”
          </p>
        </div>
      </div>
      <div className="my-16">
        {/* <a href="#" className="transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300 p-3 px-6 pt-2 text-white bg-brightRed rounded-full align-baseline hover:bg-brightRedLight">
          Get Started
        </a> */}
        <a href="#" className="transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300 p-3 px-6 pt-2 text-white bg-brightRed rounded-full align-baseline hover:bg-brightRedLight">
          Get Started
        </a>
      </div>
    </div>
  </section>
);

export default TestimonialsComponent;
