import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';
import spBannerImage from '../../assets/superGoatBanner.jpg';

const Styles = styled.div`
  .jumbo {
    background: url(${spBannerImage}) no-repeat fixed bottom;
    background-size: cover;
    color: #0C0608;
    height: 300px;
    position: relative;
    z-index: -2;
  }
  .overlay {
    background-color: #000;
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  }
`;

export const Jumbotron = () => (
  <Styles>
    <Jumbo fluid className="jumbo">
      <div className="overlay"></div>
      <Container>
        <p>The Ultimate Sports Stat Tracker</p>
      </Container>
    </Jumbo>
  </Styles>
)