import { NbMenuItem } from "@nebular/theme";

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: "Inicio",
    icon: "home-outline",
    link: "/pages/dashboard",
  },
  {
    title: "Iniciar sesión",
    icon: "log-in-outline",
    link: "/pages/seguridad/login",
    home: true,
  },
  {
    title: "Módulo Candidatos",
    icon: "people-outline",
    link: "/pages/candidatos/listar",
  },
  {
    title: "Módulo Partidos",
    icon: "people-outline",
    link: "/pages/partidos/listar",
  },
  {
    title: "Módulo Mesas",
    icon: "people-outline",
    link: "/pages/mesas/listar",
  },
  {
    title: "Módulo Resultados",
    icon: "people-outline",
    link: "/pages/resultados/listar",
  },
  {
    title: "Cerrar Sesión",
    icon: "log-out-outline",
    link: "/pages/seguridad/login",
  },
];
