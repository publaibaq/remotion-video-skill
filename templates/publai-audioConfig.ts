/**
 * Audio Configuration for PublAI Transformation Video
 *
 * Scene timing driven by voiceover audio.
 * Update durationInFrames after generating audio with TTS.
 */

export interface SceneConfig {
  id: string;
  title: string;
  audioFile: string;
  durationInFrames: number;
  script: string;
}

export const FPS = 30;

export const SCENES: SceneConfig[] = [
  {
    id: '01-noise',
    title: 'The Noise',
    audioFile: '01-noise.mp3',
    durationInFrames: 300, // 10s - update after TTS
    script: 'Every day, millions of posts flood social media. Generic content. Forgettable visuals. An endless scroll of noise. But what if there was a way to cut through?',
  },
  {
    id: '02-intelligence',
    title: 'The Intelligence',
    audioFile: '02-intelligence.mp3',
    durationInFrames: 360, // 12s - update after TTS
    script: 'PublAI sees what others miss. Composition. Color harmony. Visual weight. Every element, analyzed in milliseconds. We don\u2019t create content \u2014 we transform it.',
  },
  {
    id: '03-transformation',
    title: 'The Transformation',
    audioFile: '03-transformation.mp3',
    durationInFrames: 300, // 10s - update after TTS
    script: 'Raw input flows through our transformation engine. Text, image, video, audio \u2014 each one optimized, composed, and elevated to cinematic quality.',
  },
  {
    id: '04-splitscreen',
    title: 'The Split-Screen',
    audioFile: '04-splitscreen.mp3',
    durationInFrames: 360, // 12s - update after TTS
    script: 'See the difference for yourself. Basic brand on the left. PublAI on the right. Three hundred and forty percent more engagement. Twelve times the content output. Ninety-four percent brand consistency. This is PublAI. Transform everything.',
  },
];

export function getSceneStart(index: number): number {
  return SCENES.slice(0, index).reduce((sum, s) => sum + s.durationInFrames, 0);
}

export const TOTAL_FRAMES = SCENES.reduce((sum, s) => sum + s.durationInFrames, 0);
