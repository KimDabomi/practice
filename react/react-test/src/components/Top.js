import React, { memo,useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQueryString } from '../hooks/useQueryString';

const Top = memo(() => {
    // 페이지 강제 이동을 처리하기 위한 navigate함수 생성
    const navigate = useNavigate();

    const {gte,lte} = useQueryString();

    // 검색 이벤트
    const onSearchSubmit = useCallback(e => {
        e.preventDefault();

        const current = e.currentTarget;
        const gte = current.gte.value;
        const lte = current.lte.value;

        console.log(gte);
        console.log(lte);

        let currentURL = gte && lte ? `/covid19/confirmed?gte=${gte}&lte=${lte}` : '/';
        console.log(currentURL);
        navigate(currentURL);
    },[navigate]);

    return (
        <div>
            <form onSubmit={onSearchSubmit}>
                <label htmlFor='input'>
                    <input type='date' name='gte' defaultValue={gte} min='2020-02-17' max='2022-05-31' />~
                    <input type='date' name='lte' defaultValue={lte} min='2020-02-17' max='2022-05-31' />
                </label>
                <button type='submit'>검색</button>
            </form>
        </div>
    );
});

export default Top;