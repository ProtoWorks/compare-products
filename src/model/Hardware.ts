export interface Hardware {
  identifier: string;
  name: string;
  manufacturer: string;
}

export enum Socket {
  FM2Plus,
  LGA2011_v3,
  LGA1151,
  LGA3647,
  LGA2066,
  TR4,
  SP3,
  AM4,
  sTRX4,
}

export interface Motherboard extends Hardware {
  identifier: string;
  name: string;
  manufacturer: string;

  processor: {
    socket?: Socket;
    chipset?: string;
    integrated?: string;

    compatibleProccessors?: string[];
  };

  memory: {
    slots: number;
    speedMHz: number[];
    generation: string; // DDRx
    types: {
      unregistered: boolean;
      registered: boolean;
      ecc: boolean;
      eccInNonEccMode: boolean;
      nonEcc: boolean;
    };
    channels: number;
    maxSizeGB: number;

    compatibleMeory?: string[];
  };

  pcie: {
    // starting with 1. Mini-ITX has 1, ATX has 1-7.
    location: number;

    generation: number;
    source: string;
    size: 1 | 2 | 4 | 8 | 16;
    maxLanes: 1 | 2 | 4 | 8 | 16;
    actualLanes?: {
      constraints: string[];
      lanes: 0 | 1 | 2 | 4 | 8 | 16;
    }[];
  }[];

  storage?: {
    sata?: {
      location: number;
      generation: number;
      source: string;
      constraints?: string[];
    }[];
    m2?: {
      pcie?: {
        generation: number;
        lanes: number;
      };
      sata?: {
        generation: number;
      };
      length: number[];
      constraints?: string[];
    }[];
  };

  usb: {
    location: string; // rear / header
    generation: number;
    type: string; // A, C
    source: string;
    number: number;
  }[];

  audio: {
    manufacturer: string;
    channel: string;
  };

  lan: {
    maxSpeedGbps: number;
    manufacturer: string;
  }[];

  headers: {
    atx24pin: number;
    atx8pin: number;
    cpufan: number;
    pumpfan?: boolean;
    pwmfan: number;
    tpm?: boolean;
  };
}
