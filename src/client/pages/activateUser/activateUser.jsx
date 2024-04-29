import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { activate } from "../../../thunks/authThunk";

const ActivateUser = () => {
    let [searchParams, setSearchParams] = useSearchParams();
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        activateUser()
    }, [])

    const activateUser = async () => {
        await dispatch(activate({ email: searchParams.get("email") }));
        navigate('/login')
    }
    return (
        <div>
            Activated
        </div>
    );
}

export default ActivateUser;
