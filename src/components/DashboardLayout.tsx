import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Heart, 
  User, 
  Shield, 
  Activity, 
  MessageCircle, 
  MapPin, 
  Calendar,
  Trophy,
  Bell,
  Settings,
  LogOut,
  Search,
  Filter
} from 'lucide-react';

interface DashboardLayoutProps {
  children: React.ReactNode;
  userRole: 'patient' | 'admin';
  userName: string;
  userLevel?: number;
  userPoints?: number;
}

const DashboardLayout = ({ children, userRole, userName, userLevel = 1, userPoints = 0 }: DashboardLayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Heart className="h-8 w-8 text-blood-primary heartbeat" />
              <span className="text-xl font-bold gradient-medical bg-clip-text text-transparent">
                Blood-Sync-AI
              </span>
            </div>
          </div>
          
          <div className="flex flex-1 items-center justify-between space-x-4 md:justify-end">
            <div className="flex items-center space-x-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <input
                  className="h-9 w-60 rounded-md border border-input bg-background pl-10 pr-3 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="Search..."
                />
              </div>
              
              {/* Notifications */}
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5" />
                <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 text-xs bg-blood-primary">
                  3
                </Badge>
              </Button>
              
              {/* User menu */}
              <div className="flex items-center space-x-3">
                <div className="text-right">
                  <p className="text-sm font-medium">{userName}</p>
                  <p className="text-xs text-muted-foreground capitalize">{userRole}</p>
                </div>
                <div className="flex items-center space-x-1">
                  <User className="h-8 w-8 rounded-full bg-medical-primary-light p-1.5 text-medical-primary" />
                  {userRole === 'patient' && (
                    <Badge className="bg-health-green-light text-health-green">
                      L{userLevel}
                    </Badge>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Layout */}
      <div className="flex">
        {/* Sidebar */}
        <aside className="sticky top-16 h-[calc(100vh-4rem)] w-64 border-r bg-card">
          <div className="flex h-full flex-col">
            {/* User Stats (Patient Only) */}
            {userRole === 'patient' && (
              <div className="p-4 border-b">
                <Card className="p-4 gradient-health">
                  <div className="flex items-center justify-between text-white">
                    <div>
                      <p className="text-xs opacity-90">Points</p>
                      <p className="text-2xl font-bold">{userPoints}</p>
                    </div>
                    <Trophy className="h-8 w-8 opacity-90" />
                  </div>
                </Card>
              </div>
            )}
            
            {/* Navigation */}
            <nav className="flex-1 p-4">
              <div className="space-y-2">
                {userRole === 'patient' ? (
                  <>
                    <Button variant="ghost" className="w-full justify-start">
                      <Activity className="mr-3 h-4 w-4" />
                      Dashboard
                    </Button>
                    <Button variant="ghost" className="w-full justify-start">
                      <MessageCircle className="mr-3 h-4 w-4" />
                      AI Health Assistant
                    </Button>
                    <Button variant="ghost" className="w-full justify-start">
                      <Heart className="mr-3 h-4 w-4" />
                      Blood Requests
                    </Button>
                    <Button variant="ghost" className="w-full justify-start">
                      <MapPin className="mr-3 h-4 w-4" />
                      Find Donors
                    </Button>
                    <Button variant="ghost" className="w-full justify-start">
                      <Calendar className="mr-3 h-4 w-4" />
                      Consultations
                    </Button>
                    <Button variant="ghost" className="w-full justify-start">
                      <Trophy className="mr-3 h-4 w-4" />
                      Achievements
                    </Button>
                  </>
                ) : (
                  <>
                    <Button variant="ghost" className="w-full justify-start">
                      <Shield className="mr-3 h-4 w-4" />
                      Admin Dashboard
                    </Button>
                    <Button variant="ghost" className="w-full justify-start">
                      <Activity className="mr-3 h-4 w-4" />
                      Analytics
                    </Button>
                    <Button variant="ghost" className="w-full justify-start">
                      <Heart className="mr-3 h-4 w-4" />
                      Blood Inventory
                    </Button>
                    <Button variant="ghost" className="w-full justify-start">
                      <User className="mr-3 h-4 w-4" />
                      User Management
                    </Button>
                    <Button variant="ghost" className="w-full justify-start">
                      <MapPin className="mr-3 h-4 w-4" />
                      Donor Network
                    </Button>
                    <Button variant="ghost" className="w-full justify-start">
                      <Calendar className="mr-3 h-4 w-4" />
                      Appointments
                    </Button>
                  </>
                )}
              </div>
            </nav>
            
            {/* Footer */}
            <div className="p-4 border-t">
              <div className="space-y-2">
                <Button variant="ghost" size="sm" className="w-full justify-start">
                  <Settings className="mr-3 h-4 w-4" />
                  Settings
                </Button>
                <Button variant="ghost" size="sm" className="w-full justify-start text-destructive">
                  <LogOut className="mr-3 h-4 w-4" />
                  Logout
                </Button>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;