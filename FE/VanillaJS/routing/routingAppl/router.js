const route = (event) => {
    event = event || window.event;
    event.preventDefault(); // Stop page refresh
    window.history.pushState({}, "", event.target.href); // Change URL
    handleLocation(); // Manually trigger the content swap
};

const routes = {
    404: "/routing/routingAppl/pages/404.html",
    "/": "/routing/routingAppl/pages/index.html",
    "/about": "/routing/routingAppl/pages/about.html",
    "/lorem": "/routing/routingAppl/pages/lorem.html",
};

const handleLocation = async () => {
    const path = window.location.pathname;
    const route = routes[path] || routes[404];
    const html = await fetch(route).then((data) => data.text());
    document.getElementById("main-page").innerHTML = html;
};

// Handle back/forward buttons
window.onpopstate = handleLocation;
// Handle initial page load
handleLocation();