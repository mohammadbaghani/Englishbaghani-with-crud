


import React from 'react';
import Features from './Feature'
import Chart from './Chart'
import WidgetSm from './widgetSm'
import WidgetLg from './WidgetLg'
import { xAxisData } from './datas';

import './Home.css'

export default function Home() {
  return (
    <div className="home">
      <Features />
      
      <Chart grid title="محبوب ترین دوره های پردیسان در ده سال گذشته" data={xAxisData} dataKey="فروش" />


     
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  )
}