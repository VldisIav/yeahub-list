import { Outlet } from "react-router-dom";
import Header from "../../widgets/Header";
import Footer from "../../widgets/Footer/ui/Footer";
import { ContainerBlock } from "../../widgets/ContainerBlock";
import styles from './AppLayout.module.css'
function AppLayout() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <ContainerBlock>
        <main>
          <Outlet />
        </main>
      </ContainerBlock>
      <Footer />
    </div>
  );
}

export default AppLayout;
