import Card from "./context";

function Home() {
  return (
    <Card
      txtcolor="black"
      header="Bad Bank Landing Page"
      title="Welcome to the bank"
      text="You can move around using the navigation bar."
      body={
        <img src="bank.png" className="img-fluid" alt="Illutration of a bank" />
      }
    />
  );
}

export default Home;
