import styles from './Chart'

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className={styles.customTooltip}>
        <p className={styles.tooltipLabel}>{label}</p>
        {payload.map((entry, index) => (
          <div key={index} className={styles.tooltipData}>
            <span style={{ color: entry.stroke }}>{entry.name}:</span>
            <span>${entry.value.toLocaleString()}</span>
          </div>
        ))}
      </div>
    )
  }
  return null
}

export default CustomTooltip