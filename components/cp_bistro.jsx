import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import React, { useState } from 'react';
import { Card, Button, Modal } from 'react-bootstrap';


const MENU_BISTROS = gql`
query {
    menuBistros{
      menu_name
      menu_description
      menu_price
    menu_image{
      url
    }
}
  }
`;

function MenuBistroList() {
  const {data} = useQuery(MENU_BISTROS);
  if (data && data.menuBistros) {
    
    return (       
        <div className="row special-list">
          {data.menuBistros.map(listBistro => (
            <div className="col-lg-4 col-md-6 special-grid drinks" style={{ marginBottom: '2rem'}}>
              <Card style={{ width: '18rem', marginBottom: '2rem', margin: '0 auto' }}>
                {listBistro.menu_image.map(showImage =>
                  <a className="lightbox" href={`https://admin.tikala-bistro.com${showImage.url}`}>
                    <Card.Img  className="img-fluid" variant="top" src={`https://admin.tikala-bistro.com${showImage.url}`} />
						      </a>
                )}
                <Card.Body>
                  <Card.Title><strong>{listBistro.menu_name}</strong></Card.Title>
                    <Card.Text>
                      {listBistro.menu_description}                    
                    </Card.Text>
                      <h3><strong>{`IDR ${listBistro.menu_price}`}</strong></h3>
                  </Card.Body>
              </Card>
            </div>
          ))}
        </div>
    );
  }
  return <div>Loading...</div>;
}

export default MenuBistroList;