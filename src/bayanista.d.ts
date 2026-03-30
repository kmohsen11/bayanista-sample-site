interface BayanistaSDK {
  init(config?: {
    projectId?: string;
    apiKey?: string;
    apiEndpoint?: string;
    debug?: boolean;
    captureClicks?: boolean;
    captureForms?: boolean;
    captureNavigation?: boolean;
    captureNetwork?: boolean;
    captureErrors?: boolean;
    captureRageClicks?: boolean;
    captureDeadClicks?: boolean;
    captureScrollDepth?: boolean;
    captureVisibility?: boolean;
    batchSize?: number;
    flushInterval?: number;
    sessionTimeout?: number;
    respectDoNotTrack?: boolean;
    maskSensitiveData?: boolean;
  }): void;
  identify(userId: string, traits?: Record<string, unknown>): void;
  track(eventName: string, properties?: Record<string, unknown>): void;
  reset(): void;
  destroy(): void;
}

declare global {
  interface Window {
    Bayanista?: BayanistaSDK;
  }
}

export {};
