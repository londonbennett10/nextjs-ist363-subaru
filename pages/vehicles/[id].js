import ColorPicker from '../../components/ColorPicker';
import CallToAction from '../../components/CallToAction';
import Container from '../../components/Container';
import Head from 'next/head';
import Heading from '../../components/Heading';
import Image from 'next/image';
import Layout from '../../components/Layout';
import Showcase from '../../components/Showcase';
import TrimPicker from '../../components/TrimPicker';
import ReviewPicker from '../../components/ReviewPicker';


import { getVehicleBySlug, getAllVehicleSlugs } from '../../lib/api';
import { getDrivingLocations } from '../../lib/locations';

import { getReviews } from '../../lib/ratings';

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
    const drivingLocations = getDrivingLocations();
    const reviews = getReviews();

    return {
        props : {
            vehicleData,
            drivingLocations,
            reviews
        }
    }
}


//3




const SingleVehiclePage = ({ vehicleData , drivingLocations, reviews }) => {
    

    const {title, slug, featuredImage, vehicleInformation} = vehicleData;
    const { headline } = vehicleInformation.showcase;
    const { trimLevels , vehicleColors } = vehicleInformation;
    return <Layout> 
        <Head> 
            <title> {title} | Subaru Vehicles </title>
        </Head>
       <Showcase 
            subtitle={title}
            title={headline}
            featuredImage={featuredImage} 
       /> 

       <div id="main-content">
            <Container>
                <TrimPicker trims={trimLevels} locations={drivingLocations} />

                <ColorPicker 
                    colors={vehicleColors}
                />



            </Container>

            <ReviewPicker reviews={reviews}/>

                <CallToAction vehicleName={title} />

            

            
       </div>
        
        
    </Layout>
}

export default SingleVehiclePage;