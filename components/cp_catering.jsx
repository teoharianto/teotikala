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
  const [show, setShow] = useState(false);
  if (data && data.menuBistros) {
    
    return (
        
        <div className="row">
        {data.menuBistros.map(listBistro => (
        <div className="col-lg-4 col-md-6 special-grid drinks">
            <div className="gallery-single fix">
                {listBistro.menu_image.map(showImage =>
                <img src={`http://103.56.149.4:1337${showImage.url}`} className="img-fluid" alt="Image" />
                )}
                    <div className="why-text">
                        <h4>{listBistro.menu_name}</h4>
                        <p>{listBistro.menu_description}</p>
                        <h5>{`IDR ${listBistro.menu_price}`}
                        <Button style={{marginLeft:"90px"}}  variant="primary" size="sm" onClick={() => setShow(true)}>
                        Show
                        </Button>
                        </h5>
                    </div>
            </div>
                        <Modal
                            show={show}
                            onHide={() => setShow(false)}
                            dialogClassName="modal-90w"
                            aria-labelledby="example-custom-modal-styling-title"
                        >
                            <Modal.Header closeButton>
                            {listBistro.menu_image.map(showImage =>
                                    <Card.Img variant="top" src={`http://103.56.149.4:1337${showImage.url}`} />
                            )}

                            </Modal.Header>
                            <Modal.Body>
                                <Modal.Title id="example-custom-modal-styling-title">
                                {listBistro.menu_name}
                                </Modal.Title>
                                <p>
                                {listBistro.menu_description}
                                </p>
                                <h5>{`IDR ${listBistro.menu_price}`}</h5>
                            </Modal.Body>
                        </Modal>
        </div>
        ))}
        </div>

    );
  }
  return <div>Loading...</div>;
}

export default MenuBistroList;