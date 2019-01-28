import React from 'react';
import styled from 'styled-components';

import { Section, Container } from 'components/global';
import EventCard from 'common/EventCard';
import { COLOR } from 'constants';

import ETHParisIcon from 'static/icons/ETHParis.svg';

const UPCOMING_EVENTS = [
  {
    title: 'ETHDenver II',
    location: 'Denver, Colorado',
    dates: 'Feb 15-17, 2019',
    icon: ETHParisIcon,
    primaryColor: 'rgba(95,37,255,1)',
    href: 'https://ethdenver.com/',
  },
  {
    title: 'ETHParis',
    location: 'Paris, France',
    dates: 'Mar 8-10, 2019',
    icon: ETHParisIcon,
    primaryColor: 'rgba(95,37,255,1)',
    href: 'https://ethparis.com/',
  },
  {
    title: 'ETHCapeTown',
    location: 'Cape Town, South Africa',
    dates: 'Apr 19-20, 2019',
    icon: ETHParisIcon,
    primaryColor: 'rgba(95,37,255,1)',
    href: 'https://ethcapetown.com/',
  },
];

const Events = props => (
  <Section id="events" {...props} background={COLOR.blue.xlight}>
    <Container>
      <HeadingContainer>
        <h3>Events</h3>
        <h2>Upcoming Events</h2>
      </HeadingContainer>
      <CardGrid>
        {UPCOMING_EVENTS.map(event => (
          <EventCard key={event.title} {...event} />
        ))}
      </CardGrid>
      <h3 style={{ marginTop: 64, textAlign: 'center' }}>Past Events</h3>
      <CardGrid>
        {UPCOMING_EVENTS.map(event => (
          <EventCard key={event.title} {...event} inactive />
        ))}
        {UPCOMING_EVENTS.map(event => (
          <EventCard key={event.title} {...event} inactive />
        ))}
      </CardGrid>
    </Container>
  </Section>
);

const HeadingContainer = styled.div`
  text-align: center;
  margin-top: 16px;

  > h3 {
    color: ${COLOR.blue.regular};
  }

  > h2 {
    margin: 8px 0;
  }
`;

const CardGrid = styled.div`
  margin: 40px 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, 256px);
  justify-content: center;
  grid-gap: 24px;
`;

export default Events;