import { FC, useState } from 'react'
import dynamic from 'next/dynamic'
const ApexChartWithNoSSR = dynamic(() => import('react-apexcharts'), {
    ssr: false,
})
import { ApexOptions } from 'apexcharts'

type Props = {
    height: string
    width: string
}

function generateChartData() {
    var chartData = []
    var firstDate = new Date()
    firstDate.setDate(firstDate.getDate() - 180)
    firstDate.setHours(0, 0, 0, 0)
    var value = 1200
    for (var i = 0; i < 200; i++) {
        if (i % 2 === 0) continue
        var newDate = new Date(firstDate)
        newDate.setDate(newDate.getDate() + i)

        value += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10)
        var open = value + Math.round(Math.random() * 16 - 8)
        var low = Math.min(value, open) - Math.round(Math.random() * 5)
        var high = Math.max(value, open) + Math.round(Math.random() * 5)

        chartData.push({
            x: newDate.getTime(),
            y: [open, high, low, value],
        })
    }
    return chartData
}

const ChartTrending: FC<Props> = ({ height, width }) => {
    const [series, setSeries] = useState<ApexOptions['series']>([
        {
            data: generateChartData(),
        },
    ])
    const [options, setOptions] = useState<ApexOptions>({
        chart: {
            type: 'candlestick',
            toolbar: {
                show: true,
                tools: {
                    download: false,
                    selection: true,
                    zoom: true,
                    zoomin: true,
                    zoomout: true,
                    pan: false,
                    reset: false,
                },
            },
            zoom: {},
        },

        legend: {
            show: false,
        },
        xaxis: {
            type: 'datetime',
            tickPlacement: 'on',
            labels: {
                style: {
                    colors: 'rgba(143, 143, 143, 1)',
                    fontSize: '10px',
                    fontFamily: 'TT Octosquares',
                },
            },
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false,
            },
        },
        yaxis: {
            logarithmic: false,
            tickAmount: 4,
            decimalsInFloat: 0,
            forceNiceScale: true,

            tooltip: {
                enabled: true,
            },
            labels: {
                style: {
                    colors: 'rgba(143, 143, 143, 1)',
                    fontSize: '14px',
                    fontFamily: 'TT Octosquares',
                },
            },
        },
        plotOptions: {
            candlestick: {
                colors: {
                    upward: '#00EAF2',
                    downward: '#EA00D5',
                },
            },
        },
        tooltip: {
            theme: 'dark',
        },
        grid: {
            borderColor: '#2E3656',
            xaxis: {
                lines: {
                    show: false,
                },
            },
        },
    })

    return (
        <div>
            <ApexChartWithNoSSR
                height={height}
                width={width}
                type="candlestick"
                options={options}
                series={series}
            ></ApexChartWithNoSSR>
        </div>
    )
}

export default ChartTrending
