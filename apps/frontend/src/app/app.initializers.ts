import { APP_INITIALIZER } from '@angular/core';
import { AuthService } from './core/auth/auth.service';

const Initializers = [
  {
    provide: APP_INITIALIZER,
    useFactory: (as: AuthService) => () => as.retrieveState(),
    deps: [AuthService],
    multi: true,
  },
];

export default Initializers;
