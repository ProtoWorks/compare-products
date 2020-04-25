export interface Hardware {
  identifyer: string;
  name: string;
  manufacturer: string;
}

export interface Motherboard extends Hardware {
  identifyer: string;
  name: string;
  manufacturer: string;

  processor: {
    socket?: string;
    chipset?: string;
    integrated?: string;

    compatibleProccessors?: string[];
  };

  memory: {
    slots: number;
    generation: string; // DDRx
    types: {
      unregistered: boolean;
      registered: boolean;
      ecc: boolean;
      nonEcc: boolean;
    };
    channels: number;
    maxSize: number;

    compatibleMeory?: string[];
  };

  pcie: {
    version: number;
    location: number;
    source: string;
    physicalSize: 1 | 2 | 4 | 8 | 16;
    actualMaxSize: 1 | 2 | 4 | 8 | 16;
    actualSizes: {
      withThesePopulated: string[];
      size: 0 | 1 | 2 | 4 | 8 | 16;
    }[];
  }[];
}
