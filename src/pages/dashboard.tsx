/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextPage } from 'next';
import { createContext, useMemo } from 'react';

import { Container } from 'react-bootstrap';

import S from 'src/styles/pages/dashboard/index.module.scss';
import { AppHead } from 'src/components';
import {
  TopLeftSection,
  TopRightSection,
  BottomLeftSection,
  BottomRightSection
} from 'src/components/pages/dashboard';
import { DashboardProps } from 'src/types';

export const DashboardContext = createContext<DashboardProps>({} as any);

const Dashboard: NextPage<DashboardProps> = ({
  analytics,
  statistics,
  task_activities,
  team_activities,
  tasks,
  works
}) => {
  const dashboardContextValue = useMemo<DashboardProps>(
    () => ({
      analytics,
      statistics,
      task_activities,
      team_activities,
      tasks,
      works
    }),
    //eslint-disable-next-line
    []
  );

  return (
    <DashboardContext.Provider value={dashboardContextValue}>
      <AppHead title="Dashboard" />

      <Container as="main" fluid className={`${S.Dashboard}`}>
        <TopLeftSection />
        <TopRightSection />
        <BottomLeftSection />
        <BottomRightSection />
      </Container>
    </DashboardContext.Provider>
  );
};

Dashboard.getInitialProps = async () => {
  return {
    works: {
      title: 'Works',
      count: 75,
      countText: 'Works Today',
      percentage: 50
    },
    analytics: {
      title: 'Analytics',
      count: 310,
      countText: 'Analytics',
      percentage: 30
    },
    statistics: {
      title: 'Statistics',
      count: 75,
      countText: 'Works Today',
      percentage: 59
    },
    tasks: {
      title: 'Tasks',
      count: 15,
      countText: 'Tasks Today',
      percentage: 75
    },
    task_activities: [
      {
        month: 'Jan',
        completed: 50,
        received: 100
      },
      {
        month: 'Feb',
        completed: 90,
        received: 120
      },
      {
        month: 'Mar',
        completed: 110,
        received: 130
      },
      {
        month: 'Apr',
        completed: 100,
        received: 115
      },
      {
        month: 'May',
        completed: 45,
        received: 75
      },
      {
        month: 'Jun',
        completed: 90,
        received: 110
      }
    ],
    team_activities: [
      {
        month: 'Jan',
        act: 20
      },
      {
        month: 'Feb',
        act: 40
      },
      {
        month: 'Mar',
        act: 30
      },
      {
        month: 'Apr',
        act: 50
      },
      {
        month: 'May',
        act: 40
      },
      {
        month: 'Jun',
        act: 60
      }
    ]
  };
};

export default Dashboard;
