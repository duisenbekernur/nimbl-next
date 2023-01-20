import React, { FC, useState } from 'react'
import dynamic from 'next/dynamic'
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false })
interface ChartData {
    series: {
        name: string
        data: number[]
        color: string
    }[]
    options: {
        chart: {
            type: 'area'
            color: string
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
                type: 'area',
                color: 'white',
            },
            xaxis: {
                categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
            },
        },
        series: [
            {
                name: 'series-1',
                data: [30, 40, 45, 60, 49, 110, 70, 40],
                color: 'red',
            },
        ],
    })
    return (
        <div>
            <Chart
                options={chartData.options}
                series={chartData.series}
                type="area"
                width="100%"
                height="auto"
            />
        </div>
    )
}

export default AreaChart
