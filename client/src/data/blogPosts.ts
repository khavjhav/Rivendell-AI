export interface BlogPost {
    id: string;
    title: string;
    summary: string;
    content: string; // HTML or Markdown string
    author: string;
    date: string;
    category: "IT News" | "Company Update" | "Tech Insights";
    image?: string;
}

export const BLOG_POSTS: BlogPost[] = [
    {
        id: "tech-trends-2026",
        title: "The Rise of Agentic AI in 2026",
        summary: "How autonomous AI agents are reshaping software development and business automation.",
        content: `
      <p>As we navigate through 2026, the landscape of Artificial Intelligence has shifted dramatically from passive tools to active agents. These autonomous systems are not just answering questions; they are performing complex tasks, managing workflows, and making decisions.</p>
      
      <h2>From Chatbots to Agents</h2>
      <p>The evolution has been rapid. Early LLMs were like oracles—wise but stationary. Today's Agentic AI is like a digital workforce. They can access tools, browse the web, write and execute code, and interact with other APIs to achieve high-level goals.</p>

      <h2>Impact on Business</h2>
      <p>For businesses, this means a shift in how resources are allocated. Routine cognitive tasks—data analysis, customer support level 1 & 2, coding boilerplate—are being offloaded to agents, freeing up human intellect for strategy and creative problem-solving.</p>

      <h2>Rivendell's Approach</h2>
      <p>At Rivendell AI, we are integrating these agentic capabilities into our "Council" of services. We build bespoke agents that understand your specific business context and act as reliable extensions of your team.</p>
    `,
        author: "Elrond Tech Team",
        date: "February 10, 2026",
        category: "Tech Insights",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1000"
    },
    {
        id: "rivendell-launch",
        title: "Rivendell AI: A New Sanctuary for Intelligence",
        summary: "Announcing the launch of our new digital consultancy focused on ethical and powerful AI solutions.",
        content: `
      <p>We are proud to announce the official launch of **Rivendell AI**, a sanctuary where ancient wisdom meets modern technology. Our mission is to guide businesses through the often chaotic landscape of AI adoption.</p>

      <h2>Why 'Rivendell'?</h2>
      <p>In lore, Rivendell was a place of knowledge, healing, and preservation. In the digital age, we see a need for similar values. Technology should not just be fast; it should be thoughtful, sustainable, and empowering.</p>

      <h2>Our Services</h2>
      <p>We invite you to explore our offerings, from bespoke RAG implementations to full-stack web applications infused with intelligence. The Council is assembled and ready to aid you on your quest.</p>
    `,
        author: "The Council",
        date: "February 1, 2026",
        category: "Company Update",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000"
    },
    {
        id: "web-dev-future",
        title: "The Future of Web Development: Beyond React",
        summary: "Exploring server components, edge computing, and the next generation of frontend frameworks.",
        content: `
      <p>Web development is in a state of constant flux. While React remains dominant, the paradigm is shifting towards the server. Server Components, static site generation at the edge, and AI-generated UIs are redefining what it means to build a website.</p>

      <h2>Performance First</h2>
      <p>User expectations for speed are higher than ever. Loading spinners are becoming unacceptable. The future logic pushes computation to the edge, closer to the user, ensuring instant interactions.</p>

      <h2>AI-Driven Interfaces</h2>
      <p>We are also seeing the dawn of Generative UI, where interfaces are constructed on the fly based on user intent/context. This personalization level was previously impossible to code manually.</p>
    `,
        author: "Frontend Guild",
        date: "January 25, 2026",
        category: "IT News",
        image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&q=80&w=1000"
    }
];
