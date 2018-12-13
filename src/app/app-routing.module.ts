import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './components/user/user.component';
import { DetailsComponent } from './components/details/details.component';
import { PostsComponent } from './components/posts/posts.component';

const routes: Routes = [
    {
        path: '',
        component: UserComponent
    },
    {
        path: 'details/:id',
        component: DetailsComponent
    },
    {
        path: 'posts',
        component: PostsComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }