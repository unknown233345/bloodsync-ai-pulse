import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  TrendingUp, 
  TrendingDown, 
  Users, 
  Heart, 
  Calendar,
  MapPin,
  AlertTriangle,
  Clock,
  BarChart3,
  PieChart,
  Activity,
  Target
} from 'lucide-react';

const Analytics = () => {
  const metrics = {
    totalDonors: 1247,
    activeDonors: 892,
    bloodRequests: 156,
    successfulMatches: 143,
    emergencyRequests: 12,
    avgResponseTime: '18 mins',
    donationTrend: '+12%',
    inventoryLevel: 78
  };

  const bloodInventory = [
    { type: 'O+', units: 145, demand: 'High', status: 'good' },
    { type: 'O-', units: 23, demand: 'Critical', status: 'low' },
    { type: 'A+', units: 89, demand: 'Medium', status: 'good' },
    { type: 'A-', units: 34, demand: 'Medium', status: 'medium' },
    { type: 'B+', units: 67, demand: 'Low', status: 'good' },
    { type: 'B-', units: 12, demand: 'High', status: 'critical' },
    { type: 'AB+', units: 28, demand: 'Low', status: 'good' },
    { type: 'AB-', units: 8, demand: 'Medium', status: 'critical' }
  ];

  const recentActivity = [
    { id: 1, action: 'Emergency blood request', location: 'City Hospital', time: '5 mins ago', status: 'urgent' },
    { id: 2, action: 'Donor registration', location: 'Community Center', time: '12 mins ago', status: 'success' },
    { id: 3, action: 'Blood donation completed', location: 'Red Cross Center', time: '18 mins ago', status: 'success' },
    { id: 4, action: 'Low inventory alert', location: 'Central Bank', time: '25 mins ago', status: 'warning' },
    { id: 5, action: 'Successful match', location: 'General Hospital', time: '32 mins ago', status: 'success' }
  ];

  const getInventoryStatus = (status: string) => {
    switch (status) {
      case 'good': return 'bg-health-green text-white';
      case 'medium': return 'bg-warning text-white';
      case 'low': return 'bg-warning text-white';
      case 'critical': return 'bg-emergency text-white';
      default: return 'bg-muted';
    }
  };

  const getActivityStatus = (status: string) => {
    switch (status) {
      case 'urgent': return 'bg-emergency text-white';
      case 'warning': return 'bg-warning text-white';
      case 'success': return 'bg-health-green text-white';
      default: return 'bg-muted';
    }
  };

  return (
    <div className="space-y-6">
      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="gradient-medical text-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm opacity-90">Total Donors</p>
                <p className="text-3xl font-bold">{metrics.totalDonors}</p>
                <div className="flex items-center mt-2">
                  <TrendingUp className="h-4 w-4 mr-1" />
                  <span className="text-sm">{metrics.donationTrend}</span>
                </div>
              </div>
              <Users className="h-8 w-8 opacity-90" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="gradient-health text-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm opacity-90">Active Donors</p>
                <p className="text-3xl font-bold">{metrics.activeDonors}</p>
                <p className="text-sm opacity-90 mt-2">Available now</p>
              </div>
              <Activity className="h-8 w-8 opacity-90" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-blood-primary text-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm opacity-90">Blood Requests</p>
                <p className="text-3xl font-bold">{metrics.bloodRequests}</p>
                <p className="text-sm opacity-90 mt-2">{metrics.successfulMatches} matched</p>
              </div>
              <Heart className="h-8 w-8 opacity-90" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-warning text-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm opacity-90">Avg Response</p>
                <p className="text-3xl font-bold">{metrics.avgResponseTime}</p>
                <p className="text-sm opacity-90 mt-2">Emergency cases</p>
              </div>
              <Clock className="h-8 w-8 opacity-90" />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Blood Inventory */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Heart className="h-5 w-5 text-blood-primary" />
              <span>Blood Inventory</span>
              <Badge className="bg-health-green-light text-health-green">
                Real-time
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {bloodInventory.map((blood) => (
                <div key={blood.type} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                  <div className="flex items-center space-x-3">
                    <Badge className="bg-blood-primary text-white text-lg px-3 py-1">
                      {blood.type}
                    </Badge>
                    <div>
                      <p className="font-medium">{blood.units} units</p>
                      <p className="text-sm text-muted-foreground">Demand: {blood.demand}</p>
                    </div>
                  </div>
                  <Badge className={getInventoryStatus(blood.status)}>
                    {blood.status}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Activity className="h-5 w-5 text-medical-primary" />
              <span>Recent Activity</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {recentActivity.map((activity) => (
                <div key={activity.id} className="flex items-start space-x-3 p-3 rounded-lg bg-muted/50">
                  <Badge className={getActivityStatus(activity.status)}>
                    <Clock className="h-3 w-3" />
                  </Badge>
                  <div className="flex-1">
                    <p className="font-medium text-sm">{activity.action}</p>
                    <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                      <MapPin className="h-3 w-3" />
                      <span>{activity.location}</span>
                      <span>•</span>
                      <span>{activity.time}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts Placeholder */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <BarChart3 className="h-5 w-5 text-medical-primary" />
              <span>Donation Trends</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 bg-muted rounded-lg flex items-center justify-center border-2 border-dashed border-border">
              <div className="text-center">
                <BarChart3 className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
                <p className="text-muted-foreground">Chart visualization will show here</p>
                <p className="text-sm text-muted-foreground">Monthly donation patterns</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <PieChart className="h-5 w-5 text-medical-primary" />
              <span>Blood Type Distribution</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 bg-muted rounded-lg flex items-center justify-center border-2 border-dashed border-border">
              <div className="text-center">
                <PieChart className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
                <p className="text-muted-foreground">Pie chart will show here</p>
                <p className="text-sm text-muted-foreground">Current inventory breakdown</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Predictive Analytics */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Target className="h-5 w-5 text-medical-primary" />
            <span>Predictive Analytics</span>
            <Badge className="bg-medical-primary-light text-medical-primary">
              AI Powered
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-lg bg-health-green-light">
              <div className="flex items-center space-x-2 mb-2">
                <TrendingUp className="h-5 w-5 text-health-green" />
                <h4 className="font-medium text-health-green">Demand Forecast</h4>
              </div>
              <p className="text-sm text-health-green">
                O- blood type demand expected to increase by 25% next week due to scheduled surgeries.
              </p>
            </div>
            
            <div className="p-4 rounded-lg bg-warning-light">
              <div className="flex items-center space-x-2 mb-2">
                <AlertTriangle className="h-5 w-5 text-warning" />
                <h4 className="font-medium text-warning">Shortage Alert</h4>
              </div>
              <p className="text-sm text-warning">
                B- inventory may reach critical levels in 3 days. Recommend donor outreach campaign.
              </p>
            </div>
            
            <div className="p-4 rounded-lg bg-medical-primary-light">
              <div className="flex items-center space-x-2 mb-2">
                <Calendar className="h-5 w-5 text-medical-primary" />
                <h4 className="font-medium text-medical-primary">Peak Times</h4>
              </div>
              <p className="text-sm text-medical-primary">
                Highest donor availability predicted for Tuesday-Thursday, 2-6 PM.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Analytics;