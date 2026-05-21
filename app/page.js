"use client";
import Providers from "@/components/Providers";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import HistoryBar from "@/components/HistoryBar";
import Sidebar from "@/components/Sidebar";
import PromptCard from "@/components/PromptCard";
import GalleryGrid from "@/components/GalleryGrid";
import DrawerNavTabs from "@/components/DrawerNavTabs";

export default function HomePage() {
  // ── UI state ──
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [active, setActive]           = useState("house");

  // ── Generation output state ──
  const [generatedImages, setGeneratedImages] = useState([]);
  const [lastPrompt, setLastPrompt]           = useState("");
  const [activeType, setActiveType]           = useState("Image");

  // ── Sidebar input state (lifted so both instances share same values) ──
  const [prompt, setPrompt]           = useState("");
  const [imageCount, setImageCount]   = useState("");
  const [ratio, setRatio]             = useState("1:1");
  const [modelName, setModelName]     = useState("");
  const [advance, setAdvance]         = useState("");
  const [styleOption, setStyleOption] = useState("");
  const [activeTab, setActiveTab]     = useState("Image");

  const handleGenerate = (images, generatedPrompt, type) => {
    setGeneratedImages(images);
    setLastPrompt(generatedPrompt);
    setActiveType(type);
    setSidebarOpen(false);
  };

  const sidebarProps = {
    onGenerate:  handleGenerate,
    prompt,      setPrompt,
    imageCount,  setImageCount,
    ratio,       setRatio,
    modelName,   setModelName,
    advance,     setAdvance,
    styleOption, setStyleOption,
    activeTab,   setActiveTab,
  };

  return (
    <Providers>
      <div
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          background: "var(--bg-page)",
          transition: "background 0.3s ease",
          overflow: "hidden",
        }}
      >

        {/* ── Fixed top bar ── */}
        <header
          className="flex-shrink-0 px-3 sm:px-4 lg:px-8 py-3"
          style={{ background: "var(--bg-page)", zIndex: 20 }}
        >
          <Navbar
            active={active}
            setActive={setActive}
            onMenuToggle={() => setSidebarOpen(!sidebarOpen)}
          />
          <div className="mt-3 sm:mt-4">
            <HistoryBar />
          </div>
        </header>

        {/* ── Overlay ── */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 z-30 bg-black/30 lg:hidden"
            onClick={() => setSidebarOpen(false)}
            aria-hidden="true"
          />
        )}

        {/* ── Drawer (mobile/tablet) ── */}
        <div
          className={`fixed top-0 left-0 h-full z-40 w-[300px] shadow-2xl transform transition-transform duration-300 ease-in-out lg:hidden ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          style={{ background: "var(--bg-page)" }}
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
        >
          <div className="h-full overflow-y-auto flex flex-col">
            <div
              className="px-4 pt-5 pb-4"
              style={{ borderBottom: "1.5px solid var(--border-nav)" }}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest">
                  Navigation
                </span>
                <button
                  onClick={() => setSidebarOpen(false)}
                  aria-label="Close menu"
                  className="text-gray-400 hover:text-gray-700 text-lg font-light leading-none bg-transparent border-none cursor-pointer"
                >
                  ✕
                </button>
              </div>
              <DrawerNavTabs
                active={active}
                setActive={setActive}
                onClose={() => setSidebarOpen(false)}
              />
            </div>
            <div className="px-4 pt-4 pb-6 flex-1">
              <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest block mb-3">
                Settings
              </span>
              <Sidebar {...sidebarProps} />
            </div>
          </div>
        </div>

        {/* ── Scrollable main content ── */}
        <main style={{ flex: 1, overflowY: "auto" }}>
          <div className="max-w-screen-2xl mx-auto h-full">

            {/* Mobile / Tablet */}
            <div className="flex flex-col lg:hidden px-3 sm:px-4 pb-6 pt-4 gap-4">
              <GalleryGrid images={generatedImages} type={activeType} />
            </div>

            {/* Desktop */}
            <div
              className="hidden lg:flex px-8 pb-6 pt-4 gap-6"
              style={{ minHeight: "100%" }}
            >
              <div className="w-[280px] flex-shrink-0">
                <Sidebar {...sidebarProps} />
              </div>

              <div className="flex-1 flex gap-3 min-w-0">
                <div className="w-[275px] flex-shrink-0">
                  <PromptCard prompt={lastPrompt} />
                </div>
                <div className="flex-1 min-w-0">
                  <GalleryGrid images={generatedImages} type={activeType} />
                </div>
              </div>
            </div>

          </div>
        </main>

      </div>
    </Providers>
  );
}