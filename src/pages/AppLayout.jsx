import AppNav from "../components/AppNav";
import SideBar from "../components/SideBar";
import Map from "../components/Map";
import styles from "./AppLayout.module.css";
import User from "../components/User";
import { useAuth } from "../context/FakeAuthContext";

export default function AppLayout() {
  const { isAuthenticated } = useAuth();
  return (
    <div className={styles.app}>
      <SideBar />
      <Map />
      {isAuthenticated && <User />}
    </div>
  );
}
