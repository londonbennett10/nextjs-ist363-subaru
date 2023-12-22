import Image from 'next/image';
import Layout from '../../components/Layout';
import { getVehicleBySlug , getAllVehicleSlugs } from "../../lib/api";
import Showcase from '../../components/Showcase';


//1 LALAl

export async function getStaticPaths(){
    const vehicles = await getAllVehicleSlugs();
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


//2


export async function getStaticProps({ params }) {
    const vehicleData = await getVehicleBySlug(params.id); 

    return {
        props : {
            vehicleData
        }
    }
}


//3


const SingleVehiclePage = ({ vehicleData }) => {
    const {title, slug, featuredImage, vehicleInformation} = vehicleData;
    const { headline } = vehicleInformation.showcase;
    return <Layout> 
       <Showcase 
            subtitle={title}
            title={headline}
            featuredImage={featuredImage} 
       /> 

       <div id="main-content">
            Main Content will go here
       </div>
        
        
    </Layout>
}

export default SingleVehiclePage;