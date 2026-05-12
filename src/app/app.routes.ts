import { Routes } from '@angular/router';
import { SummaryComponent } from './components/summary/summary.component';
import { ContactInfoComponent } from './components/contact-info/contact-info.component';
import { SkillsComponent } from './components/skills/skills.component';

export const routes: Routes = [
    { path: '', component: SummaryComponent },
    { path: 'skills',  component: SkillsComponent},
    // { path: 'experience',  },
    // { path: 'projects',  },
    { path: 'contact',  component: ContactInfoComponent},
];
