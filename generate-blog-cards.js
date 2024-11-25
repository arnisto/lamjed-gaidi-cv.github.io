function displayBlogCards() {
  const blogsData = [
    {
      title:
        "Unlocking the Power of Search as a Service: A Comprehensive Guide",
      author: {
        name: "Lamjed Gaidi",
        image:
          "https://miro.medium.com/v2/resize:fit:828/format:webp/1*O9UHNbiVOhgqEkmKET3Stw.png",
        url: "https://medium.com/@lamjed.gaidi070",
      },
      description:
        "In today’s digital-first world, seamless and accurate search experiences have become a cornerstone of successful online platforms. Whether you’re navigating a streaming platform, an e-commerce site…",
      url: "https://medium.com/@lamjed.gaidi070/unlocking-the-power-of-search-as-a-service-a-comprehensive-guide-7d416235e7bf",
      image:
        "https://miro.medium.com/v2/resize:fit:828/format:webp/1*1RbetGABZNfbQCojl957DQ.png", // Updated first image
    },
    {
      title:
        "Mastering SEO with Next.js and WordPress: A Guide to Building High-Performance Blogs",
      author: {
        name: "Lamjed Gaidi",
        image:
          "https://miro.medium.com/v2/resize:fit:828/format:webp/1*O9UHNbiVOhgqEkmKET3Stw.png",
        url: "https://medium.com/@lamjed.gaidi070",
      },
      description:
        "In the digital age, content is king, and your blog’s performance directly influences its visibility. Combining Next.js and WordPress as a headless CMS offers unparalleled flexibility, performance…",
      url: "https://medium.com/@lamjed.gaidi070/mastering-seo-with-next-js-and-wordpress-a-guide-to-building-high-performance-blogs-b89c6e389306",
      image:
        "https://miro.medium.com/v2/resize:fit:828/format:webp/1*5ZNO3YhDvKF4T1gFO2bRPg.png",
    },
    {
      title: "How to Kickstart Your Career as a Junior MERN Developer",
      author: {
        name: "Lamjed Gaidi",
        image:
          "https://miro.medium.com/v2/resize:fit:828/format:webp/1*O9UHNbiVOhgqEkmKET3Stw.png",
        url: "https://medium.com/@lamjed.gaidi070",
      },
      description:
        "The tech world moves fast, and one of the most popular full-stack technologies today is the MERN stack. If you’re a junior developer wondering where to begin, you’re in the right place. This guide…",
      url: "https://medium.com/@lamjed.gaidi070/how-to-kickstart-your-career-as-a-junior-mern-developer-93202b51540e",
      image:
        "https://miro.medium.com/v2/resize:fit:828/format:webp/1*EMIEuTrMVH5nvkxWgzvedQ.jpeg", // Same as before
    },
    {
      title:
        "Code Reviews and Improvements: Enhancing a React and Node.js Project",
      author: {
        name: "Lamjed Gaidi",
        image:
          "https://miro.medium.com/v2/resize:fit:828/format:webp/1*O9UHNbiVOhgqEkmKET3Stw.png",
        url: "https://medium.com/@lamjed.gaidi070",
      },
      description:
        "In this blog, I’ll walk you through several real code improvements for a React and Node.js project. The goal is to simplify, optimize, and clean the code. Let’s dive into the corrections and…",
      url: "https://medium.com/@lamjed.gaidi070/code-reviews-and-improvements-enhancing-a-react-and-node-js-project-03630d52c79e",
      image:
        "https://miro.medium.com/v2/resize:fit:828/format:webp/1*FQSwgNWcvyKdOoGMzHE4_w.png", // Same as before
    },
    {
      title:
        "Building a CI/CD Pipeline for a Web App Using GitOps with Argo CD, GitHub, and Azure Kubernetes Service",
      author: {
        name: "Lamjed Gaidi",
        image:
          "https://miro.medium.com/v2/resize:fit:828/format:webp/1*O9UHNbiVOhgqEkmKET3Stw.png",
        url: "https://medium.com/@lamjed.gaidi070",
      },
      description:
        "In today’s fast-paced software development world, delivering reliable updates to web applications quickly and efficiently is key. This is where a well-implemented CI/CD (Continuous Integration and…",
      url: "https://medium.com/@lamjed.gaidi070/building-a-ci-cd-pipeline-for-a-web-app-using-gitops-with-argo-cd-github-and-azure-kubernetes-c73992e276a6",
      image:
        "https://miro.medium.com/v2/resize:fit:828/format:webp/1*cTriV-5n67K_IVBvdn-dHg.png", // Same as before
    },
  ];

  const blogSection = document.getElementById("medium-blogs-section");

  blogsData.forEach((blogData) => {
    const card = document.createElement("div");
    card.className = "blog-card";

    const image = document.createElement("img");
    image.src = blogData.image; // Dynamically assign the image
    card.appendChild(image);

    const content = document.createElement("div");
    content.className = "blog-card-content";

    const title = document.createElement("h3");
    title.textContent = blogData.title;
    content.appendChild(title);

    const description = document.createElement("p");
    description.textContent = blogData.description;
    content.appendChild(description);

    card.appendChild(content);

    const footer = document.createElement("div");
    footer.className = "blog-card-footer";

    const authorLink = document.createElement("a");
    authorLink.href = blogData.author.url;
    authorLink.textContent = blogData.author.name;
    authorLink.target = "_blank";

    const authorInfo = document.createElement("div");
    authorInfo.className = "blog-author";

    const authorImage = document.createElement("img");
    authorImage.src = "images/lamjed009.jpg";
    authorInfo.appendChild(authorImage);
    authorInfo.appendChild(authorLink);

    const readMoreLink = document.createElement("a");
    readMoreLink.href = blogData.url;
    readMoreLink.textContent = "Read more";
    readMoreLink.target = "_blank";

    footer.appendChild(authorInfo);
    footer.appendChild(readMoreLink);

    card.appendChild(footer);

    blogSection.appendChild(card);
  });
}

// Call the function to display the blog cards
displayBlogCards();
