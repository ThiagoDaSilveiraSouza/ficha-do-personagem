import * as Modals from "./Modals";

export const ModalsContainer = () => {
  return (
    <div>
      {Object.values(Modals).map((CurrentModal, index) => (
        <CurrentModal key={index + "modal"} />
      ))}
    </div>
  );
};
