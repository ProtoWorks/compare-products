export interface Cpu {
  model: string;
  fab: string;
  cores: number;
  threads: number;
  baseClockMHz: number;
  boostClockMHz: number;
  l1CacheKb: number;
  l2CacheMb: number;
  l3CacheMb: number;

  socket: string;

  pcieLanes: number;
  pcieVersion: number;

  memoryChannels: number;
  maxMemorySpeedMHz: number;

  tdp: number;

  coolerPackaged: boolean;
}
