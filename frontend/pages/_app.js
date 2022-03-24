
 import "./index.scss"
 import "./main.scss"
import "../pages/demo.css"
import "../public/assets/css/themify-icons.css"
import "../public/assets/css/feather.css"
 import "../public/assets/css/style.css"
 import "../public/assets/css/emoji.css"
 import { AuthProvider } from "../context/AuthContext";
function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp
