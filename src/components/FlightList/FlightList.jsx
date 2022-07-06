import React, { useEffect } from "react";
import FlightCard from "../FlightCard/FlightCard";
import { connect } from "react-redux";
import * as actions from "../../store/actionCreators/actionCreators";
import { v4 as uuidv4 } from "uuid";
import ButtonShowAll from "../ButtonShowAll/ButtonShowAll";
import Spinner from "../Spinner/Spinner";
import NotFoundAlert from "../NotFoundAlert/NotFoundAlert";
const FlightList = ({
  ticketFetchDate,
  tickets,
  displayedTickets,
  buttonShowAll,
  activeSort,
  filters,
  stopReceiv,
}) => {
  useEffect(() => {
    // получаем билеты от сервера
    // ticketFetchDate();

    for (let i = 0; i < 5; i++) {
      console.log("stopReceiv", stopReceiv);
      ticketFetchDate();
    }
  }, []);

  // если список тикетов пустой, то делаем возврат
  if (!tickets) return null;

  // будем фильтровать и сортировать новый массив по установленным фильтрам
  let filterTicketList = [...tickets];

  // функция увеличивает кол-во отображаемых билетов
  const numDisplayTickets = () => buttonShowAll();

  // фильтруем массив
  // создадим массив с выбранными фильтрами
  let selectedFilters = [10];

  for (let filterName in filters) {
    // сопоставим фильтры со значениями и запушим их в массив
    if (filters["allTranfsers"]) selectedFilters.push(10);
    if (filters["noTransfers"]) selectedFilters.push(0);
    if (filters["oneTransfer"]) selectedFilters.push(1);
    if (filters["twoTransfer"]) selectedFilters.push(2);
    if (filters["threeTransfer"]) selectedFilters.push(3);
  }
  // оставим в массиве только уникальные значения
  selectedFilters = new Set([...selectedFilters]);
  selectedFilters = [...selectedFilters];

  // сортируем новый массив в зависимости от displayedTickets
  switch (activeSort) {
    case "SORT_BY_PRICE":
      filterTicketList.sort((a, b) => (a.price > b.price ? 1 : -1));
      break;
    case "SORT_BY_TIME":
      filterTicketList.sort((a, b) => {
        // найдем общее количество минут перелета
        const aSumDuration = a.segments[0].duration + a.segments[1].duration;
        const bSumDuration = b.segments[0].duration + b.segments[1].duration;
        return aSumDuration > bSumDuration ? 1 : -1;
      });
      break;
    case "SORT_BY_AVERAGE":
      filterTicketList.sort((a, b) => {
        // найдем общее количество минут перелета
        const aSumDuration = a.segments[0].duration + a.segments[1].duration;
        const bSumDuration = b.segments[0].duration + b.segments[1].duration;
        // определим оптимальный билет исходя из длительности перелета и стоимости
        return aSumDuration + a.price > bSumDuration + b.price ? 1 : -1;
      });
      break;
    default:
      return filterTicketList;
  }

  // фильтруем массив в зависимости от количества пересадок
  filterTicketList = filterTicketList.filter((ticket) => {
    // найдем общее количество пересадок в каждом билете
    const ticketTransfersCount =
      ticket.segments[0].stops.length + ticket.segments[1].stops.length;
    // возвращаем, если совпадают фильтры
    return selectedFilters.includes(ticketTransfersCount);
  });
  console.log("filterTicketList", filterTicketList);
  const alert = !filterTicketList.length ? (
    <NotFoundAlert />
  ) : (
    <ButtonShowAll handleButton={numDisplayTickets} />
  );

  const renderTickets = filterTicketList
    // обрезаем массив до значения displayedTickets, которое увеличиваем через экшен buttonShowAll
    .slice(0, displayedTickets)
    .map((ticket) => {
      return <FlightCard key={uuidv4()} ticketProps={ticket} />;
    });

  return (
    <>
      {!stopReceiv ? <Spinner /> : null}
      {renderTickets}
      {alert}
    </>
  );
};

const mapStateToProps = (store) => {
  const {
    tickets: { tickets },
    activeSort,
  } = store;

  return {
    tickets,
    displayedTickets: store.displayedTickets,
    activeSort,
    transferCounter: store.transferCounter,
    filters: store.filters,
    stopReceiv: store.stopReceiv,
  };
};

export default connect(mapStateToProps, actions)(FlightList);
