import { sortBooks } from "../redux/actions";
import { useDispatch } from "react-redux";
import { useState } from "react";

const SortSelector = () => {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "author", label: "Author" },
    { value: "title", label: "Title" },
    { value: "readingLevel", label: "Reading Level" },
  ];

  const dispatch = useDispatch();
  const [currentSortOrder, setCurrentSortOrder] = useState(sortOrders[0]);

  const handleSort = (criterion: string) => {
    const selectedOrder = sortOrders.find(order => order.value === criterion);
    if (selectedOrder) {
      setCurrentSortOrder(selectedOrder);
      dispatch(sortBooks(criterion));
    }
  };

  return (
    <div>
      <div>
        Order by: {currentSortOrder.label}
      </div>
      <div>
        {sortOrders.map((order) => (
          <button onClick={() => handleSort(order.value)} key={order.value}>
            {order.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SortSelector;
