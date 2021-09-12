
import { props } from 'bluebird';
import './Chart.css' ;

import ChartBar from './ChartBar' ;


function Chart(props) {
    const values = props.dataPoints.map(dataPoint => dataPoint.value);
    const max = Math.max(...values);

    return(
        <div className="chart">
            {props.dataPoints.map(dataPoint => <ChartBar key={dataPoint.label} value={dataPoint.value} maxValue={max} label={dataPoint.label}/>)}
        </div>
    ) ;

} 



export default Chart ;          