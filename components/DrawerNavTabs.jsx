import { FaFolder } from "react-icons/fa";
import { FaHouse, FaVideo } from "react-icons/fa6";
import { BsImage } from "react-icons/bs";
import { FaMagic } from "react-icons/fa";

import "./DrawerNavTabs.css";

const tabs = [
  { id: "house", label: "Home", icon: FaHouse },
  { id: "image", label: "Image", icon: BsImage },
  { id: "video", label: "Video", icon: FaVideo },
  { id: "edit", label: "Edit", icon: FaMagic, flip: true },
  { id: "files", label: "Files", icon: FaFolder },
];

export default function DrawerNavTabs({
  active,
  setActive,
  onClose,
}) {
  return (
    <div className="drawer-tabs">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = active === tab.id;

        return (
          <button
            key={tab.id}
            onClick={() => {
              setActive(tab.id);
              onClose();
            }}
            className={`drawer-tab-btn ${
              isActive ? "drawer-tab-active" : ""
            }`}
          >
            {/* Active indicator bar */}
            <div
              className={`drawer-indicator ${
                isActive ? "drawer-indicator-active" : ""
              }`}
            />

            <span className={tab.flip ? "drawer-flip-icon" : ""}>
              <Icon size={17} />
            </span>

            <span>{tab.label}</span>
          </button>
        );
      })}
    </div>
  );
}