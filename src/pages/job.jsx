import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPinIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Jobpage = () => {
  const jobs = [
    {
      title: "Front-End Developer",
      company: "Google",
      location: "Lahore",
      shortDesc: "Google is looking for a Frontend Developer to craft dynamic, user-friendly web applications.",
      longDesc: "Google is looking for a Frontend Developer to craft dynamic, user-friendly web applications. Join a collaborative team and leverage modern technologies to enhance user experiences.",
      logo: "/companies/google.webp",
    },
    {
      title: "Back-End Developer",
      company: "Microsoft",
      location: "Karachi",
      shortDesc: "Microsoft is hiring a Backend Developer to design and implement scalable server-side applications.",
      longDesc: "Microsoft is hiring a Backend Developer to design and implement scalable server-side applications using technologies like .NET and Azure. Join a collaborative team to enhance performance and drive innovative solutions across Microsoft’s platforms.",
      logo: "/public/companies/microsoft.webp",
    },
    {
      title: "Front-End Developer",
      company: "Atlassian",
      location: "Lahore",
      shortDesc: "Atlassian is hiring a Frontend Developer to build intuitive user interfaces for its collaborative software solutions.",
      longDesc: "Atlassian is hiring a Frontend Developer to build intuitive user interfaces for its collaborative software solutions. Join a dynamic team and leverage your skills in JavaScript frameworks to enhance user experiences.",
      logo: "/companies/atlassian.svg",
    },
    {
      title: "Data Scientist",
      company: "IBM",
      location: "Islamabad",
      shortDesc: "IBM is seeking a Data Scientist to analyze complex datasets and drive data-driven insights for innovative solutions.",
      longDesc: "IBM is seeking a Data Scientist to analyze complex datasets and drive data-driven insights for innovative solutions. Join a forward-thinking team and leverage advanced analytics and machine learning to solve real-world challenges.",
      logo: "/companies/ibm.svg",
    },
    {
      title: "Data Scientist",
      company: "Meta",
      location: "Islamabad",
      shortDesc: "Meta is seeking a Data Scientist to analyze complex datasets and drive data-driven insights for innovative solutions.",
      longDesc: "Meta is seeking a Data Scientist to analyze complex datasets and drive data-driven insights for innovative solutions. Join a forward-thinking team and leverage advanced analytics and machine learning to solve real-world challenges.",
      logo: "/companies/meta.svg",
    },
  ];

  const [expandedJobs, setExpandedJobs] = useState(Array(jobs.length).fill(false));
  const [searchTerm, setSearchTerm] = useState('');

  const toggleReadMore = (index) => {
    const updatedExpandedJobs = [...expandedJobs];
    updatedExpandedJobs[index] = !updatedExpandedJobs[index];
    setExpandedJobs(updatedExpandedJobs);
  };

  const filteredJobs = jobs.filter(job =>
    job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.company.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div>
      <h1 className='text-4xl font-extrabold sm:text-6xl lg:text-8xl tracking-tighter text-center mb-6'>Latest Jobs</h1>
      <div className="mb-4 flex justify-center">
        <input
          type="text"
          placeholder="Search for jobs..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border rounded outline-none px-4 py-2 border-none text-black"
        />
        <Button
          onClick={() => setSearchTerm('')} 
          className="bg-blue-600  text-white rounded-r-md ml-2 p-6">
       Clear
        </Button>
      </div>
      <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-3'>
        {filteredJobs.map((job, index) => (
          <Card key={index} className="p-2"> 
            <CardHeader className="m-0"> 
              <CardTitle className="font-bold">{job.title}</CardTitle>
            </CardHeader>
            <CardContent className="m-0 p-0"> 
              <div>
                <img src={job.logo} className='h-10 mb-1' alt={job.company} />
                <div>
                  <MapPinIcon size={15} />
                  {job.location}
                </div>
              </div>
              <div>
                {expandedJobs[index] ? job.longDesc : job.shortDesc}
              </div>
              <button onClick={() => toggleReadMore(index)} className="text-blue-500 underline">
                {expandedJobs[index] ? "Read Less" : "Read More"}
              </button>
            </CardContent>
          </Card>
        ))}
      </section>
    </div>
  );
};

export default Jobpage;
