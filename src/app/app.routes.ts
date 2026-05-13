import { Routes } from '@angular/router';
import { SummaryComponent } from './components/summary/summary.component';
import { ContactInfoComponent } from './components/contact-info/contact-info.component';
import { SkillsComponent } from './components/skills/skills.component';
import { AboutMeComponent } from './components/about-me/about-me.component';

export const routes: Routes = [
    { path: '', component: SummaryComponent },
    { path: 'skills',  component: SkillsComponent},
    { path: 'aboutme',  component: AboutMeComponent},
    // { path: 'experience',  },
    // { path: 'projects',  },
    { path: 'contact',  component: ContactInfoComponent},
];
