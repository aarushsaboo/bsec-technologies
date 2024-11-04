import styles from './Chart.module.css'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"
import CustomTooltip from './CustomTooltip'

const Chart = ({data}) => {
    return (
      <div className={styles.chartContainer}>
        <ResponsiveContainer>
          <LineChart
            data={data}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 10,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip content={<CustomTooltip />} />
            <Legend />
            <Line
              type="monotone"
              dataKey="Ubona"
              stroke="#8884d8"
              className={styles.ubonaLine}
              strokeWidth={2}
              // Regular data points
              dot={{
                r: 4, // radius of the dot
                strokeWidth: 2, // border width
                stroke: "#8884d8", // border color
                fill: "white", // fill color
              }}
              // Hovered data points
              activeDot={{
                r: 6, // radius when active (bigger)
                stroke: "#8884d8", // border color
                strokeWidth: 2, // border width
                fill: "#8884d8", // fill color when active
              }}
            />
            <Line
              type="monotone"
              dataKey="WolfX"
              stroke="#82ca9d"
              className={styles.wolfXLine}
              strokeWidth={2}
              dot={{ r: 4, strokeWidth: 2, stroke: "#82ca9d", fill: "white" }}
              activeDot={{
                r: 6,
                stroke: "#82ca9d",
                strokeWidth: 2,
                fill: "#82ca9d",
              }}
            />
            <Line
              type="monotone"
              dataKey="LyondellBasell"
              stroke="#ffc658"
              className={styles.lyondellLine}
              strokeWidth={2}
              dot={{ r: 4, strokeWidth: 2, stroke: "#ffc658", fill: "white" }}
              activeDot={{
                r: 6,
                stroke: "#ffc658",
                strokeWidth: 2,
                fill: "#ffc658",
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    )
}

export default Chart