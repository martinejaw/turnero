export enum AdminPaths {
  ADMIN = 'admin',
  SUCURSAL = 'admin/sucursales',
  TURNOS = 'admin/turnos',
  TIPO_TURNOS = 'admin/tipos-turno',
}

export enum PublicPaths {
  LOGIN = 'login',
  SIGNUP = 'signup',
  HOME = '',
}

export const Paths = { ...AdminPaths, ...PublicPaths };
export type Paths = typeof Paths;
