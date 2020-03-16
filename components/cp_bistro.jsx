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
        <div className="col-lg-4 col-md-6 special-grid drinks">
            <div className="gallery-single fix">
                {listBistro.menu_image.map(showImage =>
                <img src={`https://admin.tikala-bistro.com${showImage.url}`} className="img-fluid" alt="Image" />
                )}
                    <div className="why-text">
                        <h4>{listBistro.menu_name}</h4>
                        <p>{listBistro.menu_description}</p>
                        <h5>{`IDR ${listBistro.menu_price}`}</h5>
                    </div>
            </div>
        </div>
        ))}
        </div>

    );
  }
  return <div>Loading...</div>;
}

export default MenuBistroList;