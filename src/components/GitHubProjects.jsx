import React, { useEffect, useState } from "react";

const GitHubProjects = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.github.com/users/YOUR_USERNAME/repos")
      .then((res) => res.json())
      .then((data) => {
        const filtered = data.filter(repo => !repo.fork);
        setRepos(filtered);
        setLoading(false);
      })
      .catch(err => {
        console.error("Failed to fetch GitHub repos:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p className="text-white">Loading GitHub Projects...</p>;
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-10">
      {repos.map(repo => (
        <div key={repo.id} className="bg-[#0a0a1a] border border-white/10 p-5 rounded-xl hover:border-white/30 transition">
          <h3 className="text-white font-semibold text-lg">{repo.name}</h3>
          <p className="text-gray-400 text-sm mt-1 mb-2">
            {repo.description || "No description provided."}
          </p>
          <a
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 text-sm hover:underline"
          >
            View on GitHub →
          </a>
        </div>
      ))}
    </div>
  );
};

export default GitHubProjects;
