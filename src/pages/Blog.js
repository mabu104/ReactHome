import React from "react";
import {
  Chart as ChartJS,ArcElement, Tooltip,
  CategoryScale,
  LinearScale,
  BarElement,
  Legend,
  Title
} from 'chart.js';
import { Bar, Doughnut } from "react-chartjs-2";
import { View } from "react-native";
ChartJS.register(ArcElement, Tooltip, CategoryScale,
  LinearScale,
  BarElement,
  Legend,
  Title
);



export const Blog = () => {

  return (
    <View style={{ alignItems: 'center', }}>
      <View style={{ width: 500 }}>
        <Doughnut
          data={{
            labels: [
              "Africa",
              "Asia",
              "Europe",
              "Latin America",
              "North America"
            ],
            datasets: [
              {
                label: "Population (millions)",
                backgroundColor: [
                  "#3e95cd",
                  "#8e5ea2",
                  "#3cba9f",
                  "#e8c3b9",
                  "#c45850"
                ],
                data: [2478, 5267, 734, 784, 433]
              }
            ]
          }}
          option={{
            // maintainAspectRatio: false,
            // scales: {
            //   yAxes: [
            //     {
            //       ticks: {
            //         beginAtZero: true,
            //       },
            //     },
            //   ],
            // },
            title: {
              display: true,
              text: "Predicted world population (millions) in 2050"
            }
          }}
        />
      </View>
      <View>
        <Bar
          data={{
            labels: [
              "Africa",
              "Asia",
              "Europe",
              "Latin America",
              "North America"
            ],
            datasets: [
              
              {
                label:'',
                backgroundColor: [
                  "rgba(0,0,255,0.5)"
                ],
                data: [2478, 5267, 734, 784, 433]
              },

            ]
          }}
          height={400}
          width={600}

          options={{
            responsive: false,
            legend: { display: false },
            title: {
              display: false,
            }
          }}
        />
      </View>
    </View>

  );
};
