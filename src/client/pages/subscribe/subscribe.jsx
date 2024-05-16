import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSubscribeUser, setSubscribeUser } from "../../../thunks/subscribeThunk";

const Subscribe = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const [subscribes, setSubscribes] = useState([]);

  useEffect(() => {
    getSubscribe();
  }, []);

  const getSubscribe = async () => {
    const responce = await dispatch(getSubscribeUser(auth.userData._id));
    // setSubscribes(responce.payload);
    };
    
    const showSubscribes = () => (
      <div>
        {subscribes.map((s) => (
          <div>
            <div>{s.user._id}</div>
                <div>{s.date}</div>
                <div>{s.summa}</div>
          </div>
        ))}
      </div>
    );

    const paySubscribe = async () => {
        // const responce = await dispatch(setSubscribeUser({ user_id: auth.userData._id, summa: 50 }));
        // // setSubscribes([...subscribes, responce.payload])
        // console.log(responce);
    }

  return (
    <div>
          <h1>My Subscribe</h1>
          
          {subscribes.length === 0 ? "No subcribes" : showSubscribes()}

          <button onClick={paySubscribe}>Pay</button>
    </div>
  );
};

export default Subscribe;