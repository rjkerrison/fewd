import React, { lazy, Suspense } from 'react';
import SlidesDeck from '../components/slides-deck';
import Title from '../components/title';
import Loading from '../pages/loading';

// Lessons
// Path: week-n/lesson-n

const lessonsPerWeek = 3
const lessonToWeek = (n: number) => Math.floor((n - 1) / lessonsPerWeek) + 1
const lessonToPath = (n: number) => `/week-${lessonToWeek(n)}/lesson-${n}`

const lessonSlideDeckNames = [
  '01-orientation',
  '02-intro-to-html',
  '03-semantic-html-css'
]

const lessonRouteFrom = (slideDeckName: string, i: number) => {
  const path = lessonToPath(i + 1)
  return {
    path,
    component: () => (
      <>
        <Title week={lessonToWeek(i + 1)} lesson={i + 1} />
        <SlidesDeck slidesDeckName={slideDeckName} />
      </>
    ),
  }
}

export const lessonRoutes = lessonSlideDeckNames.map(lessonRouteFrom)

// Weeks
// Path: week-n
const weekRouteFor = (n: number) => {
  const path = `/week-${n}`
  return {
    path: path,
    component: () => {
      const Content = lazy(() => import(`../pages/weeks/${n}`));
      return (
        <>
          <Title week={n} />
          <Suspense fallback={<Loading />}>
            <Content />
          </Suspense>
        </>
      );
    },
  }
}

const numberOfWeeks = 26
export const weekRoutes = Array.from(Array(numberOfWeeks).keys()).map((i) => weekRouteFor(i + 1));

// Bonus lessons
// Path: /bonus-lessons/n
export const bonusLessonRoutes = [
  {
    path: '/bonus-lessons/grids',
    component: () => (
      <>
        <Title title="Bonus Lesson | Grids" />
        <SlidesDeck slidesDeckName="bonus-lesson-grids" />
      </>
    ),
  },
  {
    path: '/bonus-lessons/tables',
    component: () => (
      <>
        <Title title="Bonus Lesson | Tables" />
        <SlidesDeck slidesDeckName="bonus-lesson-tables" />
      </>
    ),
  },
  {
    path: '/bonus-lessons/javascript-history',
    component: () => (
      <>
        <Title title="Bonus Lesson | JavaScript history" />
        <SlidesDeck slidesDeckName="bonus-lesson-js-history" />
      </>
    ),
  },
];

// Final project
// Path: /final-project-brief

export const FinalProjectRoute = {
  path: '/final-project-brief',
  component: () => {
    const Content = lazy(() => import('../pages/final-project-brief'));
    return (
      <>
        <Title title="Final project brief" />
        <Suspense fallback={<Loading />}>
          <Content />
        </Suspense>
      </>
    );
  },
};

// Bonus lessons pags
// Path: //bonus-lessons
export const BonusLessonsRoute = {
  path: '/bonus-lessons',
  component: () => {
    const Content = lazy(() => import('../pages/bonus-lessons'));
    return (
      <>
        <Title title="Bonus Lessons" />
        <Suspense fallback={<Loading />}>
          <Content />
        </Suspense>
      </>
    );
  },
};
