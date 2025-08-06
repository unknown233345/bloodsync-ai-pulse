import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { 
  Trophy, 
  Star, 
  Medal, 
  Award, 
  Heart,
  Target,
  Zap,
  Crown,
  Gift,
  Calendar,
  Users,
  TrendingUp
} from 'lucide-react';

interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  unlocked: boolean;
  progress?: number;
  maxProgress?: number;
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
  points: number;
}

interface LeaderboardEntry {
  rank: number;
  name: string;
  points: number;
  donations: number;
  level: number;
}

const Gamification = () => {
  const userStats = {
    level: 7,
    currentXP: 1250,
    nextLevelXP: 1500,
    totalPoints: 3420,
    totalDonations: 12,
    streak: 5,
    rank: 23
  };

  const achievements: Achievement[] = [
    {
      id: '1',
      title: 'First Drop',
      description: 'Complete your first blood donation',
      icon: <Heart className="h-6 w-6" />,
      unlocked: true,
      rarity: 'common',
      points: 100
    },
    {
      id: '2',
      title: 'Life Saver',
      description: 'Donate blood 5 times',
      icon: <Medal className="h-6 w-6" />,
      unlocked: true,
      progress: 5,
      maxProgress: 5,
      rarity: 'rare',
      points: 500
    },
    {
      id: '3',
      title: 'Hero Status',
      description: 'Donate blood 25 times',
      icon: <Award className="h-6 w-6" />,
      unlocked: false,
      progress: 12,
      maxProgress: 25,
      rarity: 'epic',
      points: 1500
    },
    {
      id: '4',
      title: 'Guardian Angel',
      description: 'Save 100 lives through donations',
      icon: <Crown className="h-6 w-6" />,
      unlocked: false,
      progress: 36,
      maxProgress: 100,
      rarity: 'legendary',
      points: 5000
    }
  ];

  const leaderboard: LeaderboardEntry[] = [
    { rank: 1, name: 'Alex Thompson', points: 8750, donations: 35, level: 15 },
    { rank: 2, name: 'Maria Garcia', points: 7320, donations: 28, level: 13 },
    { rank: 3, name: 'David Kim', points: 6890, donations: 24, level: 12 },
    { rank: 4, name: 'Sarah Wilson', points: 5440, donations: 22, level: 11 },
    { rank: 5, name: 'James Brown', points: 4220, donations: 18, level: 9 }
  ];

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'common': return 'bg-muted text-muted-foreground';
      case 'rare': return 'bg-medical-primary-light text-medical-primary';
      case 'epic': return 'bg-warning-light text-warning';
      case 'legendary': return 'gradient-emergency text-white';
      default: return 'bg-muted';
    }
  };

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1: return <Crown className="h-5 w-5 text-warning" />;
      case 2: return <Medal className="h-5 w-5 text-muted-foreground" />;
      case 3: return <Award className="h-5 w-5 text-warning" />;
      default: return <Star className="h-5 w-5 text-muted-foreground" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* User Progress Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="gradient-medical text-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm opacity-90">Level</p>
                <p className="text-3xl font-bold">{userStats.level}</p>
              </div>
              <Trophy className="h-8 w-8 opacity-90" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="gradient-health text-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm opacity-90">Total Points</p>
                <p className="text-3xl font-bold">{userStats.totalPoints.toLocaleString()}</p>
              </div>
              <Star className="h-8 w-8 opacity-90" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-blood-primary text-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm opacity-90">Donations</p>
                <p className="text-3xl font-bold">{userStats.totalDonations}</p>
              </div>
              <Heart className="h-8 w-8 opacity-90" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-warning text-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm opacity-90">Global Rank</p>
                <p className="text-3xl font-bold">#{userStats.rank}</p>
              </div>
              <TrendingUp className="h-8 w-8 opacity-90" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Level Progress */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Target className="h-5 w-5 text-medical-primary" />
            <span>Level Progress</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Level {userStats.level}</span>
              <span className="text-sm text-muted-foreground">
                {userStats.currentXP} / {userStats.nextLevelXP} XP
              </span>
            </div>
            <Progress 
              value={(userStats.currentXP / userStats.nextLevelXP) * 100} 
              className="h-3"
            />
            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <span>250 XP to next level</span>
              <span className="flex items-center space-x-1">
                <Zap className="h-4 w-4" />
                <span>{userStats.streak} day streak!</span>
              </span>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Achievements */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Award className="h-5 w-5 text-medical-primary" />
              <span>Achievements</span>
              <Badge className="bg-health-green-light text-health-green">
                {achievements.filter(a => a.unlocked).length}/{achievements.length}
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {achievements.map((achievement) => (
                <div key={achievement.id} className={`p-4 rounded-lg border ${
                  achievement.unlocked ? 'bg-background' : 'bg-muted/50 opacity-75'
                }`}>
                  <div className="flex items-start space-x-3">
                    <div className={`p-2 rounded-lg ${
                      achievement.unlocked 
                        ? getRarityColor(achievement.rarity)
                        : 'bg-muted text-muted-foreground'
                    }`}>
                      {achievement.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2">
                        <h4 className="font-medium">{achievement.title}</h4>
                        <Badge className={getRarityColor(achievement.rarity)}>
                          {achievement.rarity}
                        </Badge>
                        {achievement.unlocked && (
                          <Badge className="bg-health-green text-white">
                            +{achievement.points} pts
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">
                        {achievement.description}
                      </p>
                      {achievement.progress !== undefined && achievement.maxProgress && (
                        <div className="mt-2">
                          <Progress 
                            value={(achievement.progress / achievement.maxProgress) * 100}
                            className="h-2"
                          />
                          <p className="text-xs text-muted-foreground mt-1">
                            {achievement.progress} / {achievement.maxProgress}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Leaderboard */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Trophy className="h-5 w-5 text-medical-primary" />
              <span>Leaderboard</span>
              <Badge className="bg-medical-primary-light text-medical-primary">
                This Month
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {leaderboard.map((entry) => (
                <div key={entry.rank} className="flex items-center space-x-3 p-3 rounded-lg bg-muted/50">
                  <div className="flex items-center space-x-2">
                    {getRankIcon(entry.rank)}
                    <span className="font-bold text-lg">#{entry.rank}</span>
                  </div>
                  <div className="flex-1">
                    <p className="font-medium">{entry.name}</p>
                    <p className="text-sm text-muted-foreground">
                      Level {entry.level} • {entry.donations} donations
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-medical-primary">
                      {entry.points.toLocaleString()}
                    </p>
                    <p className="text-xs text-muted-foreground">points</p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* User's rank */}
            <div className="mt-4 p-3 rounded-lg bg-medical-primary-light border-2 border-medical-primary">
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-2">
                  <Star className="h-5 w-5 text-medical-primary" />
                  <span className="font-bold text-lg text-medical-primary">#{userStats.rank}</span>
                </div>
                <div className="flex-1">
                  <p className="font-medium">You</p>
                  <p className="text-sm text-medical-primary">
                    Level {userStats.level} • {userStats.totalDonations} donations
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-medical-primary">
                    {userStats.totalPoints.toLocaleString()}
                  </p>
                  <p className="text-xs text-medical-primary">points</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Rewards Store */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Gift className="h-5 w-5 text-medical-primary" />
            <span>Rewards Store</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 border rounded-lg">
              <div className="text-center">
                <Heart className="h-8 w-8 text-blood-primary mx-auto mb-2" />
                <h4 className="font-medium">Health Checkup</h4>
                <p className="text-sm text-muted-foreground mb-3">Free health screening</p>
                <Badge className="bg-medical-primary text-white">500 points</Badge>
                <Button size="sm" className="w-full mt-3 gradient-medical">
                  Redeem
                </Button>
              </div>
            </div>
            
            <div className="p-4 border rounded-lg">
              <div className="text-center">
                <Gift className="h-8 w-8 text-health-green mx-auto mb-2" />
                <h4 className="font-medium">Gift Card</h4>
                <p className="text-sm text-muted-foreground mb-3">$25 pharmacy voucher</p>
                <Badge className="bg-health-green text-white">1000 points</Badge>
                <Button size="sm" className="w-full mt-3 gradient-health">
                  Redeem
                </Button>
              </div>
            </div>
            
            <div className="p-4 border rounded-lg">
              <div className="text-center">
                <Crown className="h-8 w-8 text-warning mx-auto mb-2" />
                <h4 className="font-medium">VIP Status</h4>
                <p className="text-sm text-muted-foreground mb-3">Priority scheduling</p>
                <Badge className="bg-warning text-white">2000 points</Badge>
                <Button size="sm" className="w-full mt-3" style={{background: 'hsl(var(--warning))', color: 'white'}}>
                  Redeem
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Gamification;