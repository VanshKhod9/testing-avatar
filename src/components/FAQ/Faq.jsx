import React from "react";
import { useState } from "react";
import './Faq.css';
import faq from '../../assets/last2.jpg'

const faqs = [
  { id: 1, q: 'Lorem ipsum dolor sit amet conse', a: 'Lorem ipsum dolor sit amet consectetur. In augue ipsum tellus ultrices. Ac pharetra ultrices consectetur consequat tellus massa. Nec aliquam cras sagittis duis sed euismod arcu hac. Ornare amet ligula ornare lacus aliquam aenean. Eu lacus imperdiet urna amet congue adipiscing. Faucibus magna nisl ullamcorper in facilisis cons' },
  { id: 2, q: 'Lorem ipsum dolor sit amet conse', a: 'Lorem ipsum dolor sit amet consectetur. In augue ipsum tellus ultrices. Ac pharetra ultrices consectetur consequat tellus massa. Nec aliquam cras sagittis duis sed euismod arcu hac. Ornare amet ligula ornare lacus aliquam aenean. Eu lacus imperdiet urna amet congue adipiscing. Faucibus magna nisl ullamcorper in facilisis cons' },
  { id: 3, q: 'Lorem ipsum dolor sit amet conse', a: 'Lorem ipsum dolor sit amet consectetur. In augue ipsum tellus ultrices. Ac pharetra ultrices consectetur consequat tellus massa. Nec aliquam cras sagittis duis sed euismod arcu hac. Ornare amet ligula ornare lacus aliquam aenean. Eu lacus imperdiet urna amet congue adipiscing. Faucibus magna nisl ullamcorper in facilisis cons' },
  { id: 4, q: 'Lorem ipsum dolor sit amet conse', a: 'Lorem ipsum dolor sit amet consectetur. In augue ipsum tellus ultrices. Ac pharetra ultrices consectetur consequat tellus massa. Nec aliquam cras sagittis duis sed euismod arcu hac. Ornare amet ligula ornare lacus aliquam aenean. Eu lacus imperdiet urna amet congue adipiscing. Faucibus magna nisl ullamcorper in facilisis cons' },
  { id: 5, q: 'Lorem ipsum dolor sit amet conse', a: 'Lorem ipsum dolor sit amet consectetur. In augue ipsum tellus ultrices. Ac pharetra ultrices consectetur consequat tellus massa. Nec aliquam cras sagittis duis sed euismod arcu hac. Ornare amet ligula ornare lacus aliquam aenean. Eu lacus imperdiet urna amet congue adipiscing. Faucibus magna nisl ullamcorper in facilisis cons' },
];

const FAQ = () => {
    const [open, setOpen] = useState(null);
    const toggle = i => setOpen(open === i ? null : i);
  return (
    <div className="faq-container">
        <div className="y1">
            <div className="y2">
            <h2>
                FREQUENTLY<br/>ASK <span className="highlight">QUESTIONS</span>
            </h2>
            {faqs.map((f, i) => (
                <div key={f.id} className="box">
                <div onClick={() => toggle(i)} className="btn">
                    {f.id}. {f.q}
                    <span className="icon">{open === i ? '-' : '+'}</span>
                </div>
                {open === i && <div className="answer">{f.a}</div>}
                </div>
            ))}
            </div>
            <div className="y3">
              <img src={faq} alt="FAQ" />
            </div>
        </div>
    </div>
  );
};

export default FAQ;
