import Card from "./components/Card";

export default function App() {
  const jobs = [
    {
      company: "Amazon",
      role: "Senior UI/UX Designer",
      time: "5 days ago",
      tags: ["Part-Time", "Senior Level"],
      salary: "$120/hr",
      location: "Mumbai, India",
      saved: false,
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    },
    {
      company: "Google",
      role: "Graphic Designer",
      time: "30 days ago",
      tags: ["Part-Time", "Flexible Schedule"],
      salary: "$150–220k",
      location: "Kochi, India",
      saved: true,
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    },
    {
      company: "Flipkart",
      role: "Senior Motion Designer",
      time: "18 days ago",
      tags: ["Contract", "Remote"],
      salary: "$85/hr",
      location: "Chennai, India",
      saved: false,
      logo: "https://imgs.search.brave.com/TcyyagzThxr7Dkd71FbUhqEZMlcMC-wYlpgDPMKoqoQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/ZnJlZXBuZ2xvZ29z/LmNvbS91cGxvYWRz/L2ZsaXBrYXJ0LWxv/Z28tcG5nL2ZsaXBr/YXJ0LWxvZ28tdHJh/bnNwYXJlbnQtdmVj/dG9yLTMucG5n",
    },
  ];

  return (
    <div className="container">
      {jobs.map((job, index) => (
        <Card key={index} {...job} />
      ))}
    </div>
  );
}
