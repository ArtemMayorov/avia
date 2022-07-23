import React, { useEffect } from 'react';
import FlightCard from '../FlightCard/FlightCard';
import { connect } from 'react-redux';
import * as actions from '../../store/actionCreators/actionCreators';
import { v4 as uuidv4 } from 'uuid';
import ButtonShowAll from '../ButtonShowAll/ButtonShowAll';
import Spinner from '../Spinner/Spinner';
import NotFoundAlert from '../NotFoundAlert/NotFoundAlert';
import { countSum, uniqueizeArray } from '../../helpers/FlightHelpers';

const FlightList = ({ getTicketDate, tickets, displayedTickets, buttonShowAll, activeSort, filters, stopReceiv }) => {
  useEffect(() => {
    getTicketDate();
  }, []);

  if (!tickets) return null;

  let filterTicketList = [...tickets];

  const numDisplayTickets = () => buttonShowAll();

  let selectedFilters = [10];

  for (let filterName in filters) {
    if (filters['allTranfsers']) selectedFilters.push(10);
    if (filters['noTransfers']) selectedFilters.push(0);
    if (filters['oneTransfer']) selectedFilters.push(1);
    if (filters['twoTransfer']) selectedFilters.push(2);
    if (filters['threeTransfer']) selectedFilters.push(3);
  }
  selectedFilters = uniqueizeArray(selectedFilters);

  switch (activeSort) {
    case 'SORT_BY_PRICE':
      filterTicketList.sort((a, b) => (a.price > b.price ? 1 : -1));
      break;
    case 'SORT_BY_TIME':
      filterTicketList.sort((a, b) => {
        const aSumDuration = countSum(a.segments[0].duration, a.segments[1].duration);
        const bSumDuration = countSum(b.segments[0].duration, b.segments[1].duration);
        return aSumDuration > bSumDuration ? 1 : -1;
      });
      break;
    case 'SORT_BY_AVERAGE':
      filterTicketList.sort((a, b) => {
        const aSumDuration = countSum(a.segments[0].duration, a.segments[1].duration);
        const bSumDuration = countSum(b.segments[0].duration, b.segments[1].duration);
        return countSum(aSumDuration, a.price) > countSum(bSumDuration, b.price) ? 1 : -1;
      });
      break;
    default:
      return filterTicketList;
  }

  filterTicketList = filterTicketList.filter((ticket) => {
    const ticketTransfersCount = countSum(ticket.segments[0].stops.length, ticket.segments[1].stops.length);
    return selectedFilters.includes(ticketTransfersCount);
  });
  const alert = !filterTicketList.length ? <NotFoundAlert /> : <ButtonShowAll handleButton={numDisplayTickets} />;

  const renderTickets = filterTicketList.slice(0, displayedTickets).map((ticket) => {
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

const mapStateToProps = ({ ticketsReducer, sortReducer, filterReducer }) => {
  const {
    tickets: { tickets },
    activeSort,
  } = ticketsReducer;

  return {
    tickets,
    displayedTickets: ticketsReducer.displayedTickets,
    activeSort: sortReducer.activeSort,
    transferCounter: ticketsReducer.transferCounter,
    filters: filterReducer.filters,
    stopReceiv: ticketsReducer.stopReceiv,
  };
};

export default connect(mapStateToProps, actions)(FlightList);
