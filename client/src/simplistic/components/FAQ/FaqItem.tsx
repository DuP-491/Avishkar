import React, { useState } from 'react';
import PropTypes from 'prop-types';

function FaqItem(props: Props) {
  const { children, question, expanded = false } = props;
  const [isExpanded, setIsExpanded] = useState(expanded);
  return (
    <div className="shadow-lg single-faq mb-8 w-full sm:w-4/5 mx-auto rounded-lg border border-[#F3F4FE] bg-white p-4 sm:p-8 lg:px-6 xl:px-8">
      <button className="flex w-full text-left faq-btn" onClick={() => setIsExpanded(!isExpanded)}>
        <div className="mr-5 flex h-10 w-full max-w-[40px] items-center justify-center rounded-lg bg-primary bg-opacity-5 text-primary">
          <svg
            width="17"
            height="10"
            viewBox="0 0 17 10"
            className="transition-all duration-300 fill-current icon"
            style={{ transform: isExpanded ? 'rotate(180deg)' : 'rotate(0)' }}>
            <path
              d="M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z"
              fill="#3056D3"
              stroke="#3056D3"
            />
          </svg>
        </div>
        <div className="w-full">
          <h4 className="text-lg font-semibold text-black">{question}</h4>
        </div>
      </button>
      <div
        className="faq-content pl-[62px] transition-all duration-700 overflow-hidden"
        style={{ height: isExpanded ? 'min-content' : '0' }}>
        {children}
      </div>
    </div>
  );
}

FaqItem.propTypes = {
  children: PropTypes.node.isRequired,
  question: PropTypes.string.isRequired,
  expanded: PropTypes.bool
};

type Props = PropTypes.InferProps<typeof FaqItem.propTypes>;

export default FaqItem;
