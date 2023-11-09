import Layout from "../../components/Layout";
import Link from 'next/link';
import { getAllVehicles } from "../../lib/api";


export async function getStaticProps(){
    const vehicles = getAllVehicles();

    return{
        props: {
            vehicles
        }
    }
}

const VehiclesPage = ({vehicles}) => {    
    return <Layout> 
        <h1>vehicles</h1>
        <ul>
            {vehicles.map((vehicle, index) => {
                const{ model, price, slug} = vehicle;
                return <li key={index}> 
                        <h3> {model} </h3>
                        <h4> ${price} </h4>
                        <p> <Link href={`/vehicles/${slug}`}> Learn More </Link> </p>
                     </li>
            })}
        </ul>
    </Layout>
//comment
}

export default VehiclesPage;