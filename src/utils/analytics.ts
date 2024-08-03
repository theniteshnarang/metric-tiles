import { roundANumber } from './math';

type DataEntry = Array<{ date: string; value: number }>;

export default function calculateMetrics(data: DataEntry) {
  // Calculate the average value
  const totalSum = data.reduce((sum, entry) => sum + entry.value, 0);
  const averageValue = roundANumber(totalSum / data.length);

  // Helper function to get the week number from a date
  function getWeekNumber(date: string): number {
    const d = new Date(date);
    const oneJan = new Date(d.getFullYear(), 0, 1);
    return Math.ceil(
      ((d.getTime() - oneJan.getTime()) / 86400000 + oneJan.getDay() + 1) / 7
    );
  }

  // Group values by week
  const valuesByWeek = data.reduce(
    (acc: { [key: number]: number[] }, entry) => {
      const weekNumber = getWeekNumber(entry.date);
      if (!acc[weekNumber]) acc[weekNumber] = [];
      acc[weekNumber].push(entry.value);
      return acc;
    },
    {}
  );

  // Calculate weekly totals
  const weeklyTotals = Object.keys(valuesByWeek).map((week) => {
    const weekNumber = parseInt(week);
    return valuesByWeek[weekNumber].reduce((sum, value) => sum + value, 0);
  });

  // Calculate weekly growth rate
  let weeklyGrowthRates: number[] = [];
  for (let i = 1; i < weeklyTotals.length; i++) {
    const growthRate =
      ((weeklyTotals[i] - weeklyTotals[i - 1]) / weeklyTotals[i - 1]) * 100;
    weeklyGrowthRates.push(growthRate);
  }

  // Average weekly growth rate
  const averageWeeklyGrowthRate = roundANumber(
    weeklyGrowthRates.reduce((sum, rate) => sum + rate, 0) /
      weeklyGrowthRates.length
  );

  return {
    averageValue,
    averageWeeklyGrowthRate,
  };
}
