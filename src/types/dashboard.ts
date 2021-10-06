export interface DashboardProps {
  works: {
    title: string;
    count: number;
    countText: string;
    percentage: number;
  };
  analytics: DashboardProps['works'];
  statistics: DashboardProps['works'];
  tasks: DashboardProps['works'];
  task_activities: Array<{
    month: string;
    completed: number;
    received: number;
  }>;
  team_activities: Array<{
    month: string;
    act: number;
  }>;
}
