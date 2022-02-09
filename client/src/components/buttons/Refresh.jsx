export default function Refresh({ handleRefresh }) {
  return (
    <div>
      <button onClick={() => handleRefresh()}>Reset</button>
    </div>
  );
}
