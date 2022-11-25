import { React, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchItemList } from "../../redux/features/itemSlice";
import { ItemList } from "./ItemList";
import { MainItem } from "./MainItem";

function Main() {
  const dispatch = useDispatch();
  const selector = useSelector((state) => ({}));
  const [itemList, setItemList] = useState([]);
  const [mainItem, setMainItem] = useState({});

  useEffect(() => {
    async function fetchData() {
      dispatch(fetchItemList());
    }
    fetchData();
  }, [dispatch]);

  return (
    <div className="container px-4 px-lg-5">
      <MainItem />
      <ItemList />
    </div>
  );
}

export default Main;
