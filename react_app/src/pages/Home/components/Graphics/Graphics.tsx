import React from 'react'
import { GlobalSvgSelector } from '../../../../assets/images/global/GlobalSvgSelector'

import { ResponsiveBar } from '@nivo/bar'

import _s from './Graphics.module.scss'

interface Props {}

const data = [
  {
    wind: "Wind",
    speed: 20
  }
];

export const Graphics = () => {
  return (
    <div style={{height: 500, width: 400}}>
    <ResponsiveBar
      data={data}
      keys={["speed"]}
      indexBy="wind"
      margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
      maxValue={33}
      padding={0.4}
      valueScale={{ type: "linear" }}
      colors="#3182CE"
      animate={true}
      enableLabel={false}
      axisTop={null}
      axisRight={null}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "speed in m/s",
        legendPosition: "middle",
        legendOffset: -40
      }}
    />
    </div>
  );
};