// Define an array of events
const events = [
    {
      title: "World Environment Day",
      date: "June 5, 2023",
      location: "Online",
      image: "https://via.placeholder.com/300x200/00bfff/ffffff?text=World+Environment+Day",
      description: "Join us for a virtual event celebrating World Environment Day!",
      link: "https://www.un.org/en/observances/environment-day"
    },
    {
      title: "Climate Action Summit",
      date: "September 22, 2023",
      location: "New York City",
      image: "https://via.placeholder.com/300x200/00bfff/ffffff?text=Climate+Action+Summit",
      description: "The Climate Action Summit brings together leaders from around the world to accelerate action on climate change.",
      link: "https://www.un.org/en/climatechange/summit-2023.shtml"
    },
    {
      title: "International Coastal Cleanup",
      date: "September 16-18, 2023",
      location: "Various Locations",
      image: "https://via.placeholder.com/300x200/00bfff/ffffff?text=International+Coastal+Cleanup",
      description: "Join millions of volunteers around the world to clean up our beaches and waterways.",
      link: "https://oceanconservancy.org/trash-free-seas/international-coastal-cleanup/"
    }
  ];
  
  // Select the main section of the page
  const main = document.querySelector("main");
  
  // Loop through the events array and create HTML elements for each event
  for (let event of events) {
    // Create a div element with a class of "event"
    const eventDiv = document.createElement("div");
    eventDiv.classList.add("event");
  
    // Create an image element with the event image URL
    const image = document.createElement("img");
    image.src = event.image;
    image.alt = event.title;
    eventDiv.appendChild(image);
  
    // Create a heading element with the event title
    const title = document.createElement("h2");
    title.textContent = event.title;
    eventDiv.appendChild(title);
  
    // Create a paragraph element with the event date and location
    const dateLocation = document.createElement("p");
    dateLocation.innerHTML = "<strong>Date:</strong> " + event.date + "<br><strong>Location:</strong> " + event.location;
    eventDiv.appendChild(dateLocation);
  
    // Create a paragraph element with the event description
    const description = document.createElement("p");
    description.textContent = event.description;
    eventDiv.appendChild(description);
  
    // Create a link element with the event "Learn More" URL
    const learnMore = document.createElement("a");
    learnMore.href = event.link;
    learnMore.textContent = "Learn More";
    eventDiv.appendChild(learnMore);
  
    // Add the event div to the main section of the page
    main.appendChild(eventDiv);
  }
  