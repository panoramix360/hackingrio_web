export const OPTIONS_GRAPH = {
    scales: {
        yAxes: [
            {
                scaleLabel: {
                    display: true,
                    labelString: "Wh"
                },
                stacked: true,
                position: "left",
                ticks: {
                    stepSize: 10
                }
            }
        ]
    },
    xAxes: [
        {
            id: "bottom-x-axis",
            type: "linear",
            position: "left"
        }
    ],
    legend: {
        position: "bottom",
        labels: {
            fontSize: 18,
            fontColor: "#1C5168",
            fontStyle: "bold",
            boxWidth: 60
        }
    },
    elements: {
        point: {
            radius: 4
        }
    }
};

export const OPTIONS_GRAPH_WITH_MULTIAXIS = {
    scales: {
        yAxes: [
            {
                id: "y-corrente",
                scaleLabel: {
                    display: true,
                    labelString: "A"
                },
                stacked: true,
                position: "left",
                ticks: {
                    stepSize: 10
                }
            },
            {
                id: "y-tensao",
                scaleLabel: {
                    display: true,
                    labelString: "V"
                },
                stacked: false,
                position: "left",
                ticks: {
                    stepSize: 12
                }
            }
        ]
    },
    xAxes: [
        {
            id: "bottom-x-axis",
            type: "linear",
            position: "left"
        }
    ],
    legend: {
        position: "bottom",
        labels: {
            fontSize: 18,
            fontColor: "#1C5168",
            fontStyle: "bold",
            boxWidth: 60
        }
    },
    elements: {
        point: {
            radius: 4
        }
    }
};
