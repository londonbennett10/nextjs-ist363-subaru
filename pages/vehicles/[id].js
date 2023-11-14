
import Layout from '../../components/Layout';
import { getVehicleBySlug , getAllVehicleSlugs } from "../../lib/api";


//1 LALAl

export async function getStaticPaths(){
    const pathsArr = getAllVehicleSlugs();
    const paths = vehicles.map((vehicle) => {
        const { slug } = vehicle.node;
        return{
            params: {
                id:slug
            }
        }
    });
    return{
        paths,
        fallback: false
    }

}





export async function getStaticProps({ params }) {
    const vehicleData = getVehicleBySlug(params.id); 

    return {
        props : {
            vehicleData
        }
    }
}



const SingleVehiclePage = ({ vehicleData }) => {
    const {model,price} = vehicleData;
    return <Layout> 
        <h1> {model} </h1>
        <h2> ${price} </h2>
    </Layout>
}

export default SingleVehiclePage;