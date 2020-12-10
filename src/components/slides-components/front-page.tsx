import React, { useEffect } from 'react';
import { Heading } from 'spectacle';
import styled from 'styled-components';
import GALogo from '../icons/logo';
import { useDispatch, useSelector } from 'react-redux';
import { getWeek, goToWeek, printSlides } from '../../redux/slides/actions';
import { selectSlides, setThemeColor } from '../../redux/slides/slice';
import colors from '../../styles/colors';

const { gaRed } = colors;

interface FrontPageProps {
  title: string;
}

const FrontPageWrapper = styled.section`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  background-color: ${gaRed};

  button {
    appearance: none;
    position: absolute;
    top: 0;
    border: none;
    background-color: transparent;
    border-bottom: 2px solid ${gaRed};
    padding-left: 0;
    padding-right: 0;
    transition: 0.1s ease-in all;
    &:focus,
    &:active {
      border-color: black;
    }

    &.print {
      right: 0;
    }

    &.back {
      left: 0;
    }
  }

  picture {
    max-width: 50%;
    margin: 0 auto;
  }

  [font-size='h1'] {
    text-align: center;
  }
`;

const FrontPage: React.FC<FrontPageProps> = ({ title }) => {
  const dispatch = useDispatch();

  const { isPrintMode, weekNumber } = useSelector(selectSlides);

  useEffect(() => {
    dispatch(getWeek());
    dispatch(setThemeColor(gaRed));
  }, [dispatch]);

  const handlePrintSlides = (event: React.MouseEvent) => {
    event.preventDefault();
    dispatch(printSlides());
  };

  const handleBackToWeek = (event: React.MouseEvent) => {
    event.preventDefault();
    dispatch(goToWeek(weekNumber));
  };

  return (
    <FrontPageWrapper>
      {!isPrintMode && (
        <button onClick={handleBackToWeek} className="back">
          back to week {weekNumber}
        </button>
      )}
      {!isPrintMode && (
        <button onClick={handlePrintSlides} className="print">
          print slides
        </button>
      )}
      <picture>
        <GALogo />
      </picture>
      <Heading>{title}</Heading>
    </FrontPageWrapper>
  );
};

export default FrontPage;
