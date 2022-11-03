import '../styles/globals.css'
import { Navigation } from "../components/Navigation.jsx";
import {font} from './font.js'
export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <title>Dr-My App Next 13 </title>
      </head>
      {/* <body className={font.className}> */}
      <body className={font.variable}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
