import { Chart as ChartJS, ArcElement, Tooltip, Legend, ChartTypeRegistry } from 'chart.js';
import { ForwardedRef, forwardRef, useEffect, useRef } from 'react';
import { Pie, Chart as ChartJSType } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

interface ChartProps {
  onImageSet: (link: string) => void;
}

const Chart = (props: ChartProps) => {
  const pieRef = useRef<ChartJS<'pie', number[], string>>(null);
  return (
    <Pie data={data} ref={pieRef}
      options={{
        animation: {
          onComplete: () => props.onImageSet(`${pieRef.current?.toBase64Image()}`),
        }
      }} 
    />
  );
};

export default Chart;
