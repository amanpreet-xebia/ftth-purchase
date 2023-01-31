import { useContext, useEffect } from "react";
import AppContext from '../AppContext';

export default function Home() {
const value = useContext(AppContext);
const { locale } = value.state;
  useEffect(() => {
    window.location.href = `https://salam.sa/${locale || 'en'}/personal`;
  }, []);
  return <></>;
}
