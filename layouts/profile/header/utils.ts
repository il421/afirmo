export const getPercent = (completed: number, allSections: number) =>
  allSections ? (completed * 100) / allSections : 0;
