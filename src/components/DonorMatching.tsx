import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  MapPin, 
  Heart, 
  Clock, 
  Phone, 
  Star,
  Navigation,
  Filter,
  Search,
  RefreshCw,
  Zap,
  User
} from 'lucide-react';

interface Donor {
  id: string;
  name: string;
  bloodType: string;
  distance: number;
  lastDonation: string;
  availability: 'available' | 'busy' | 'unavailable';
  rating: number;
  donationCount: number;
  location: string;
  matchScore: number;
}

const DonorMatching = () => {
  const [searchBloodType, setSearchBloodType] = useState('A+');
  const [isSearching, setIsSearching] = useState(false);
  
  const mockDonors: Donor[] = [
    {
      id: '1',
      name: 'John Smith',
      bloodType: 'A+',
      distance: 2.3,
      lastDonation: '2 months ago',
      availability: 'available',
      rating: 4.8,
      donationCount: 12,
      location: 'Downtown Medical Center',
      matchScore: 98
    },
    {
      id: '2',
      name: 'Sarah Johnson',
      bloodType: 'A+',
      distance: 4.1,
      lastDonation: '3 months ago',
      availability: 'available',
      rating: 4.9,
      donationCount: 8,
      location: 'City Hospital',
      matchScore: 95
    },
    {
      id: '3',
      name: 'Mike Davis',
      bloodType: 'A+',
      distance: 1.8,
      lastDonation: '1 month ago',
      availability: 'busy',
      rating: 4.7,
      donationCount: 15,
      location: 'Community Health Center',
      matchScore: 92
    }
  ];

  const handleSearch = () => {
    setIsSearching(true);
    setTimeout(() => setIsSearching(false), 2000);
  };

  const getAvailabilityColor = (availability: string) => {
    switch (availability) {
      case 'available': return 'bg-health-green text-white';
      case 'busy': return 'bg-warning text-white';
      case 'unavailable': return 'bg-destructive text-white';
      default: return 'bg-muted';
    }
  };

  const getMatchScoreColor = (score: number) => {
    if (score >= 95) return 'text-health-green';
    if (score >= 90) return 'text-warning';
    return 'text-medical-primary';
  };

  return (
    <div className="space-y-6">
      {/* Search Header */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Zap className="h-5 w-5 text-medical-primary" />
            <span>Smart Donor Matching</span>
            <Badge className="bg-medical-primary-light text-medical-primary">
              AI Powered
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-4">
            <div className="flex-1">
              <label className="text-sm font-medium">Blood Type Needed</label>
              <select 
                value={searchBloodType}
                onChange={(e) => setSearchBloodType(e.target.value)}
                className="w-full mt-1 rounded-md border border-input bg-background px-3 py-2 text-sm"
              >
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
              </select>
            </div>
            <div className="flex-1">
              <label className="text-sm font-medium">Location</label>
              <div className="relative mt-1">
                <MapPin className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <input
                  placeholder="Enter your location"
                  className="w-full rounded-md border border-input bg-background pl-10 pr-3 py-2 text-sm"
                />
              </div>
            </div>
            <div className="pt-6">
              <Button 
                onClick={handleSearch}
                className="gradient-medical"
                disabled={isSearching}
              >
                {isSearching ? (
                  <RefreshCw className="h-4 w-4 animate-spin mr-2" />
                ) : (
                  <Search className="h-4 w-4 mr-2" />
                )}
                Find Donors
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Results */}
      <div className="grid gap-4">
        {mockDonors.map((donor) => (
          <Card key={donor.id} className="hover:shadow-soft transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="h-12 w-12 rounded-full bg-medical-primary-light flex items-center justify-center">
                    <User className="h-6 w-6 text-medical-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{donor.name}</h3>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>{donor.distance} km away • {donor.location}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  {/* Blood Type */}
                  <Badge className="bg-blood-primary text-white text-lg px-3 py-1">
                    {donor.bloodType}
                  </Badge>
                  
                  {/* Match Score */}
                  <div className="text-center">
                    <p className={`text-2xl font-bold ${getMatchScoreColor(donor.matchScore)}`}>
                      {donor.matchScore}%
                    </p>
                    <p className="text-xs text-muted-foreground">Match</p>
                  </div>
                  
                  {/* Availability */}
                  <Badge className={getAvailabilityColor(donor.availability)}>
                    {donor.availability}
                  </Badge>
                </div>
              </div>
              
              <div className="mt-4 grid grid-cols-4 gap-4 text-sm">
                <div className="flex items-center space-x-1">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span>Last: {donor.lastDonation}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Heart className="h-4 w-4 text-blood-primary" />
                  <span>{donor.donationCount} donations</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Star className="h-4 w-4 text-warning" />
                  <span>{donor.rating}/5.0</span>
                </div>
                <div className="flex justify-end space-x-2">
                  <Button size="sm" variant="outline">
                    <Navigation className="h-3 w-3 mr-1" />
                    Directions
                  </Button>
                  <Button size="sm" className="gradient-medical">
                    <Phone className="h-3 w-3 mr-1" />
                    Contact
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Map placeholder */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <MapPin className="h-5 w-5 text-medical-primary" />
            <span>Donor Locations</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-64 bg-muted rounded-lg flex items-center justify-center border-2 border-dashed border-border">
            <div className="text-center">
              <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
              <p className="text-muted-foreground">Interactive map will show here</p>
              <p className="text-sm text-muted-foreground">Displaying nearby donors and blood banks</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DonorMatching;