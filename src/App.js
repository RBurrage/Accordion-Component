import React, { useState } from 'react';
import './index.css';

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus."
  },
  {
    title: "How long do I have to return my chair?",
    text:
      "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus."
  },
  {
    title: "Do you ship to countries outside the EU?",
    text:
      "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!"
  }
];

function App() {
  return (
    <div className="App">
      <Accordion data={faqs} />
    </div>
  );
}
export default App;

const Accordion = ({ data }) => {
  const [curOpen, setCurOpen] = useState(null);

  return (
    <div className="accordion">
      {data.map((el, i) => (
        // Accordion pulling data from object...
        <AccordionItem
          curOpen={curOpen}
          onOpen={setCurOpen}
          title={el.title}
          num={i}
          key={el.title}>
          {el.text}
        </AccordionItem>
      ))}

      {/* ...or accordions with configurable contents made possible by way of the children prop */}
      <AccordionItem
        curOpen={curOpen}
        onOpen={setCurOpen}
        title='Content Example Using the Children Prop (JSX)'
        num={22}
        key='test 1'>
        <p>Allows developers to place the content of their choice into the accordion item.</p><br />
        <p>Perhaps a table, with links</p>
        <table>
          <tr>
            <td>One</td>
            <td>2</td>
            <td>3</td>
          </tr>
          <tr>
            <td>4</td>
            <td><a href="https://www.google.com">Google</a></td>
            <td>6</td>
          </tr>
        </table><br />
        <p>Or an unordered list</p>
        <ol>
          <li>One</li>
          <li>Two</li>
          <li>Three</li>
        </ol>
      </AccordionItem>

      <AccordionItem
        curOpen={curOpen}
        onOpen={setCurOpen}
        title='Image Example Using the Children Prop (JSX)'
        num={53}
        key='test 2'>
        Allows developers to place the content of their choice into the accordion item.
        <img src="https://i.etsystatic.com/45189060/r/il/43559f/5258237400/il_1588xN.5258237400_1vbg.jpg" alt="Golden Retriever Puppy" width="200" />
      </AccordionItem>

    </div>
  )
}

const AccordionItem = ({ num, title, curOpen, onOpen, children }) => {
  const isOpen = num === curOpen;

  const handleToggle = () => {
    onOpen(isOpen ? null : num)
  }

  return (
    <div className={`item ${isOpen ? "open" : ""}`} onClick={handleToggle}>
      <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? '-' : '+'}</p>
      {isOpen &&
        <div className="content-box">{children}</div>
      }
    </div>
  )
}