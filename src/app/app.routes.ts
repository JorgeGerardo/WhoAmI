import { Routes } from '@angular/router';
import { SummaryComponent } from './components/summary/summary.component';
import { ContactInfoComponent } from './components/contact-info/contact-info.component';
import { SkillsComponent } from './components/skills/skills.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { CareerComponent } from './components/career/career.component';
import { ProjectsComponent } from './components/projects/projects.component';

export const routes: Routes = [
    { path: '', component: SummaryComponent },
    { path: 'skills',  component: SkillsComponent},
    { path: 'aboutme',  component: AboutMeComponent},
    { path: 'career',  component: CareerComponent},
    { path: 'projects',  component: ProjectsComponent},
    { path: 'contact',  component: ContactInfoComponent},
];
