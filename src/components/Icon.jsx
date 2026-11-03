import {
  TrendingUp, Scale, Clock, Compass, Flame, Dumbbell, HeartPulse, Sprout, Video, ClipboardList,
  Target, MessageCircleQuestion, Leaf, Circle, X, Hourglass, CheckCircle2, ChevronDown,
} from "lucide-react";

// To use a new icon: import it above AND add it to this list.
// Icon names used in content.js must be registered here.
export const Icons = { TrendingUp, Scale, Clock, Compass, Flame, Dumbbell, HeartPulse, Sprout, Video, ClipboardList, Target, MessageCircleQuestion, Leaf, Circle, X, Hourglass, CheckCircle2, ChevronDown };

const Icon = ({ name, className = "h-6 w-6" }) => {
  const C = Icons[name] || Icons.Circle;
  return <C className={className} />;
};

export default Icon;
