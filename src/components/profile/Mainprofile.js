import React from 'react';
import photo from '../../Assets/imgs/Photo.jpg';
import { Container } from 'react-bootstrap';

function Profile() {
  return (

    
    <Container>
      
      <div className="row align-items-center justify-content-center mt-5">
        <div className="col-lg-4 d-flex align-items-center ">
          <div className="card-body">
            <img
              src={photo}
              alt="avatar"
              className="rounded img-responsive position-center"
              style={{ maxWidth: '100%', height: 'auto', maxHeight: 'calc(100vh - 100px)' }}
            />
          </div>
          <br />
        </div>
      </div>
    </Container>
  );
}

export default Profile;