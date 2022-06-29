import { connect } from "react-redux";
import TabButton from "../TabButton/TabButton";
import s from "./Tabs.module.scss";
import * as actions from "../../store/actionCreators/actionCreators";

const NavBar = ({ activeSort, sortByPrice, sortByTime, sortByAverage }) => {
  const handleActiveButton = (sortAction) => {
    if (sortAction === "SORT_BY_PRICE") sortByPrice();
    if (sortAction === "SORT_BY_TIME") sortByTime();
    if (sortAction === "SORT_BY_AVERAGE") sortByAverage();
  };

  return (
    <div className={s.container}>
      <TabButton
        id={"SORT_BY_PRICE"}
        handleActiveButton={() => handleActiveButton("SORT_BY_PRICE")}
        activeSort={activeSort}
        text="САМЫЙ ДЕШЕВЫЙ"
      />
      <TabButton
        id={"SORT_BY_TIME"}
        handleActiveButton={() => handleActiveButton("SORT_BY_TIME")}
        activeSort={activeSort}
        text="САМЫЙ БЫСТРЫЙ"
      />
      <TabButton
        id={"SORT_BY_AVERAGE"}
        handleActiveButton={() => handleActiveButton("SORT_BY_AVERAGE")}
        activeSort={activeSort}
        text="ОПТИМАЛЬНЫЙ"
      />
    </div>
  );
};
const mapStateToProps = (store) => {
  return {
    activeSort: store.activeSort,
  };
};
export default connect(mapStateToProps, actions)(NavBar);
