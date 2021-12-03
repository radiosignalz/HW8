

import {getRandomCoffees} from "../../store/coffees/action";
import {coffeesSelectors} from "../../store/coffees/selector";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {Button, Stack} from "react-bootstrap";
import { Error } from "../../components/Error";
import { Loader } from "../../components/Loader";
import { List } from "../../components/List";


export const Coffees = () => {

    const data=useSelector(coffeesSelectors.getCoffeesData);
   const isError=useSelector(coffeesSelectors.getCoffeesError);
   const isLoading=useSelector(coffeesSelectors.getCoffeesLoading);
    const dispatch=useDispatch()

    const getData = () => {
        dispatch(getRandomCoffees);
    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <Stack gap={3}>
            <h1>HW8</h1>

            <Button onClick={getData}>Recall effect</Button>

            {
                isLoading &&
                <Loader />
            }

            {
                isError &&
                <Error reload={getData} />
            }
            {
                !isLoading && data.length > 0 &&
                <List  list={data} />
            }
        </Stack>
    );
};
