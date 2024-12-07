import { useState } from "react";
import { NavLink } from "react-router-dom";
import { 
  LayoutDashboard, 
  MessageSquare, 
  Calendar, 
  UtensilsCrossed as MenuIcon,
  Archive, 
  Settings,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

const menuItems = [
  { 
    title: "Dashboard", 
    icon: LayoutDashboard, 
    path: "/" 
  },
  { 
    title: "Inquiries", 
    icon: MessageSquare, 
    path: "/AdminInquiry" 
  },
  { 
    title: "Event", 
    icon: Calendar, 
    path: "/AdminEvent" 
  },
  { 
    title: "Menu", 
    icon: MenuIcon, 
    path: "/Menu" 
  },
  { 
    title: "Inbox", 
    icon: Archive, 
    path: "/Archive" 
  },
  { 
    title: "Setting", 
    icon: Settings, 
    path: "/Settings" 
  }
];

const Tooltip = ({ text, children, show }) => {
  if (!show) return children;
  
  return (
    <div className="group relative flex">
      {children}
      <div className="absolute left-12 top-1/2 -translate-y-1/2 z-50 hidden group-hover:flex">
        <div className="bg-gray-800 text-white px-2 py-1 rounded-md text-sm whitespace-nowrap">
          {text}
        </div>
      </div>
    </div>
  );
};

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div 
      className={`relative min-h-screen bg-white border-r border-gray-200 transition-all duration-300 ease-in-out
        ${isExpanded ? 'w-64' : 'w-16'}`}
    >
      {/* Toggle Button */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="absolute -right-3 top-[14px] bg-white border border-gray-200 rounded-full p-1.5 hover:bg-gray-100"
      >
        {isExpanded ? 
          <ChevronLeft className="w-4 h-4 text-gray-600" /> : 
          <ChevronRight className="w-4 h-4 text-gray-600" />
        }
      </button>

      {/* Logo Area */}
      <div className="flex items-center justify-center h-16 border-b border-gray-200">
        {isExpanded ? (
          <h1 className="text-xl font-bold text-gray-800">Admin Panel</h1>
        ) : (
          <span className="text-xl font-bold text-gray-800">A</span>
        )}
      </div>

      {/* Navigation Menu */}
      <nav className="p-4 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          
          return (
            <Tooltip key={item.title} text={item.title} show={!isExpanded}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center px-3 py-2 rounded-lg transition-colors
                  ${isActive 
                    ? 'bg-blue-50 text-blue-600' 
                    : 'text-gray-600 hover:bg-gray-50'
                  }`
                }
              >
                <Icon className="w-5 h-5" />
                {isExpanded && (
                  <span className="ml-3 font-medium">{item.title}</span>
                )}
              </NavLink>
            </Tooltip>
          );
        })}
      </nav>
    </div>
  );
};

export default Sidebar;