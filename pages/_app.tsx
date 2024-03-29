import 'tailwindcss/tailwind.css';
import type {AppProps} from 'next/app';

const MyApp: React.FC<AppProps> = ({Component, pageProps}: AppProps) => {
  return <Component {...pageProps} />;
};

export default MyApp;
