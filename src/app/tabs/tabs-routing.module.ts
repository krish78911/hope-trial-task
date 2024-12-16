import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'challenges',
        loadChildren: () => import('../challenges-tab/challenges.module').then(m => m.ChallengesPageModule)
      },
      {
        path: 'results',
        loadChildren: () => import('../results-tab/results.module').then(m => m.ResultsPageModule)
      },
      {
        path: 'info',
        loadChildren: () => import('../info-tab/info.module').then(m => m.InfoPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/challenges',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/challenges',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
