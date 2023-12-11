import { useLoaderData, useParams } from "react-router-dom";

const PrivateGameDetails = () => {
    const { id } = useParams();
    const gameServiceDetails = useLoaderData();
    const gameServiceId = parseInt(id);
    const findGame = gameServiceDetails.find(
        (gameServiceDetail) => gameServiceDetail.id === gameServiceId
    );
    const { service_name, image, description, price } = findGame;

    return (
        <div style={{background: 'url(https://i.ibb.co/MnRYy5R/service-Details-Back.jpg)'}}>
            <div className="font-josefinSans md:p-28">
                
                <div className="card glass">
                    <figure>
                        <img
                            src={image}
                            alt=""
                        />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title text-gray-800 text-3xl font-orbitron">{service_name}</h2>
                        <div className="border-2 border-gray-400"></div>
                        <p className="text-white">{description}</p>
                        <div className="card-actions justify-end">
                        <p className="hover:underline hover:cursor-pointer font-bold text-2xl text-white">
                                Price: <span className="text-2xl">{price}</span>
                                $
                            </p>
                        <button className="px-4 py-2 bg-orange-600 font-orbitron text-white">
                                Buy Now!
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrivateGameDetails;
