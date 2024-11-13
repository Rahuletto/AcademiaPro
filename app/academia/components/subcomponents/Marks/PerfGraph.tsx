import { useTheme } from "@/provider/ThemeProvider";
import { TestPerformance } from "@/types/Marks";
import dynamic from "next/dynamic";
import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
const MarkDisplay = dynamic(
  () => import("./MarkElement").then((a) => a.MarkDisplay),
  { ssr: false },
);

interface PerformanceChartProps {
  testPerformance: TestPerformance[];
}

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="flex min-w-[200px] flex-col justify-between rounded-lg bg-light-background-dark px-3 py-1 text-sm text-white shadow-lg dark:bg-dark-background-darker">
        <h3 className="font-semibold text-lg">{payload[0].payload.name}</h3>
        <div className="flex w-full items-center justify-between gap-6">
          <p className="font-semibold text-light-success-color dark:text-dark-success-color">
            {payload[0].payload.percentage.toFixed(1)}%
          </p>
          <MarkDisplay
            marks={{
              marks: payload[0].payload.scored,
              total: payload[0].payload.total,
            }}
          />
        </div>
      </div>
    );
  }
  return null;
};

const PerformanceChart: React.FC<PerformanceChartProps> = ({
  testPerformance,
}) => {
  const { isDark: isDarkMode } = useTheme();
  const data = testPerformance.map(({ test, marks }) => ({
    name: test,
    scored: marks.scored,
    total: marks.total,
    percentage: marks.scored
      ? (parseFloat(marks.scored) / parseFloat(marks.total)) * 100
      : 0,
  }));

  return (
    <div className="-mb-8 mt-2 lg:-mb-10">
      <ResponsiveContainer width="100%" height={200}>
        <AreaChart
          dataKey={"uv"}
          data={data}
          margin={{ top: 10, right: 10, left: 0, bottom: 10 }}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            stroke={isDarkMode ? "#444444c3" : "#ddd"}
          />

          <YAxis
            width={30}
            domain={[0, 100]}
            tick={{ fill: isDarkMode ? "#aaa" : "#555", fontSize: 12 }}
          />
          <XAxis
            dataKey="name"
            tick={{ fill: isDarkMode ? "#aaa" : "#555", fontSize: 12 }}
          />

          <Tooltip content={<CustomTooltip />} />

          <Area
            dot
            activeDot
            type="linear"
            dataKey="percentage"
            stroke={isDarkMode ? "#4a90e2" : "#1976D2"}
            fill={
              isDarkMode ? "rgba(74, 144, 226, 0.3)" : "rgba(0, 122, 204, 0.3)"
            }
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PerformanceChart;
