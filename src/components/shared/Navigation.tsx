import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Leaf, User, Package, QrCode, Shield } from "lucide-react";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const location = useLocation();
  
  const navItems = [
    { href: "/", label: "Home", icon: Leaf },
    { href: "/collector", label: "Collector", icon: User },
    { href: "/manufacturer", label: "Manufacturer", icon: Package },
    { href: "/consumer", label: "Consumer", icon: QrCode },
    { href: "/admin", label: "Admin", icon: Shield },
  ];

  return (
    <nav className="flex items-center space-x-1">
      {navItems.map(({ href, label, icon: Icon }) => (
        <Link key={href} to={href}>
          <Button
            variant={location.pathname === href ? "default" : "ghost"}
            size="sm"
            className={cn(
              "flex items-center space-x-2",
              location.pathname === href && "bg-primary text-primary-foreground"
            )}
          >
            <Icon className="h-4 w-4" />
            <span>{label}</span>
          </Button>
        </Link>
      ))}
    </nav>
  );
};

export default Navigation;