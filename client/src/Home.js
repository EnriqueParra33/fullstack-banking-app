import Card from './Card';

function Home() {
  return (
    <div className="content">
      <Card
        txtcolor="black"
        header="EPM International Bank"
        title="World's Most Baddest Bank"
        text="This is the most insecure place to store your money and information, feel free to provide us and everyone else your personal data."
        body={<img src="bank.png" className="img-fluid" alt="Illustration of a bank" />}
      />
    </div>
  );
}

export default Home;
