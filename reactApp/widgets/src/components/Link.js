import React from "react";

const Link = ({ className, href, children }) => {
    const onclick = (event) => {
        // we want to make ctrl to work in case the user want to open the new tab
        if (event.metakey || event.ctrlKey) {
            return;
        }
        // We don't want to have a full page reload
        event.preventDefault();
        // This is to update the url
        window.history.pushState({}, '', href);
        // Communicate with Route component that the URL just changed
        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);
    };

    return <a onClick={onclick} className={className} href={href}>{children}</a>
};

export default Link;