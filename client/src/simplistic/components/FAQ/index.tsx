import React from 'react';
import FaqItem from './FaqItem';

/* eslint-disable */
function FAQ() {
  return (
    <section className="relative z-20 overflow-hidden bg-gray-900 text-white pt-20 pb-12 lg:pt-[120px] lg:pb-[90px]">
      <div className="container p-4 mx-auto sm:p-0">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[520px] text-center lg:mb-20">
              <span className="block mb-2 text-lg font-semibold text-primary">
                Frequently Asked Questions
              </span>
              <h2 className="mb-4 text-3xl font-bold text-dark sm:text-4xl sm:text-[sm md:max-w-md lg:max-w-lgpx]">
                Any Questions? Look Here
              </h2>
            </div>
          </div>
        </div>
        <div className="mx-auto">
          <FaqItem question="What is Avishkar?">
            <p className="py-3 text-base leading-relaxed text-body-color">
              Avishkar is the annual techno-management fest organized by National Institute of
              Technology, Allahabad (MNNIT) instituted for the enrichment of Engineering and Science
              with the aim of providing a platform for a multitude of students to showcase their
              technical ingenuity and prowess. Serving as a platform for providing an opportunity to
              'Ideate, Innovate & Create' , Avishkar is an experience, full of amusement and
              learning opportunities.
            </p>
          </FaqItem>
          <FaqItem question="What does Avishkar include?">
            <p className="py-3 text-base leading-relaxed text-body-color">
              Avishkar includes: <br />
              Innovative events to test the technical and general know how of the participant.
              Inceptive initiatives to make society a better place to live in. Inspiring speakers to
              know about the eminent personalities and their life stories. Illustrative exhibits to
              update the participant about the ever ending development taking place in the
              engineering industry.
            </p>
          </FaqItem>
          <FaqItem question="When and where is Avishkar going to be scheduled?">
            <p className="py-3 text-base leading-relaxed text-body-color">
              Avishkar'21 will be a grandiose 4-days festival to be held from 26th December to 29th
              December, 2021 in hybrid mode amidst the Covid19 outbreak.
            </p>
          </FaqItem>
          <FaqItem question="How can a participant register for Avishkar?">
            <p className="py-3 text-base leading-relaxed text-body-color">
              All the interested participants can register themselves via the register option
              available at the home page. The registration charges are Rs.250 per student for all
              the events of Avishkar 2021 except Gnosiomania.
            </p>
          </FaqItem>
          <FaqItem question="What is the registration fee for Gnosiomania and Gnotalks?">
            <p className="py-3 text-base leading-relaxed text-body-color">
              The participation fee is Rs.100 for Gnotalks + Gnosiomania quizzes.
            </p>
          </FaqItem>
          <FaqItem question="How will a participant pay the registration fee?">
            <p className="py-3 text-base leading-relaxed text-body-color">
              All the participants are requested to pay the fee within 48 hours of registering on
              the website or contacting the above mentioned point of contact from our PR Team.
              <br />
              Contact the PR team for fee payment.
              <br />
              Akshay Baiplawat : +91 73571 17202
              <br />
              Jyoti Bujethiya : 8868020819
              <br />
              Prakhar Jain : +91 91184 46392
            </p>
          </FaqItem>
          <FaqItem question="How can a participant register for a team event?">
            <p className="py-3 text-base leading-relaxed text-body-color">
              All the interested participants can register themselves by following the steps
              mentioned:
              <ul className="ml-10 list-disc">
                <li>
                  Login to your avishkar account and lock your profile after updating the details.
                </li>
                <li>Head to the manage teams sub-section and create a team.</li>
                <li>Send invites to the respective team members.</li>
                <li>Wait for the team members to accept the invitation.</li>
                <li>Register the team for the particular event.</li>
              </ul>
            </p>
          </FaqItem>
          <FaqItem question="How can a participant register for an individual event?">
            <p className="py-3 text-base leading-relaxed text-body-color">
              All the interested participants can register themselves by following the steps
              mentioned:
              <ul className="ml-10 list-disc">
                <li>
                  Login to your avishkar account and lock your profile after updating the details.
                </li>
                <li>Head to the manage teams sub-section and create a team.</li>
                <li>Register the team for the particular event.</li>
              </ul>
            </p>
          </FaqItem>
          <FaqItem question="How to contact via Social Media?">
            <p className="py-3 text-base leading-relaxed text-body-color">
              Find us @
              <ul className="ml-10 list-disc">
                <li>
                  Official Website:{' '}
                  <a href="https://avishkar.mnnit.ac.in/" className="no-underline hover:underline">
                    https://avishkar.mnnit.ac.in/
                  </a>
                </li>
                <li>
                  Official Instagram Page:{' '}
                  <a
                    href="https://www.instagram.com/avishkar_mnnit/"
                    className="no-underline hover:underline">
                    https://www.instagram.com/avishkar_mnnit/
                  </a>
                </li>
                <li>
                  Official Facebook Page:{' '}
                  <a
                    href="https://www.facebook.com/mnnit.avishkar"
                    className="no-underline hover:underline">
                    https://www.facebook.com/mnnit.avishkar
                  </a>
                </li>
              </ul>
            </p>
          </FaqItem>
          <FaqItem question="Any further query?">
            <p className="py-3 text-base leading-relaxed text-body-color">
              We are always happy to assist you. Mail to:{' '}
              <a href="mailto:avishkar@mnnit.ac.in" className="no-underline hover:underline">
                avishkar@mnnit.ac.in
              </a>
            </p>
          </FaqItem>
        </div>
      </div>
    </section>
  );
}

export default FAQ;
