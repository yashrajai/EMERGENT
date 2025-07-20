const mockData = {
  agents: [
    {
      id: 1,
      name: "Video Generator",
      description: "Creating UGC ads with avatars",
      icon: "🎬",
      status: "active",
      progress: 75,
      lastActivity: "Generated 3 videos"
    },
    {
      id: 2,
      name: "Image Creator",
      description: "AI-powered image generation",
      icon: "🖼️",
      status: "processing",
      progress: 45,
      lastActivity: "Creating thumbnails"
    },
    {
      id: 3,
      name: "Comment Automator",
      description: "Managing Instagram & YouTube",
      icon: "💬",
      status: "active",
      progress: 90,
      lastActivity: "Replied to 12 comments"
    },
    {
      id: 4,
      name: "Auto Video Editor",
      description: "Editing and optimizing content",
      icon: "✂️",
      status: "generating",
      progress: 30,
      lastActivity: "Processing video clips"
    },
    {
      id: 5,
      name: "Script Writer",
      description: "Creating engaging scripts",
      icon: "📝",
      status: "idle",
      progress: 0,
      lastActivity: "Waiting for input"
    },
    {
      id: 6,
      name: "SEO Optimizer",
      description: "Optimizing for search",
      icon: "🔍",
      status: "processing",
      progress: 60,
      lastActivity: "Analyzing keywords"
    }
  ],

  recentActivities: [
    {
      id: 1,
      agent: "Video Agent",
      action: "generated a UGC ad with avatar",
      timestamp: "2 mins ago",
      icon: "🎬",
      color: "text-blue-500"
    },
    {
      id: 2,
      agent: "Comment Agent",
      action: "replied to 5 Instagram comments",
      timestamp: "5 mins ago",
      icon: "💬",
      color: "text-green-500"
    },
    {
      id: 3,
      agent: "Image Agent",
      action: "created 3 product thumbnails",
      timestamp: "8 mins ago",
      icon: "🖼️",
      color: "text-purple-500"
    },
    {
      id: 4,
      agent: "Script Agent",
      action: "wrote 2 YouTube scripts",
      timestamp: "12 mins ago",
      icon: "📝",
      color: "text-orange-500"
    },
    {
      id: 5,
      agent: "Editor Agent",
      action: "processed video editing queue",
      timestamp: "15 mins ago",
      icon: "✂️",
      color: "text-red-500"
    },
    {
      id: 6,
      agent: "SEO Agent",
      action: "optimized content for search",
      timestamp: "18 mins ago",
      icon: "🔍",
      color: "text-yellow-500"
    },
    {
      id: 7,
      agent: "Avatar Agent",
      action: "created new avatar variations",
      timestamp: "22 mins ago",
      icon: "👤",
      color: "text-indigo-500"
    },
    {
      id: 8,
      agent: "Analytics Agent",
      action: "generated performance report",
      timestamp: "25 mins ago",
      icon: "📊",
      color: "text-cyan-500"
    }
  ],

  quickActions: [
    { icon: "🎥", label: "Generate Video" },
    { icon: "🖼️", label: "Create Image" },
    { icon: "💬", label: "Auto Comments" },
    { icon: "✂️", label: "Edit Video" },
    { icon: "📝", label: "Write Script" },
    { icon: "📊", label: "View Analytics" },
    { icon: "📅", label: "Schedule Content" },
    { icon: "🔍", label: "SEO Optimize" }
  ],

  stats: [
    {
      label: "Videos Generated",
      value: "24",
      icon: "video",
      color: "bg-blue-500"
    },
    {
      label: "Images Created",
      value: "156",
      icon: "image",
      color: "bg-green-500"
    },
    {
      label: "Comments Managed",
      value: "89",
      icon: "comment",
      color: "bg-orange-500"
    },
    {
      label: "Videos Edited",
      value: "12",
      icon: "edit",
      color: "bg-purple-500"
    }
  ],

  generateRandomActivity: () => {
    const activities = [
      {
        agent: "Video Agent",
        action: "generated a new avatar video",
        icon: "🎬",
        color: "text-blue-500"
      },
      {
        agent: "Comment Agent",
        action: "auto-replied to YouTube comments",
        icon: "💬",
        color: "text-green-500"
      },
      {
        agent: "Image Agent",
        action: "created product ad creatives",
        icon: "🖼️",
        color: "text-purple-500"
      },
      {
        agent: "Editor Agent",
        action: "completed video editing task",
        icon: "✂️",
        color: "text-red-500"
      },
      {
        agent: "SEO Agent",
        action: "optimized content for search",
        icon: "🔍",
        color: "text-yellow-500"
      },
      {
        agent: "Avatar Agent",
        action: "generated custom avatar",
        icon: "👤",
        color: "text-indigo-500"
      },
      {
        agent: "Analytics Agent",
        action: "processed engagement metrics",
        icon: "📊",
        color: "text-cyan-500"
      },
      {
        agent: "UGC Agent",
        action: "created user-generated content",
        icon: "🎭",
        color: "text-pink-500"
      }
    ];

    const randomActivity = activities[Math.floor(Math.random() * activities.length)];
    return {
      id: Date.now(),
      ...randomActivity,
      timestamp: "Just now"
    };
  }
};

export default mockData;