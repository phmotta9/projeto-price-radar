export function calcVariation(currentPrice: number, previousPrice?: number): number | null {
  if (!previousPrice) return null;

  return ((currentPrice - previousPrice) / previousPrice) * 100;
}