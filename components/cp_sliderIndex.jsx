import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import React from 'react';
import AwesomeSlider from 'modified-react-awesome-slider';
import withAutoplay from 'modified-react-awesome-slider/dist/autoplay';
import 'modified-react-awesome-slider/dist/styles.css';

const AutoplaySlider = withAutoplay(AwesomeSlider);

const SPECIAL_OFFERS = gql`
query {
    specialOffers{
    id
    offer_name_carousel
    offer_desc_carousel
    offer_image{
      url
    }
}
  }
`;

const imgSource = "https://admin.tikala-bistro.com/uploads/89dd7b724f494874ab3a16d6e15e9abf.jpg"

function SliderList() {
  const {data} = useQuery(SPECIAL_OFFERS);
  if (data && data.specialOffers) {
    
    return (
        <div className="cover-slides" >
                <ul>
                <AutoplaySlider
                    play={true}
                    cancelOnInteraction={false} // should stop playing on user interaction
                    interval={4000}
                    bullets={false}
                    fillParent={true}
                    >
                    
                     
                      {data.specialOffers.map(promo => (
                      <div className="darken-background" data-src={`https://admin.tikala-bistro.com${promo.offer_image.map(show => (show.url))}`}>
                        <li className="text-center">
                          <div className="row" style={{ marginTop: "40vh" }}>
                            <div className="col-md-12">
                              <h1 className="m-b-20"><strong>{promo.offer_name}</strong></h1>
                              <p className="m-b-40">{promo.offer_description}</p>
                              {/* <p><a className="btn btn-lg btn-circle btn-outline-new-white" href="#">Reservation</a></p> */}
                            </div>
                          </div>
                        </li>
                      </div>
                      ))}
                      
                   
                   

                </AutoplaySlider>
                </ul>
                

        </div>

    );
  }
  return <div>Loading...</div>;
}

export default SliderList;