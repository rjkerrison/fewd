import React from 'react';
import styled from 'styled-components';
import { Link, withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  closeBonusLessonMenu,
  closeWeekMenu,
  openBonusLessonMenu,
  openWeekMenu,
  selectNavigationMenu,
  openMobileMenu,
} from '../redux/navigation-menu';
import GALogoTextWhite from './icons/ga-text-white';
import { bonusLessonRoutes } from '../routes/config';

const StyledHeader = styled.header`
  padding: 1.25rem;
  background-color: black;

  display: flex;
  justify-content: space-between;
  align-items: center;

  picture {
    max-width: 12.5%;
    min-width: 100px;
  }

  ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  nav > ul {
    display: flex;
    position: relative;
  }

  ul a {
    color: white;
    text-decoration: none;
    border-bottom: none;
    &:hover {
      border-bottom: 2px solid red;
    }
  }

  button {
    appearance: none;
    background-color: black;
    border: none;
    color: white;
    margin-bottom: 0.75rem;
    padding: 0;
  }

  nav > ul > li {
    margin-left: 1.25rem;
    &:first-of-type > ul > li {
      background-color: black;
      padding: 0.75rem 0.5rem;
    }
  }

  nav > ul li ul {
    position: absolute;
    display: none;
  }

  nav > ul li ul.menu-open {
    display: block;
  }

  & > button {
    display: none;
    text-decoration: underline 2px var(--ga-red);
    text-underline-offset: 2px;

    &:hover {
      color: rgba(255, 255, 255, 0.75);
    }

    &:focus,
    &:active {
      color: rgba(255, 255, 255, 0.5);
      text-decoration: underline 2px rgba(255, 0, 0, 0.5);
    }
  }

  @media screen and (max-width: 600px) {
    & > button {
      display: block;
    }

    nav {
      display: none;
    }
  }
`;

const weeksIterator = new Array(10).fill('week');

const Weeks: React.FC = () => {
  const { weekIsOpen } = useSelector(selectNavigationMenu);
  const dispatch = useDispatch();

  const close = (event: React.MouseEvent) => {
    dispatch(closeWeekMenu());
    dispatch(closeWeekMenu());
    dispatch(closeBonusLessonMenu());
  };

  return (
    <ul className={weekIsOpen ? 'menu-open' : ''} onMouseLeave={close}>
      {weeksIterator.map((week, i) => (
        <li key={i}>
          <Link to={`${week}-${i + 1}`}>
            <span onClick={close}>
              {week} {i + 1}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

const gridsPath = bonusLessonRoutes[0].path;

const bonusLessons = [['Grids', gridsPath]];

const BonusLessons: React.FC = () => {
  const { bonusLessonsIsOpen } = useSelector(selectNavigationMenu);
  const dispatch = useDispatch();

  const close = (event: React.MouseEvent) => {
    dispatch(closeWeekMenu());
    dispatch(closeBonusLessonMenu());
  };

  return (
    <ul className={bonusLessonsIsOpen ? 'menu-open' : ''} onMouseLeave={close}>
      {bonusLessons.map((week, i) => {
        const [name, path] = week;
        return (
          <li key={i}>
            <Link to={path}>
              <span onClick={close}>{name}</span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

const Header: React.FC = () => {
  const dispatch = useDispatch();

  const dispatchClose = () => {
    dispatch(closeWeekMenu());
    dispatch(closeBonusLessonMenu());
  };

  const close = (event: React.MouseEvent) => {
    dispatchClose();
  };

  const handleWeeksOnMouseEnter = (event: React.MouseEvent) => {
    dispatchClose();
    dispatch(openWeekMenu());
  };

  const handleOnBonusLessonsMouseEnter = (event: React.MouseEvent) => {
    dispatchClose();
    dispatch(openBonusLessonMenu());
  };

  const handleOnOpenMobileMenuClick = (event: React.MouseEvent) => {
    dispatch(openMobileMenu());
  };

  return (
    <StyledHeader>
      <picture>
        <Link to="/">
          <GALogoTextWhite />
        </Link>
      </picture>
      <nav onMouseLeave={close}>
        <ul>
          <li>
            <button onMouseEnter={handleWeeksOnMouseEnter}>Weeks</button>
            <Weeks />
          </li>
          <li>
            <button onMouseEnter={handleOnBonusLessonsMouseEnter}>
              Bonus lessons
            </button>
            <BonusLessons />
          </li>
          <li>
            <Link to="/final-project-brief">Final project</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      <button onClick={handleOnOpenMobileMenuClick}>Menu</button>
    </StyledHeader>
  );
};

export default withRouter(Header);
