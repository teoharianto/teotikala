import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import React, { useState } from 'react';
import { Card, Button, Modal } from 'react-bootstrap';


const SPECIAL_OFFERS = gql`
query {
    specialOffers{
    id
    offer_name
    offer_description
    offer_image{
      url
    }
}
  }
`;

function PromoList() {
  const {data} = useQuery(SPECIAL_OFFERS);
  const [show, setShow] = useState(false);
  if (data && data.specialOffers) {
    
    return (
        
        <div className="gallery-box" >
        <div className="container" >
        <div className="tz-gallery" >
        <div className="row" data-testid="postListList" >
        {data.specialOffers.map(promo => (
            <div className="col-sm-12 col-md-4 col-lg-4" key={promo.id} style={{ marginBottom: '2rem'}}>
            <Card style={{ width: '18rem', marginBottom: '2rem', margin: '0 auto' }}>
            <a className="lightbox" href={`https://admin.tikala-bistro.com${promo.offer_image.map(show => (show.url))}`}>
                <Card.Img  className="img-fluid" variant="top" src={`https://admin.tikala-bistro.com${promo.offer_image.map(show => (show.url))}`} />
						</a>
                <Card.Body>
                    <Card.Title>{promo.offer_name}</Card.Title>
                    <Card.Text>
                        {promo.offer_description}
                    </Card.Text>       
                </Card.Body>
            </Card>
            </div>
        ))}
        </div>
        </div>
        </div>
        </div>

    );
  }
  return <div>Loading...</div>;
}

export default PromoList;