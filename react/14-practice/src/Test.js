import React,{memo,useEffect} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import {getList,getItem,postItem,putItem,deleteItem} from './slices/DepartmentSlice';

const Test = memo(() => {
    const dispatch = useDispatch();
    const {data,loading,error} = useSelector((state) => state.DepartmentSlice);

    useEffect(() => {
        dispatch(getList());

        // dispatch(getItem({id:101}));
        // dispatch(postItem({dname:'react.js',loc:'1403'}));
        // dispatch(putItem({id:203,dname:'react.edit',loc:'1406'}));
        // dispatch(deleteItem({id:203}));
    },[dispatch]);
    
    return (
        loading ? 'loading...' : (
            error ? JSON.stringify(error) : (
                <>
                    {JSON.stringify(data)}
                </>
            )
        )
    );
});

export default Test;