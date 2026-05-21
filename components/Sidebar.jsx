"use client";
import { useState } from "react";
import { IoSparklesSharp } from "react-icons/io5";
import styles from "./Sidebar.module.css";

const DropdownIconSm = () => (
  <div className={styles["dropdown-icon-sm"]}>
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2 3.5L5 6.5L8 3.5" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </div>
);

const DropdownIconLg = () => (
  <div className={styles["dropdown-icon-lg"]}>
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.5 4L6 7.5L9.5 4" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </div>
);

export default function Sidebar({
  onGenerate,
  prompt,      setPrompt,
  imageCount,  setImageCount,
  ratio,       setRatio,
  modelName,   setModelName,
  advance,     setAdvance,
  styleOption, setStyleOption,
  activeTab,   setActiveTab,
}) {
  const [isLoading, setIsLoading] = useState(false);

  const isPromptEmpty = !prompt.trim();
  const tabs = ["Image", "Video"];

  const handleGenerate = async () => {
    if (!prompt.trim() || isLoading) return;
    setIsLoading(true);
    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          prompt: prompt.trim(),
          count: imageCount ? parseInt(imageCount) : 8,
          type: activeTab,
        }),
      });
      const data = await res.json();
      if (onGenerate) onGenerate(data.images || [], prompt.trim(), activeTab);
    } catch (err) {
      console.error("Generate error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <aside className={styles.sidebar}>

      {/* ── Image / Video Toggle ── */}
      <div className={styles["tab-toggle"]} role="group" aria-label="Content type">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`${styles["tab-button"]} ${activeTab === tab ? styles.active : ""}`}
            aria-pressed={activeTab === tab}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* ── Prompt Textarea ── */}
      <div className={styles["prompt-box"]}>
        <label htmlFor="prompt-input" className="sr-only">
          Describe your image or video
        </label>
        <textarea
          id="prompt-input"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Describe your imaginations to be converted to piece of art ..."
          className={styles["prompt-textarea"]}
        />
        <div className={styles["prompt-footer"]}>
          <button
            className={`${styles["generate-btn"]} ${isPromptEmpty ? styles["generate-btn-disabled"] : ""}`}
            onClick={handleGenerate}
            disabled={isLoading || isPromptEmpty}
            aria-busy={isLoading}
            title={isPromptEmpty ? "Please enter a prompt first" : ""}
          >
            <IoSparklesSharp size={20} aria-hidden="true" />
            {isLoading ? "Generating..." : "Generate"}
          </button>
        </div>
      </div>

      {/* ── Three-column dropdowns ── */}
      <div className={styles["three-col-dropdowns"]}>

        <div className={styles["dropdown-wrapper"]}>
          <label htmlFor="image-count" className="sr-only"># Images</label>
          <select
            id="image-count"
            value={imageCount}
            onChange={(e) => setImageCount(e.target.value)}
            className={`${styles["select-base"]} ${styles["select-sm"]} ${styles["pad-r28"]}`}
          >
            <option value=""># Images</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="4">4</option>
          </select>
          <DropdownIconSm />
        </div>

        <div className={styles["dropdown-wrapper"]}>
          <label htmlFor="aspect-ratio" className="sr-only">Aspect ratio</label>
          <select
            id="aspect-ratio"
            value={ratio}
            onChange={(e) => setRatio(e.target.value)}
            className={`${styles["select-base"]} ${styles["select-sm"]} ${styles["pad-r24"]}`}
          >
            <option>1:1</option>
            <option>4:3</option>
            <option>16:9</option>
            <option>9:16</option>
          </select>
          <DropdownIconSm />
        </div>

        <div className={styles["dropdown-wrapper"]}>
          <label htmlFor="model-select" className="sr-only">Model</label>
          <select
            id="model-select"
            value={modelName}
            onChange={(e) => setModelName(e.target.value)}
            className={`${styles["select-base"]} ${styles["select-sm"]} ${styles["model-select"]} ${styles["pad-r28"]}`}
          >
            <option value="">Model: Name</option>
            <option value="v1">Model v1</option>
            <option value="v2">Model v2</option>
          </select>
          {modelName === "" && (
            <span className={styles["model-label-overlay"]} aria-hidden="true">
              Model: <strong>Name</strong>
            </span>
          )}
          <DropdownIconSm />
        </div>

      </div>

      {/* ── Advance dropdown ── */}
      <div className={`${styles["dropdown-wrapper"]} ${styles["advance-wrapper"]}`}>
        <label htmlFor="advance-select" className="sr-only">Advance options</label>
        <select
          id="advance-select"
          value={advance}
          onChange={(e) => setAdvance(e.target.value)}
          className={`${styles["select-base"]} ${styles["select-lg"]}`}
        >
          <option value="">Advance</option>
          <option value="hd">HD Quality</option>
          <option value="raw">Raw Mode</option>
          <option value="photorealistic">Photorealistic</option>
        </select>
        <DropdownIconLg />
      </div>

      {/* ── Styles dropdown ── */}
      <div className={`${styles["dropdown-wrapper"]} ${styles["styles-wrapper"]}`}>
        <label htmlFor="styles-select" className="sr-only">Style</label>
        <select
          id="styles-select"
          value={styleOption}
          onChange={(e) => setStyleOption(e.target.value)}
          className={`${styles["select-base"]} ${styles["select-lg"]}`}
        >
          <option value="">Styles</option>
          <option value="anime">Anime</option>
          <option value="oil">Oil Painting</option>
          <option value="watercolor">Watercolor</option>
          <option value="sketch">Sketch</option>
          <option value="3d">3D Render</option>
        </select>
        <DropdownIconLg />
      </div>

    </aside>
  );
}