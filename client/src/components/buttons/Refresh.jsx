import { homeBtn } from "../../styles/Buttons.module.css";

export default function Refresh({ handleRefresh }) {
  return (
    <div>
      <button className={homeBtn} onClick={() => handleRefresh()} />
    </div>
  );
}
