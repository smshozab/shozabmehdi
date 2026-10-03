import type { Project } from "@/components/project-card"

export const openSourceProjects: Project[] = [
  {
    title: "TutorialFlowMCP",
    category: "Open source / MCP",
    period: "2026",
    preview: "Turn a screen recording into a narrated tutorial, with AI reasoning grounded in real frames.",
    summary: "Built an MCP server that returns timestamped frames to ChatGPT for visual reasoning and script writing. A Railway-hosted Python service uses ElevenLabs and FFmpeg to place narration at the right moments while preserving the original recording's video timing.",
    bullets: [
      "Frame inspection and contact sheets provide visual evidence for narration cues.",
      "Per-scene voice clips are synchronized without stretching or speeding up the source video.",
      "Exports include the tutorial MP4, timeline audio, script, and a thumbnail made from a real frame.",
    ],
    tags: ["MCP", "Python", "FFmpeg", "ElevenLabs", "Railway"],
    links: [{ label: "Source & setup", href: "https://github.com/smshozab/TutorialFlowMCP" }],
  },
  {
    title: "HyperFrames Launch Video Engine",
    category: "Open source / Developer tools",
    period: "2026",
    preview: "An editable product-launch video workflow built from one config and real product captures.",
    summary: "Created a local-first starter built on HyperFrames that generates editable HTML scenes from video.json. Brand, copy, palette, scene timing, and genuine product screenshots drive a reproducible launch-video workflow with SVG, CSS, and GSAP motion.",
    bullets: [
      "Validates the configuration and builds a main timeline with scene subcompositions.",
      "Includes an eight-scene, 60-second example with clearly labeled capture slots.",
      "Supports local preview and MP4 export without a required paid video-generation API.",
    ],
    tags: ["HyperFrames", "Python", "HTML/CSS", "GSAP", "Local-first"],
    links: [{ label: "Source & setup", href: "https://github.com/smshozab/hyperframes-launch-video-engine" }],
  },
]

export const openSourceContributions = [
  {
    title: "Google Timeline Visualizer",
    repository: "mahlernim/google-timeline-visualizer",
    summary: "Improved date selection and Python reliability in a tool for exploring Google Location History.",
    changes: [
      { label: "Date pickers constrained to available Timeline data", href: "https://github.com/mahlernim/google-timeline-visualizer/pull/181" },
      { label: "Python error handling and dead-code cleanup", href: "https://github.com/mahlernim/google-timeline-visualizer/pull/179" },
    ],
    merged: "Aug 2026",
  },
  {
    title: "Lazy Frames",
    repository: "cosmicstack-labs/lazy-frames",
    summary: "Made the local video workflow more usable on Windows, including browser discovery, narration, and synchronized preview audio.",
    changes: [
      { label: "Windows providers, SAPI text-to-speech, and preview audio", href: "https://github.com/cosmicstack-labs/lazy-frames/pull/1" },
    ],
    merged: "Aug 2026",
  },
]
