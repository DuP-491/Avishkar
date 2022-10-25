import React from 'react';
import FaqItem from './FaqItem';

function FAQ() {
  return (
    <section className="relative z-20 overflow-hidden bg-slate-100 pt-20 pb-12 lg:pt-[120px] lg:pb-[90px]">
      <div className="container p-4 mx-auto sm:p-0">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[520px] text-center lg:mb-20">
              <span className="block mb-2 text-lg font-semibold text-primary">FAQ</span>
              <h2 className="mb-4 text-3xl font-bold text-dark sm:text-4xl sm:text-[sm md:max-w-md lg:max-w-lgpx]">
                Any Questions? Look Here
              </h2>
              <p className="text-base text-body-color">
                There are many variations of passages of Lorem Ipsum available but the majority have
                suffered alteration in some form.
              </p>
            </div>
          </div>
        </div>
        <div className="mx-auto">
          <FaqItem question="what is this all about">
            <p className="py-3 text-base leading-relaxed text-body-color">
              Lovedeep It takes 2-3 weeks to get your first blog post ready. That includes the
              in-depth research & creation of your monthly content marketing strategy that we do
              before writing your first blog post, Ipsum available .
            </p>
          </FaqItem>
          <FaqItem question="what is this all about">
            <p className="py-3 text-base leading-relaxed text-body-color">
              Lovedeep It takes 2-3 weeks to get your first blog post ready. That includes the
              in-depth research & creation of your monthly content marketing strategy that we do
              before writing your first blog post, Ipsum available .
            </p>
          </FaqItem>
          <FaqItem question="what is this all about">
            <p className="py-3 text-base leading-relaxed text-body-color">
              Lovedeep It takes 2-3 weeks to get your first blog post ready. That includes the
              in-depth research & creation of your monthly content marketing strategy that we do
              before writing your first blog post, Ipsum available .
            </p>
          </FaqItem>
          <FaqItem question="what is this all about">
            <p className="py-3 text-base leading-relaxed text-body-color">
              Lovedeep It takes 2-3 weeks to get your first blog post ready. That includes the
              in-depth research & creation of your monthly content marketing strategy that we do
              before writing your first blog post, Ipsum available .
            </p>
          </FaqItem>
          <FaqItem question="what is this all about">
            <p className="py-3 text-base leading-relaxed text-body-color">
              Lovedeep It takes 2-3 weeks to get your first blog post ready. That includes the
              in-depth research & creation of your monthly content marketing strategy that we do
              before writing your first blog post, Ipsum available .
            </p>
          </FaqItem>
          <FaqItem question="what is this all about">
            <p className="py-3 text-base leading-relaxed text-body-color">
              Lovedeep It takes 2-3 weeks to get your first blog post ready. That includes the
              in-depth research & creation of your monthly content marketing strategy that we do
              before writing your first blog post, Ipsum available .
            </p>
          </FaqItem>
        </div>
      </div>
    </section>
  );
}

export default FAQ;
