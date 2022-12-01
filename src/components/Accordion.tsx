import { useState } from 'react';

type AccordionProps = {
  title: string,
  children: React.ReactNode
}

const Accordion = ({ title, children }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="accordion">
      <div className="accordion__group">
        <h1 className="accordion__title">{title}</h1>
        <button className="accordion__cta" onClick={() => setIsOpen(!isOpen)}>{ isOpen ? 'Close' : 'Open' }</button>
      </div>
      <div className="accordion__content">
        {isOpen ? children : null}
      </div>
    </div>
  )
}

export default Accordion;