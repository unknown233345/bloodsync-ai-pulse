import React, { useState } from 'react';
import PatientDashboard from '@/components/PatientDashboard';
import AdminDashboard from '@/components/AdminDashboard';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Heart, Shield, User, Zap, Brain, Activity } from 'lucide-react';
import heroImage from '@/assets/medical-hero.jpg';

const Index = () => {
  const [currentView, setCurrentView] = useState<'landing' | 'patient' | 'admin'>('landing');
  const [activeTab, setActiveTab] = useState('dashboard');

  const features = [
    {
      icon: <Brain className="h-8 w-8" />,
      title: "AI Health Assistant",
      description: "NLP-powered symptom checker with intelligent health recommendations and emergency detection."
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Smart Donor Matching",
      description: "ML-based compatibility matching with geo-location and real-time availability tracking."
    },
    {
      icon: <Activity className="h-8 w-8" />,
      title: "Predictive Analytics",
      description: "AI-powered forecasting for blood demand patterns and inventory optimization."
    }
  ];

  if (currentView === 'patient') {
    return <PatientDashboard activeTab={activeTab} setActiveTab={setActiveTab} />;
  }

  if (currentView === 'admin') {
    return <AdminDashboard activeTab={activeTab} setActiveTab={setActiveTab} />;
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center space-x-2">
            <Heart className="h-8 w-8 text-blood-primary heartbeat" />
            <span className="text-xl font-bold gradient-medical bg-clip-text text-transparent">
              Blood-Sync-AI
            </span>
            <Badge className="bg-medical-primary-light text-medical-primary">
              Phase 2 & 3
            </Badge>
          </div>
          <div className="flex space-x-4">
            <Button 
              variant="outline"
              onClick={() => {
                setCurrentView('patient');
                setActiveTab('dashboard');
              }}
            >
              <User className="mr-2 h-4 w-4" />
              Patient Dashboard
            </Button>
            <Button 
              variant="outline"
              onClick={() => {
                setCurrentView('admin');
                setActiveTab('admin');
              }}
            >
              <Shield className="mr-2 h-4 w-4" />
              Admin Dashboard
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 gradient-hero opacity-95"></div>
        </div>
        <div className="relative container py-24 text-center text-white">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold mb-6">
              Next-Generation Blood Donation Platform
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Powered by AI, enhanced with machine learning, and designed for life-saving connections. 
              Experience the future of healthcare with intelligent donor matching, predictive analytics, and seamless telehealth integration.
            </p>
            <div className="flex justify-center space-x-4">
              <Button 
                variant="hero" 
                size="lg"
                onClick={() => {
                  setCurrentView('patient');
                  setActiveTab('dashboard');
                }}
              >
                <Heart className="mr-2" />
                Launch Patient Dashboard
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                onClick={() => {
                  setCurrentView('admin');
                  setActiveTab('admin');
                }}
              >
                <Shield className="mr-2" />
                Admin Portal
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">AI-Powered Healthcare Innovation</h2>
            <p className="text-xl text-muted-foreground">
              Advanced features that make blood donation smarter, faster, and more effective
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-soft transition-all duration-300">
                <CardHeader>
                  <div className="h-16 w-16 rounded-full gradient-medical flex items-center justify-center mx-auto mb-4 text-white">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Phase Overview */}
      <section className="py-20 bg-muted/50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Phase 2: AI Integration</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Badge className="bg-medical-primary text-white mt-1">✓</Badge>
                  <div>
                    <h4 className="font-semibold">AI Health Assistant</h4>
                    <p className="text-sm text-muted-foreground">NLP-powered symptom checker with emergency detection</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Badge className="bg-medical-primary text-white mt-1">✓</Badge>
                  <div>
                    <h4 className="font-semibold">Smart Donor Matching</h4>
                    <p className="text-sm text-muted-foreground">ML-based compatibility with location mapping</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Badge className="bg-medical-primary text-white mt-1">✓</Badge>
                  <div>
                    <h4 className="font-semibold">Predictive Analytics</h4>
                    <p className="text-sm text-muted-foreground">Forecast donor patterns and inventory needs</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold mb-6">Phase 3: Advanced Features</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Badge className="bg-health-green text-white mt-1">✓</Badge>
                  <div>
                    <h4 className="font-semibold">Telehealth Integration</h4>
                    <p className="text-sm text-muted-foreground">Video consultations with medical professionals</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Badge className="bg-health-green text-white mt-1">✓</Badge>
                  <div>
                    <h4 className="font-semibold">Gamification System</h4>
                    <p className="text-sm text-muted-foreground">Points, badges, and leaderboards for engagement</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Badge className="bg-health-green text-white mt-1">✓</Badge>
                  <div>
                    <h4 className="font-semibold">Blood Inventory Sync</h4>
                    <p className="text-sm text-muted-foreground">Real-time integration with blood banks</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container text-center">
          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold mb-4">Ready to Experience the Future?</h2>
              <p className="text-muted-foreground mb-6">
                Explore the complete Blood-Sync-AI platform with advanced AI features, 
                gamification, and real-time analytics.
              </p>
              <div className="flex justify-center space-x-4">
                <Button 
                  className="gradient-medical" 
                  size="lg"
                  onClick={() => {
                    setCurrentView('patient');
                    setActiveTab('ai-assistant');
                  }}
                >
                  <Brain className="mr-2" />
                  Try AI Assistant
                </Button>
                <Button 
                  className="gradient-health" 
                  size="lg"
                  onClick={() => {
                    setCurrentView('admin');
                    setActiveTab('analytics');
                  }}
                >
                  <Activity className="mr-2" />
                  View Analytics
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Index;
