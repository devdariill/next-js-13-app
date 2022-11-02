import Link from "next/link";
import styles from './Navigation.module.css'
const links = [
  {
    label: "Home",
    route: "/",
  },
  {
    label: "About",
    route: "/about",
  },
  {
    label:"Posts",
    route:"/posts"
  }
];
export function Navigation() {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.navigation}>
          {links.map(({ label, route }) => (
            <li key={route}>
              <Link href={route}>
                {/* <a href=""></a>  no necesario ya qque se implementa solo*/}
                {label}
                {/* signle page aplication, no recarga la pagina cada vez q ue se navege a diferentes */}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

// if !page.jsx its not a path, its a component