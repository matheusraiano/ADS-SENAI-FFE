
import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

export default function GraficoProducao({ dados }) {
  const canvasRef = useRef(null);
  const chartRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current || dados.length === 0) {
      chartRef.current?.destroy();
      chartRef.current = null;
      return;
    }

    chartRef.current?.destroy();

    chartRef.current = new Chart(canvasRef.current, {
      type: "line",
      data: {
        labels: dados.map((d) => d.dia),
        datasets: [
          {
            label: "Unidades",
            data: dados.map((d) => d.unidades),
            borderColor: "#0d6efd",
            backgroundColor: "rgba(13, 110, 253, 0.15)",
            fill: true,
            tension: 0.25,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
      },
    });

    return () => {
      chartRef.current?.destroy();
      chartRef.current = null;
    };
  }, [dados]);

  return (
    <canvas
      ref={canvasRef}
      aria-label="Produção por dia"
      role="img"
    />
  );
}
