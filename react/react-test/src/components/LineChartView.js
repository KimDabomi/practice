import React, { memo } from 'react';
import {Chart,CategoryScale,LinearScale,Title,Tooltip,Legend,LineElement,PointElement} from 'chart.js';
import {Line} from 'react-chartjs-2';
import styled from 'styled-components';
import dayjs from 'dayjs';


Chart.register(
  CategoryScale,LinearScale,Title,Tooltip,Legend,LineElement,PointElement
);

const PlotContainer = styled.div`
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  height: 600px;
`;

const LineChartView = memo((props) => {
  const days = props.covid19.map((v,i) => {
    return dayjs(v.date).format('MM-DD');
  });
  console.log(days);

  let labelName = null;
  let categoryData = null;

  if (props.category == 'confirmed') {
    categoryData = props.covid19.map((v,i) =>{
      labelName = '일일확진자(명)';
      return v.confirmed;
    });
  } else if (props.category == 'confirmed_acc') {
    labelName = '누적확진자(명)';
    categoryData = props.covid19.map((v,i) => {
      return v.confirmed_acc;
    });
  } else if (props.category == 'active') {
    labelName= '격리환자(명)';
    categoryData = props.covid19.map((v,i) => {
      return v.active;
    });
  } else if (props.category == 'released') {
    labelName = '격리해제(명)';
    categoryData = props.covid19.map((v,i) => {
      return v.released;
    });
  } else if (props.category == 'released_acc') {
    labelName = '누적격리해제(명)';
    categoryData = props.covid19.map((v,i) => {
      return v.released_acc;
    });
  } else if (props.category == 'death') {
    labelName = '사망자(명)';
    categoryData = props.covid19.map((v,i) => {
      return v.death;
    });
  } else if (props.category == 'death_acc') {
    labelName = '누적사망(명)';
    categoryData = props.covid19.map((v,i) => {
      return v.death_acc;
    });
  } else {
    labelName = '';
  }

  const defaultOption = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top'
      }
    }
  }

  const covid19 = {
    labels: days,
    datasets: [{
      label: labelName,
      data: categoryData,
      backgroundColor: 'rgba(255,99,132,0.5)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1
    }]
  };
    
  return (
    <PlotContainer>
      <Line options={defaultOption} data={covid19} />
    </PlotContainer>
  );
});

export default LineChartView;