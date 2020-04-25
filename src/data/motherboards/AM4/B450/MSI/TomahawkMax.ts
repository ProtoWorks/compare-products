import { Motherboard, Socket } from "../../../../../model/Hardware";

export const TomahawkMax: Motherboard = {
  identifier: "MSI B450 Tomahawk MAX",
  name: "Tomahawk MAX",
  manufacturer: "MSI",
  processor: {
    socket: Socket.AM4,
    chipset: "B450",
  },

  memory: {
    slots: 4,
    speedMHz: [
      1866,
      2133,
      2400,
      2667,
      2800,
      2933,
      3000,
      3066,
      3200,
      3466,
      4000,
      4133,
    ],
    channels: 2,
    types: {
      unregistered: true,
      registered: false,
      ecc: false,
      eccInNonEccMode: true,
      nonEcc: true,
    },
    generation: "DDR4",
    maxSizeGB: 128,
  },

  pcie: [
    {
      location: 2,
      generation: 3,
      source: "CPU",
      size: 16,
      maxLanes: 16,
      actualLanes: [
        {
          constraints: ["APU"],
          lanes: 8,
        },
      ],
    },
    {
      location: 5,
      generation: 2,
      source: "Chipset",
      size: 16,
      maxLanes: 4,
      actualLanes: [{ constraints: ["PCI-E3", "PCI-E4"], lanes: 2 }],
    },
    {
      location: 3,
      generation: 2,
      source: "Chipset",
      size: 1,
      maxLanes: 1,
    },
    {
      location: 4,
      generation: 2,
      source: "Chipset",
      size: 1,
      maxLanes: 1,
    },
    {
      location: 6,
      generation: 2,
      source: "Chipset",
      size: 1,
      maxLanes: 1,
    },
  ],

  storage: {
    sata: [
      {
        location: 1,
        generation: 3,
        source: "CPU",
      },
      {
        location: 2,
        generation: 3,
        source: "CPU",
      },
      {
        location: 3,
        generation: 3,
        source: "CPU",
      },
      {
        location: 4,
        generation: 3,
        source: "CPU",
      },
      {
        location: 5,
        generation: 3,
        source: "Chipset",
        constraints: ["M2-1"],
      },
      {
        location: 6,
        generation: 3,
        source: "Chipset",
        constraints: ["M2-1"],
      },
    ],
    m2: [
      {
        pcie: {
          generation: 3,
          lanes: 4,
        },
        sata: {
          generation: 3,
        },
        length: [2242, 2260, 2280, 22110],
        constraints: ["SATA-5", "SATA-6"],
      },
    ],
  },

  usb: [
    {
      location: "rear",
      generation: 3.2,
      type: "C",
      source: "Chipset",
      number: 1,
    },
    {
      location: "rear",
      generation: 3.2,
      type: "A",
      source: "Chipset",
      number: 1,
    },
    {
      location: "header",
      generation: 3.1,
      type: "A",
      source: "Chipset",
      number: 2,
    },
    {
      location: "rear",
      generation: 2,
      type: "A",
      source: "Chipset",
      number: 2,
    },
    {
      location: "header",
      generation: 2,
      type: "A",
      source: "Chipset",
      number: 4,
    },
    {
      location: "rear",
      generation: 2,
      type: "A",
      source: "CPU",
      number: 2,
    },
  ],

  audio: {
    manufacturer: "Realtek",
    channel: "7.1",
  },

  lan: [
    {
      maxSpeedGbps: 1,
      manufacturer: "Realtek",
    },
  ],

  headers: {
    atx24pin: 1,
    atx8pin: 1,
    cpufan: 1,
    pumpfan: true,
    pwmfan: 4,
    tpm: true,
  },
};
