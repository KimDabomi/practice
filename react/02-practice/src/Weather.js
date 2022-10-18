import React from 'react';
import {useParams} from 'react-router-dom';

const Weather = () => {
    console.clear();

    const params = useParams();
    console.debug(params);

    const weather = {
        item: [
            {id: "mon", am: "맑음", pm: "맑음"},
            {id: "tue", am: "비", pm: "맑음"},
            {id: "wed", am: "맑음", pm: "흐림"},
            {id: "thu", am: "맑음", pm: "흐림"},
            {id: "fri", am: "흐림", pm: "흐림"},
            {id: "sat", am: "비", pm: "맑음"},
            {id: "sun", am: "맑음", pm: "맑음"}
        ]
    };

    const id = params.id;
    console.log(id);

    let weatherItem = weather.item.find((v,i) => v.id === id);

    if (!weatherItem) {
        return (<h2>존재하지 않는 데이터에 대한 요청입니다.</h2>);
    }
    
    return (
        <div>
            <h2>오전</h2>
            <p>{weatherItem.am}</p>
            <h2>오후</h2>
            <p>{weatherItem.pm}</p>
        </div>
    );
};

export default Weather;