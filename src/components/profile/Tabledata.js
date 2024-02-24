import React from 'react'
import { Container } from 'react-bootstrap'

function Tabledata() {
  return (
    <div>
        <Container>
        <div className="card-body" style={{border:'1px solid black', borderRadius:'5px' , backgroundColor:'white' ,textAlign: 'center' , padding: '1rem'}}>
      <div className="row">
        <div className="col-sm-3">
          <p className="mb-0">Full Name</p>
        </div>
        <div className="col-sm-9">
          <p className="text-muted mb-0">Sara</p>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-sm-3">
          <p className="mb-0">Gender</p>
        </div>
        <div className="col-sm-9">
          <p className="text-muted mb-0"></p>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-sm-3">
          <p className="mb-0">Net Worth</p>
        </div>
        <div className="col-sm-9">
          <p className="text-muted mb-0"></p>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-sm-3">
          <p className="mb-0">Nationality</p>
        </div>
        <div className="col-sm-9">
          <p className="text-muted mb-0"></p>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-sm-3">
          <p className="mb-0">Occupation</p>
        </div>
        <div className="col-sm-9">
          <p className="text-muted mb-0"></p>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-sm-3">
          <p className="mb-0">Height</p>
        </div>
        <div className="col-sm-9">
          <p className="text-muted mb-0"></p>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-sm-3">
          <p className="mb-0">Birthday</p>
        </div>
        <div className="col-sm-9">
          <p className="text-muted mb-0"></p>
        </div>
      </div>

    </div>
        </Container>
    </div>
  )
}

export default Tabledata