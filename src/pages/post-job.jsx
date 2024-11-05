import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from '@radix-ui/react-label';
import { Button } from "@/components/ui/button";
import { Input } from '@/components/ui/input';



const JobPost = () => {
  const [jobDetails, setJobDetails] = useState({
    title: '',
    company: '',
    location: '',
    shortDesc: '',
    longDesc: '',
    logo: '',
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setJobDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    
    if (!jobDetails.title || !jobDetails.company || !jobDetails.location || !jobDetails.shortDesc || !jobDetails.longDesc) {
      setError('All fields are required');
      return;
    }

    console.log('Job posted:', jobDetails);
    setError('');
   
    setJobDetails({
      title: '',
      company: '',
      location: '',
      shortDesc: '',
      longDesc: '',
      logo: '',
    });
  };

  return (
    <div className="flex items-center justify-center min-h-screen ">
      <Card className="w-full max-w-lg p-6">
        <CardHeader>
          <CardTitle className="font-bold text-lg">Post a Job</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            {error && <div className="text-red-500 mb-4">{error}</div>}
            <div className="mb-4">
              <Label htmlFor="title" className="block mb-2">Job Title</Label>
              <Input
                type="text"
                id="title"
                name="title"
                placeholder="Enter job title"
                value={jobDetails.title}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <Label htmlFor="company" className="block mb-2">Company</Label>
              <Input
                type="text"
                id="company"
                name="company"
                placeholder="Enter company name"
                value={jobDetails.company}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <Label htmlFor="location" className="block mb-2">Location</Label>
              <Input
                type="text"
                id="location"
                name="location"
                placeholder="Enter job location"
                value={jobDetails.location}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <Label htmlFor="shortDesc" className="block mb-2">Short Description</Label>
              <Input
                type="text"
                id="shortDesc"
                name="shortDesc"
                placeholder="Enter a short description"
                value={jobDetails.shortDesc}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <Label htmlFor="longDesc" className="block mb-2">Long Description</Label>
              <textarea
                id="longDesc"
                name="longDesc"
                placeholder="Enter a detailed job description"
                value={jobDetails.longDesc}
                onChange={handleChange}
                required
                className="border rounded-md px-3 py-2 w-full h-32 text-black outline-none"
              />
            </div>
            <div className="mb-4">
              <Label htmlFor="logo" className="block mb-2">Company Logo URL</Label>
              <Input
                type="text"
                id="logo"
                name="logo"
                placeholder="Enter company logo URL"
                value={jobDetails.logo}
                onChange={handleChange}
              />
            </div>
            <Button type="submit" className="w-full bg-blue-600 text-white hover:bg-blue-700 rounded py-2">
              Post Job
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default JobPost;