import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from '@radix-ui/react-label';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    
    
   
    if (!email || !password) {
      setError('Both fields are required');
      return;
    }

   
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <Card className="w-full max-w-sm p-6 bg-transparent border-4">
        <CardHeader>
          <CardTitle className="font-bold text-4xl text-center ">Login</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <Label htmlFor="email" className="block mb-2">Email</Label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="border rounded px-3 py-2 w-full text-black outline-none"
              />
            </div>
            <div className="mb-4">
              <Label htmlFor="password" className="block mb-2">Password</Label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="border rounded px-3 py-2 w-full text-black outline-none"
              />
            </div>
            {error && <div className="text-red-500 mb-4">{error}</div>}
            <Link to={'/onboarding'}>
            <Button type="submit" className="w-full bg-blue-600 text-white hover:bg-blue-700 rounded py-2">
              Login
            </Button>
            </Link>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
