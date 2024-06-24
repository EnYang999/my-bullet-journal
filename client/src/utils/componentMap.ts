export const componentMap: Record<string, () => Promise<{ default: React.ComponentType<any> }>> = {
  'january/week1': () => import('../components/January/week1'),
  'january/week2': () => import('../components/January/week2'),
  'january/week3': () => import('../components/January/week3'),


  'march/week1': () => import('../components/March/week1'),
  'march/week2': () => import('../components/March/week2'),
  'march/week3': () => import('../components/March/week3'),
  'march/week4': () => import('../components/March/week4'),
  'march/week5': () => import('../components/March/week5'),

  'april/week1': () => import('../components/April/week1'),
  'april/week2': () => import('../components/April/week2'),
  'april/week3': () => import('../components/April/week3'),
  'april/week4': () => import('../components/April/week4'),

  'may/week1': () => import('../components/May/week1'),
  'may/week2': () => import('../components/May/week2'),
  'may/week3': () => import('../components/May/week3'),
  'may/week4': () => import('../components/May/week4'),

  // June
  'june/week1': () => import('../components/June/week1'),
  'june/week2': () => import('../components/June/week2'),
  'june/week3': () => import('../components/June/week3'),
  'june/week4': () => import('../components/June/week4'),

// September
  'september/week1': () => import('../components/September/week1'),
  'september/week2': () => import('../components/September/week2'),
  'september/week3': () => import('../components/September/week3'),
  'september/week4': () => import('../components/September/week4'),

   // November
  'november/week1': () => import('../components/November/week1'),
  'november/week2': () => import('../components/November/week2'),
  
  'november/week4': () => import('../components/November/week4'),
  'november/week5': () => import('../components/November/week5'),
};