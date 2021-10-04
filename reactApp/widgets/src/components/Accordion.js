import React, { useState } from "react";

const Accordion = ({ items }) => {
    // This is a shortcut to get the element to an array, in this case useState wiilget an array inside of it.
    // activeIndex is a piece of state while setActiveIndex is afunction to change this piece of state
    const [activeIndex, setActiveIndex] = useState(null);

    const onTitleClick = (index) => {
        setActiveIndex(index);
    }

    const renderedItems = items.map((item, index) => {

        const active = index === activeIndex ? 'active' : '';

        return (
            <React.Fragment key={item.title}>
                <div
                    className={`title ${active}`}
                    onClick={() => onTitleClick(index)}
                >
                    <i className="dropdown icon"></i>
                    {item.title}
                </div>
                <div className={`content ${active}`}>
                    <p>{item.content}</p>
                </div>
            </React.Fragment>
        );
    });

    return <div className="ui styled accordion">
        {renderedItems}
    </div>
};

export default Accordion;