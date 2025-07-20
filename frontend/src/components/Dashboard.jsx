import React, { useState, useEffect } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { 
  Bot, 
  Video, 
  Image as ImageIcon, 
  MessageCircle, 
  Edit3, 
  Calendar, 
  BarChart3, 
  Search,
  Sparkles,
  Play,
  Pause,
  Settings,
  Upload,
  Download
} from 'lucide-react';
import mockData from '../data/mockData';

const Dashboard = () => {
  const [agents, setAgents] = useState(mockData.agents);
  const [activities, setActivities] = useState(mockData.recentActivities);
  const [commandInput, setCommandInput] = useState('');

  // Simulate real-time activity updates
  useEffect(() => {
    const interval = setInterval(() => {
      const newActivity = mockData.generateRandomActivity();
      setActivities(prev => [newActivity, ...prev.slice(0, 9)]);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const getAgentStatus = (status) => {
    const statusMap = {
      'active': { color: 'bg-green-500', text: 'Active', icon: '🟢' },
      'processing': { color: 'bg-blue-500', text: 'Processing', icon: '🔄' },
      'generating': { color: 'bg-purple-500', text: 'Generating', icon: '⚡' },
      'idle': { color: 'bg-gray-400', text: 'Idle', icon: '⚫' }
    };
    return statusMap[status] || statusMap.idle;
  };

  const handleCommand = (e) => {
    e.preventDefault();
    if (commandInput.trim()) {
      const newActivity = {
        id: Date.now(),
        agent: 'Command Agent',
        action: `Executed: ${commandInput}`,
        timestamp: 'Just now',
        icon: '🤖',
        color: 'text-purple-500'
      };
      setActivities(prev => [newActivity, ...prev.slice(0, 9)]);
      setCommandInput('');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Header */}
      <header className="border-b border-slate-700 bg-slate-900/50 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Bot className="h-8 w-8 text-blue-400" />
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Sociact AI
                </span>
              </div>
              <Badge variant="outline" className="border-green-400 text-green-400 animate-pulse">
                {agents.filter(a => a.status === 'active').length} Agents Active
              </Badge>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </Button>
              <div className="h-8 w-8 rounded-full bg-gradient-to-r from-blue-400 to-purple-400"></div>
            </div>
          </div>
        </div>
      </header>

      {/* Command Bar */}
      <div className="container mx-auto px-6 py-6">
        <Card className="p-4 bg-slate-800/50 border-slate-700 backdrop-blur-sm">
          <form onSubmit={handleCommand} className="flex items-center space-x-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
              <input
                type="text"
                value={commandInput}
                onChange={(e) => setCommandInput(e.target.value)}
                placeholder="Ask Sociact Agents to... generate 5 captions & schedule them"
                className="w-full pl-10 pr-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all"
              />
            </div>
            <Button type="submit" className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600">
              <Sparkles className="h-4 w-4 mr-2" />
              Execute
            </Button>
          </form>
        </Card>
      </div>

      <div className="container mx-auto px-6 pb-6">
        <div className="grid grid-cols-12 gap-6">
          {/* Main Dashboard Widgets */}
          <div className="col-span-8">
            <div className="grid grid-cols-2 gap-6 mb-6">
              {/* AI Agent Panels */}
              {agents.slice(0, 4).map((agent) => {
                const statusInfo = getAgentStatus(agent.status);
                return (
                  <Card key={agent.id} className="p-6 bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 group cursor-pointer">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg group-hover:scale-110 transition-transform">
                          {agent.icon === '🎬' && <Video className="h-5 w-5 text-blue-400" />}
                          {agent.icon === '🖼️' && <ImageIcon className="h-5 w-5 text-green-400" />}
                          {agent.icon === '💬' && <MessageCircle className="h-5 w-5 text-orange-400" />}
                          {agent.icon === '✂️' && <Edit3 className="h-5 w-5 text-purple-400" />}
                        </div>
                        <div>
                          <h3 className="font-semibold text-white">{agent.name}</h3>
                          <p className="text-sm text-slate-400">{agent.description}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className={`w-2 h-2 rounded-full ${statusInfo.color} animate-pulse`}></div>
                        <span className="text-xs text-slate-400">{statusInfo.text}</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-400">Progress</span>
                        <span className="text-white">{agent.progress}%</span>
                      </div>
                      <Progress value={agent.progress} className="h-2 bg-slate-700">
                        <div 
                          className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-500 rounded-full"
                          style={{ width: `${agent.progress}%` }}
                        />
                      </Progress>
                      <div className="flex justify-between items-center pt-2">
                        <span className="text-xs text-slate-500">{agent.lastActivity}</span>
                        <div className="flex space-x-1">
                          <Button size="sm" variant="ghost" className="h-6 w-6 p-0 text-slate-400 hover:text-white">
                            <Play className="h-3 w-3" />
                          </Button>
                          <Button size="sm" variant="ghost" className="h-6 w-6 p-0 text-slate-400 hover:text-white">
                            <Pause className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>

            {/* Quick Actions Grid */}
            <Card className="p-6 bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-4 text-white">Quick Actions</h3>
              <div className="grid grid-cols-4 gap-4">
                {mockData.quickActions.map((action, index) => (
                  <Button 
                    key={index}
                    variant="outline" 
                    className="h-20 flex-col space-y-2 border-slate-600 hover:border-blue-400 hover:bg-blue-400/10 transition-all group"
                  >
                    <span className="text-2xl group-hover:scale-110 transition-transform">{action.icon}</span>
                    <span className="text-xs text-slate-300 group-hover:text-white">{action.label}</span>
                  </Button>
                ))}
              </div>
            </Card>
          </div>

          {/* Activity Feed Sidebar */}
          <div className="col-span-4">
            <Card className="p-6 bg-slate-800/50 border-slate-700 backdrop-blur-sm h-fit">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-white">Live Activity Feed</h3>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-xs text-green-400">Live</span>
                </div>
              </div>
              <div className="space-y-3 max-h-96 overflow-y-auto">
                {activities.map((activity) => (
                  <div key={activity.id} className="flex items-start space-x-3 p-3 bg-slate-700/30 rounded-lg hover:bg-slate-700/50 transition-colors">
                    <div className="flex-shrink-0">
                      <span className="text-lg">{activity.icon}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-white truncate">
                        {activity.agent}
                      </p>
                      <p className="text-xs text-slate-400 mt-1">
                        {activity.action}
                      </p>
                      <p className="text-xs text-slate-500 mt-1">
                        {activity.timestamp}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Stats Card */}
            <Card className="p-6 bg-slate-800/50 border-slate-700 backdrop-blur-sm mt-6">
              <h3 className="text-lg font-bold text-white mb-4">Today's Stats</h3>
              <div className="space-y-4">
                {mockData.stats.map((stat, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 rounded-lg ${stat.color}`}>
                        {stat.icon === 'video' && <Video className="h-4 w-4 text-white" />}
                        {stat.icon === 'image' && <ImageIcon className="h-4 w-4 text-white" />}
                        {stat.icon === 'comment' && <MessageCircle className="h-4 w-4 text-white" />}
                        {stat.icon === 'edit' && <Edit3 className="h-4 w-4 text-white" />}
                      </div>
                      <span className="text-sm text-slate-300">{stat.label}</span>
                    </div>
                    <span className="font-semibold text-white">{stat.value}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;