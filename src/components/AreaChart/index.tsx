import React, { FC, useState } from 'react'
import dynamic from 'next/dynamic'
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false })
interface ChartData {
    series: {
        name: string
        data: number[]
    }[]
    options: {
        chart: {
            id: string
        }
        xaxis: {
            categories: number[]
        }
    }
}

const AreaChart: FC = () => {
    const [chartData, setChartData] = useState<ChartData>({
        options: {
            chart: {
                id: 'basic-bar',
            },
            xaxis: {
                categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
            },
        },
        series: [
            {
                name: 'series-1',
                data: [30, 40, 45, 50, 49, 60, 70, 91],
            },
        ],
    })
    return (
        <div>
            <Chart
                options={chartData.options}
                series={chartData.series}
                type="bar"
                width="500"
            />
        </div>
    )
}

export default AreaChart
