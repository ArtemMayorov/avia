import React, { useEffect } from "react";
import FlightCard from "../FlightCard/FlightCard";
import { connect } from "react-redux";
import * as actions from "../../store/actionCreators/actionCreators";
import { v4 as uuidv4 } from "uuid";
import ButtonShowAll from "../ButtonShowAll/ButtonShowAll";

const FlightList = ({
  ticketFetchDate,
  tickets,
  displayedTickets,
  buttonShowAll,
  activeSort,
  transferCounter,
}) => {
  console.log("displayedTickets", displayedTickets);
  useEffect(() => {
    // получаем билеты от сервера
    ticketFetchDate();
  }, []);

  // если список тикетов пустой, то делаем возврат !Изменить на загрузку!
  if (!tickets) return;

  // будем фильтровать и сортировать новый массив по установленным фильтрам
  let filterTicketList = [...tickets];

  // функция увеличивает кол-во отображаемых билетов
  const numDisplayTickets = () => buttonShowAll();

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
    return ticketTransfersCount === transferCounter;
  });

  console.log("filterTicketList", filterTicketList);
  const renderTickets = filterTicketList
    // обрезаем массив до значения displayedTickets, которое увеличиваем через экшен buttonShowAll
    .slice(0, displayedTickets)
    .map((ticket) => {
      return <FlightCard key={uuidv4()} ticketProps={ticket} />;
    });

  return (
    <>
      {renderTickets}
      <ButtonShowAll handleButton={numDisplayTickets} />
    </>
  );
  // console.log("filterTicketList", filterTicketList);
  // if (!filterTicketList) return;

  // return filterTicketList.slice(0, displayedTickets).map((ticket) => {
  //   return <FlightCard key={uuidv4()} ticketProps={ticket} />;
  // });

  // if (tickets) {
  //   let testTickets = [];
  //   for (let i = 0; i < 3; i++) {
  //     const ticket = tickets[i];
  //     testTickets.push(ticket);
  //   }
  //   return testTickets.map((ticket) => {
  //     return <FlightCard key={uuidv4()} ticketProps={ticket} />;
  //   });
  // }

  // ----------------------
  // return tickets.map((ticket) => {
  //   return <FlightCard key={uuidv4()} ticketProps={ticket} />;
  // });

  // return <FlightCard />;
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
  };
};

export default connect(mapStateToProps, actions)(FlightList);
