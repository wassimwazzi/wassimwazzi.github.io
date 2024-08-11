import { useEffect } from 'react';

const useOpenLinksInNewTab = () => {
    // Open all links in new tab
    useEffect(() => {
        const links = document.querySelectorAll('a');
        links.forEach(link => {
            if (link.getAttribute('href') && link.getAttribute('target') === null) {
                link.setAttribute('target', '_blank');
                link.setAttribute('rel', 'noreferrer');
            }
        });
    }, []);
};

export default useOpenLinksInNewTab;
