import React, { useState } from 'react';
import DashboardLayout from './DashboardLayout';
import AIHealthAssistant from './AIHealthAssistant';
import DonorMatching from './DonorMatching';
import Gamification from './Gamification';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Heart, 
  Calendar, 
  MessageCircle, 
  MapPin, 
  Trophy,
  Activity,
  Phone,
  Clock,
  AlertTriangle,
  Video,
  Stethoscope,
  User,
  TrendingUp
} from 'lucide-react';
import heroImage from '@/assets/medical-hero.jpg';

interface DashboardProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const PatientDashboard = ({ activeTab, setActiveTab }: DashboardProps) => {
  const [userName] = useState('Dr. Emily Chen');
  const [userLevel] = useState(7);
  const [userPoints] = useState(3420);

  const upcomingAppointments = [
    {
      id: 1,
      type: 'Video Consultation',
      doctor: 'Dr. Smith',
      date: 'Today, 2:30 PM',
      status: 'confirmed'
    },
    {
      id: 2,
      type: 'Blood Donation',
      location: 'City Blood Bank',
      date: 'Tomorrow, 10:00 AM',
      status: 'scheduled'
    }
  ];

  const recentRequests = [
    {
      id: 1,
      type: 'A+',
      status: 'Matched',
      donor: 'John Smith',
      time: '2 hours ago'
    },
    {
      id: 2,
      type: 'O-',
      status: 'Searching',
      time: '1 day ago'
    }
  ];

  const healthMetrics = {
    lastDonation: '2 months ago',
    eligibilityStatus: 'Eligible',
    healthScore: 92,
    nextCheckup: 'In 3 weeks'
  };

  const renderMainDashboard = () => (
    <div className="space-y-6">
      {/* Hero Section */}
      <Card className="relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 gradient-hero opacity-90"></div>
        </div>
        <CardContent className="relative p-8 text-white">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold mb-4">
              Welcome back, {userName}! 🩺
            </h1>
            <p className="text-xl opacity-90 mb-6">
              Your health assistant is ready to help. Track your donations, find matches, and stay healthy with AI-powered insights.
            </p>
            <div className="flex space-x-4">
              <Button 
                variant="hero" 
                size="lg"
                onClick={() => setActiveTab('ai-assistant')}
              >
                <MessageCircle className="mr-2" />
                Ask AI Assistant
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                onClick={() => setActiveTab('find-donors')}
              >
                <Heart className="mr-2" />
                Find Donors
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="gradient-health text-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm opacity-90">Health Score</p>
                <p className="text-3xl font-bold">{healthMetrics.healthScore}</p>
              </div>
              <Activity className="h-8 w-8 opacity-90" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="gradient-medical text-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm opacity-90">Level</p>
                <p className="text-3xl font-bold">{userLevel}</p>
              </div>
              <Trophy className="h-8 w-8 opacity-90" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-blood-primary text-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm opacity-90">Points</p>
                <p className="text-3xl font-bold">{userPoints}</p>
              </div>
              <TrendingUp className="h-8 w-8 opacity-90" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-warning text-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm opacity-90">Status</p>
                <p className="text-lg font-bold">{healthMetrics.eligibilityStatus}</p>
              </div>
              <Stethoscope className="h-8 w-8 opacity-90" />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Upcoming Appointments */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Calendar className="h-5 w-5 text-medical-primary" />
              <span>Upcoming Appointments</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingAppointments.map((appointment) => (
                <div key={appointment.id} className="flex items-center justify-between p-4 rounded-lg bg-muted/50">
                  <div className="flex items-center space-x-3">
                    <div className="h-10 w-10 rounded-full gradient-medical flex items-center justify-center">
                      {appointment.type.includes('Video') ? (
                        <Video className="h-5 w-5 text-white" />
                      ) : (
                        <Heart className="h-5 w-5 text-white" />
                      )}
                    </div>
                    <div>
                      <p className="font-medium">{appointment.type}</p>
                      <p className="text-sm text-muted-foreground">
                        {appointment.doctor || appointment.location}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium">{appointment.date}</p>
                    <Badge className="bg-health-green-light text-health-green">
                      {appointment.status}
                    </Badge>
                  </div>
                </div>
              ))}
              <Button className="w-full gradient-medical">
                <Calendar className="mr-2 h-4 w-4" />
                Schedule New Appointment
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Recent Blood Requests */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Heart className="h-5 w-5 text-blood-primary" />
              <span>Recent Blood Requests</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentRequests.map((request) => (
                <div key={request.id} className="flex items-center justify-between p-4 rounded-lg bg-muted/50">
                  <div className="flex items-center space-x-3">
                    <Badge className="bg-blood-primary text-white text-lg px-3 py-1">
                      {request.type}
                    </Badge>
                    <div>
                      <p className="font-medium">Blood Type: {request.type}</p>
                      {request.donor && (
                        <p className="text-sm text-muted-foreground">
                          Donor: {request.donor}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="text-right">
                    <Badge className={
                      request.status === 'Matched' 
                        ? 'bg-health-green text-white'
                        : 'bg-warning text-white'
                    }>
                      {request.status}
                    </Badge>
                    <p className="text-xs text-muted-foreground mt-1">{request.time}</p>
                  </div>
                </div>
              ))}
              <Button className="w-full gradient-emergency">
                <AlertTriangle className="mr-2 h-4 w-4" />
                Emergency Blood Request
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Button 
              className="h-20 flex-col gradient-medical"
              onClick={() => setActiveTab('ai-assistant')}
            >
              <MessageCircle className="h-8 w-8 mb-2" />
              AI Health Assistant
            </Button>
            <Button 
              className="h-20 flex-col gradient-health"
              onClick={() => setActiveTab('find-donors')}
            >
              <MapPin className="h-8 w-8 mb-2" />
              Find Donors
            </Button>
            <Button 
              className="h-20 flex-col"
              variant="outline"
              onClick={() => setActiveTab('consultations')}
            >
              <Video className="h-8 w-8 mb-2" />
              Book Consultation
            </Button>
            <Button 
              className="h-20 flex-col"
              variant="outline"
              onClick={() => setActiveTab('achievements')}
            >
              <Trophy className="h-8 w-8 mb-2" />
              View Achievements
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderConsultations = () => (
    <Card className="max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Video className="h-5 w-5 text-medical-primary" />
          <span>Telehealth Consultations</span>
          <Badge className="bg-health-green-light text-health-green">
            Available 24/7
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-center py-12">
          <Video className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Video Consultations Coming Soon</h3>
          <p className="text-muted-foreground mb-6">
            Connect with healthcare professionals and blood bank specialists through secure video calls.
          </p>
          <Button className="gradient-medical" size="lg">
            <Phone className="mr-2" />
            Schedule Consultation
          </Button>
        </div>
      </CardContent>
    </Card>
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return renderMainDashboard();
      case 'ai-assistant':
        return <AIHealthAssistant />;
      case 'find-donors':
        return <DonorMatching />;
      case 'consultations':
        return renderConsultations();
      case 'achievements':
        return <Gamification />;
      default:
        return renderMainDashboard();
    }
  };

  return (
    <DashboardLayout 
      userRole="patient" 
      userName={userName}
      userLevel={userLevel}
      userPoints={userPoints}
    >
      {renderTabContent()}
    </DashboardLayout>
  );
};

export default PatientDashboard;