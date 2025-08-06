import React, { useState } from 'react';
import DashboardLayout from './DashboardLayout';
import Analytics from './Analytics';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Shield, 
  Users, 
  Activity, 
  Heart,
  MapPin,
  Calendar,
  Settings,
  AlertTriangle,
  TrendingUp,
  Database,
  UserCheck,
  Clock,
  Phone,
  Filter,
  Search,
  Download
} from 'lucide-react';

interface AdminDashboardProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const AdminDashboard = ({ activeTab, setActiveTab }: AdminDashboardProps) => {
  const [adminName] = useState('Admin Sarah Wilson');

  const systemMetrics = {
    totalUsers: 2847,
    activeDonors: 892,
    pendingRequests: 23,
    systemUptime: '99.9%',
    avgResponseTime: '18 mins',
    successRate: '94.2%'
  };

  const pendingActions = [
    { id: 1, type: 'Donor Verification', user: 'John Smith', priority: 'high', time: '5 mins ago' },
    { id: 2, type: 'Emergency Request', location: 'City Hospital', priority: 'urgent', time: '12 mins ago' },
    { id: 3, type: 'Inventory Alert', item: 'O- Blood Type', priority: 'medium', time: '18 mins ago' },
    { id: 4, type: 'User Report', user: 'Issue with matching', priority: 'low', time: '25 mins ago' }
  ];

  const recentUsers = [
    { id: 1, name: 'Mike Johnson', type: 'Donor', bloodType: 'A+', status: 'Active', joined: '2 days ago' },
    { id: 2, name: 'Sarah Davis', type: 'Patient', bloodType: 'B-', status: 'Verified', joined: '3 days ago' },
    { id: 3, name: 'Alex Wilson', type: 'Donor', bloodType: 'O+', status: 'Pending', joined: '1 week ago' },
    { id: 4, name: 'Emma Brown', type: 'Patient', bloodType: 'AB+', status: 'Active', joined: '1 week ago' }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'urgent': return 'bg-emergency text-white';
      case 'high': return 'bg-warning text-white';
      case 'medium': return 'bg-medical-primary text-white';
      case 'low': return 'bg-muted text-muted-foreground';
      default: return 'bg-muted';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': return 'bg-health-green-light text-health-green';
      case 'Verified': return 'bg-medical-primary-light text-medical-primary';
      case 'Pending': return 'bg-warning-light text-warning';
      default: return 'bg-muted';
    }
  };

  const renderMainAdmin = () => (
    <div className="space-y-6">
      {/* System Overview */}
      <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
        <Card className="gradient-medical text-white md:col-span-2">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm opacity-90">Total Users</p>
                <p className="text-3xl font-bold">{systemMetrics.totalUsers}</p>
                <p className="text-sm opacity-90 mt-1">+12% this month</p>
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
                <p className="text-2xl font-bold">{systemMetrics.activeDonors}</p>
              </div>
              <Heart className="h-6 w-6 opacity-90" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-warning text-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm opacity-90">Pending</p>
                <p className="text-2xl font-bold">{systemMetrics.pendingRequests}</p>
              </div>
              <Clock className="h-6 w-6 opacity-90" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-health-green text-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm opacity-90">Uptime</p>
                <p className="text-2xl font-bold">{systemMetrics.systemUptime}</p>
              </div>
              <Activity className="h-6 w-6 opacity-90" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-blood-primary text-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm opacity-90">Success Rate</p>
                <p className="text-2xl font-bold">{systemMetrics.successRate}</p>
              </div>
              <TrendingUp className="h-6 w-6 opacity-90" />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Pending Actions */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <AlertTriangle className="h-5 w-5 text-warning" />
                <span>Pending Actions</span>
              </div>
              <Badge className="bg-warning text-white">
                {pendingActions.length}
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {pendingActions.map((action) => (
                <div key={action.id} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                  <div className="flex items-center space-x-3">
                    <Badge className={getPriorityColor(action.priority)}>
                      {action.priority}
                    </Badge>
                    <div>
                      <p className="font-medium text-sm">{action.type}</p>
                      <p className="text-xs text-muted-foreground">
                        {action.user || action.location || action.item} • {action.time}
                      </p>
                    </div>
                  </div>
                  <Button size="sm" variant="outline">
                    Review
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Users */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <UserCheck className="h-5 w-5 text-medical-primary" />
              <span>Recent Users</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {recentUsers.map((user) => (
                <div key={user.id} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                  <div className="flex items-center space-x-3">
                    <div className="h-8 w-8 rounded-full bg-medical-primary-light flex items-center justify-center">
                      <span className="text-xs font-medium text-medical-primary">
                        {user.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <p className="font-medium text-sm">{user.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {user.type} • {user.bloodType} • {user.joined}
                      </p>
                    </div>
                  </div>
                  <Badge className={getStatusColor(user.status)}>
                    {user.status}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Admin Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Button 
              className="h-20 flex-col gradient-medical"
              onClick={() => setActiveTab('analytics')}
            >
              <Activity className="h-8 w-8 mb-2" />
              View Analytics
            </Button>
            <Button 
              className="h-20 flex-col gradient-health"
              onClick={() => setActiveTab('inventory')}
            >
              <Database className="h-8 w-8 mb-2" />
              Blood Inventory
            </Button>
            <Button 
              className="h-20 flex-col"
              variant="outline"
              onClick={() => setActiveTab('users')}
            >
              <Users className="h-8 w-8 mb-2" />
              User Management
            </Button>
            <Button 
              className="h-20 flex-col"
              variant="outline"
              onClick={() => setActiveTab('network')}
            >
              <MapPin className="h-8 w-8 mb-2" />
              Donor Network
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderUserManagement = () => (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Users className="h-5 w-5 text-medical-primary" />
            <span>User Management</span>
          </div>
          <div className="flex space-x-2">
            <Button size="sm" variant="outline">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
            <Button size="sm" variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                placeholder="Search users..."
                className="w-full rounded-md border border-input bg-background pl-10 pr-3 py-2 text-sm"
              />
            </div>
            <Button className="gradient-medical">
              Add User
            </Button>
          </div>
          
          <div className="rounded-lg border">
            <div className="grid grid-cols-6 gap-4 p-4 bg-muted/50 font-medium text-sm">
              <span>Name</span>
              <span>Type</span>
              <span>Blood Type</span>
              <span>Status</span>
              <span>Joined</span>
              <span>Actions</span>
            </div>
            {recentUsers.map((user) => (
              <div key={user.id} className="grid grid-cols-6 gap-4 p-4 border-t">
                <span className="font-medium">{user.name}</span>
                <span>{user.type}</span>
                <Badge className="bg-blood-primary text-white w-fit">
                  {user.bloodType}
                </Badge>
                <Badge className={getStatusColor(user.status)}>
                  {user.status}
                </Badge>
                <span className="text-sm text-muted-foreground">{user.joined}</span>
                <div className="flex space-x-2">
                  <Button size="sm" variant="outline">Edit</Button>
                  <Button size="sm" variant="outline" className="text-destructive">
                    Suspend
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );

  const renderInventory = () => (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Database className="h-5 w-5 text-medical-primary" />
          <span>Blood Inventory Management</span>
          <Badge className="bg-health-green-light text-health-green">
            Real-time
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-center py-12">
          <Database className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Advanced Inventory System</h3>
          <p className="text-muted-foreground mb-6">
            Real-time blood bank inventory sync with predictive analytics and automated alerts.
          </p>
          <Button className="gradient-medical" size="lg">
            <Settings className="mr-2" />
            Configure Integration
          </Button>
        </div>
      </CardContent>
    </Card>
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case 'admin':
        return renderMainAdmin();
      case 'analytics':
        return <Analytics />;
      case 'inventory':
        return renderInventory();
      case 'users':
        return renderUserManagement();
      case 'network':
        return renderInventory(); // Placeholder
      default:
        return renderMainAdmin();
    }
  };

  return (
    <DashboardLayout userRole="admin" userName={adminName}>
      {renderTabContent()}
    </DashboardLayout>
  );
};

export default AdminDashboard;