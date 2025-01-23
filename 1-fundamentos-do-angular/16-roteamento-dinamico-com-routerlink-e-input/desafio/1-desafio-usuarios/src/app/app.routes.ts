import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/users',
    pathMatch: 'full',
  },
  {
    path: 'users',
    loadComponent: () =>
      import('./components/users/users.component')
        .then(m => m.UsersComponent),
    title: 'Users',
  },
  {
    path: 'user/:userId',
    loadComponent: () =>
      import('./components/user-container/user-container.component')
        .then(m => m.UserContainerComponent),
    title: 'User',
    children: [
      {
        path: 'todos',
        loadComponent: () =>
          import('./components/users/components/todos/todos.component')
            .then(m => m.TodosComponent),
        title: 'Todos'
      },
      {
        path: 'albums',
        loadComponent: () =>
          import('./components/users/components/albums/albums.component')
            .then(m => m.AlbumsComponent),
        title: 'Albums'
      },
      {
        path: 'posts',
        loadComponent: () =>
          import('./components/users/components/posts/posts.component')
            .then(m => m.PostsComponent),
        title: 'Posts'
      },
      {
        path: 'post/:postId',
        loadComponent: () =>
          import('./components/users/components/post/post.component')
            .then(m => m.PostComponent),
        title: 'Post',
        children: [
          {
            path: 'comments',
            loadComponent: () =>
              import('./components/users/components/posts/comments/comments.component')
                .then(m => m.CommentsComponent),
            title: 'Comments'
          },
        ]
      },
    ]
  },
  // {
  //   path: '**',
  //   redirectTo: '/users'
  // }
];
