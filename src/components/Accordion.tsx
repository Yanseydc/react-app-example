import { useState } from 'react';

type AccordionProps = {
  title: string,
  children: React.ReactNode
}

const Accordion = ({ title, children }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div>
        <h1>{title}</h1>
        <button onClick={() => setIsOpen(!isOpen)}>{ isOpen ? 'Close' : 'Open' }</button>
      </div>
      <div>
        {isOpen ? children : null}
      </div>
    </div>
  )
}

export default Accordion;