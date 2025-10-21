export type BeerCardProps = {
  image: string;
  name: string;
  abv: string;
  volume: string;
  price: number;
  available: boolean;
};

const BeerCard = (props: BeerCardProps) => {
  return (
    <div className="beerCard">
      <img src={props.image} alt={props.name} />
      <h3>
        {props.name} {props.abv} {props.volume}
      </h3>
      <p>{props.price} Ft</p>
      <strong className={props.available ? "available" : "notAvailable"}>
        {props.available ? "Raktáron" : "Nincs raktáron"}
      </strong>
    </div>
  );
};

export default BeerCard;
