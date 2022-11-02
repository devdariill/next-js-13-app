import '../styles/globals.css'
import { Navigation } from "../components/Navigation.jsx";
export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <title>My App Next 13</title>
      </head>
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
