
import React from 'react';
import { Package, ShoppingCart, Users, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { wines } from '@/data/wines';

const AdminDashboard = () => {
  const stats = [
    {
      title: 'Total Products',
      value: wines.length,
      icon: Package,
      description: 'Active wine products',
      color: 'text-blue-600'
    },
    {
      title: 'Total Orders',
      value: '127',
      icon: ShoppingCart,
      description: '+12% from last month',
      color: 'text-green-600'
    },
    {
      title: 'Total Users',
      value: '1,234',
      icon: Users,
      description: '+5% from last month',
      color: 'text-purple-600'
    },
    {
      title: 'Revenue',
      value: '$12,345',
      icon: TrendingUp,
      description: '+8% from last month',
      color: 'text-wine-600'
    }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard Overview</h1>
        <p className="text-gray-600 mt-2">
          Welcome to your wine store admin panel. Here's what's happening today.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.title}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">
                  {stat.title}
                </CardTitle>
                <Icon className={`h-4 w-4 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-gray-600 mt-1">
                  {stat.description}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Latest updates from your store</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-sm">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-gray-600">New order #1234 received</span>
                <span className="text-gray-400 text-xs ml-auto">2 min ago</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-gray-600">Product "Château Margaux" updated</span>
                <span className="text-gray-400 text-xs ml-auto">1 hour ago</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span className="text-gray-600">New user registered</span>
                <span className="text-gray-400 text-xs ml-auto">3 hours ago</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Top Selling Products</CardTitle>
            <CardDescription>Your best performers this month</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {wines.slice(0, 3).map((wine, index) => (
                <div key={wine.id} className="flex items-center space-x-3">
                  <div className="text-sm font-medium text-gray-400">#{index + 1}</div>
                  <img 
                    src={wine.image} 
                    alt={wine.name}
                    className="w-8 h-8 rounded object-cover"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">
                      {wine.name}
                    </p>
                    <p className="text-xs text-gray-500">${wine.price}</p>
                  </div>
                  <div className="text-sm text-gray-600">24 sold</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;
